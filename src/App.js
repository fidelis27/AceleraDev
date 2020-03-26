import React, { useState } from 'react'
import api from './api'
import sha1 from 'js-sha1'
import './style.css'


function App() {
  const [token, setToken] = useState()
  const [cifrado, setCifrado] = useState('')
  const [pulos, setPulos] = useState()
  const [decifrado, setDecifrado] = useState('')  
  const [hash, setHash] = useState('')
  const [score, setScore] = useState('0')


  async function handleSubmit(event) {
    event.preventDefault()

    const response = await api.get(`/generate-data?token=${token}`)

    setCifrado(response.data.cifrado)
    setPulos(response.data.numero_casas)

  }
  function handleDecifrar() {

    const newStr = cifrado.toLowerCase();
    const arr = Array.from(newStr.split(''));

    arr.map((letter, index) => {

      if (letter !== "." && letter !== " ") {

        if (!Number(letter)) {
          arr[index] = letter.charCodeAt() - pulos;
          if (arr[index] < 97) {

            const position = 122 - (97 - (arr[index])) - 1
            console.log(letter)
            console.log(position);

            if (!(position < 97)) {
              console.log(letter)
              console.log(position);
              arr[index] = 122 - (97 - (arr[index]) - 1)
            } else {
              arr[index] = letter.charCodeAt();
            }
          }
          arr[index] = String.fromCharCode(arr[index]);
        }
      }

    })
    setDecifrado(arr.toString().replace(/,/g, ''));
  }

  function handleFinal() {
    setHash(sha1(decifrado, pulos));
  }

  async function handleSalvar() {
    var obj = {
      numero_casas: pulos,
      token: token,
      cifrado: cifrado,
      decifrado: decifrado,
      resumo_criptografico: hash
    }

    var answer = JSON.stringify(obj)
    const blob = new Blob([answer], {
      type: 'application/json'
    });

    var response = new FormData()
    response.append('answer', blob)

    const _score = await api.post(`/submit-solution?token=${token}`, response)
    setScore(_score.data.score)
    setCifrado('');
    setDecifrado('');
    setHash('');
  }
  return (
    <>

      <div className="container">
        <h1> Hello AceleraDev! </h1>
        <form onSubmit={handleSubmit}>
          <label className="token"> TOKEN* </label>
          <input
            id="token"
            type="text"
            placeholder="Insira seu token aqui"
            value={token}
            onChange={event => setToken(event.target.value)}
          />
          <button type="submit" className="btn">Enviar Requisição</button>
        </form>

        <div className="group">

          <h3>Número de casas: <span>{pulos}</span></h3>
          <hr></hr>


          <h2>Texto cifrado:</h2>
          <div className="field">
            <span>{cifrado}</span>
            <button type="button" className="btn" onClick={() => handleDecifrar()}>Decifrar</button>
          </div>
          <hr></hr>



          <h2>Texto Decifrado</h2>
          <div className="field">
            <span>{decifrado}</span>
            <button type="button" className="btn" onClick={() => handleFinal()}>Hash</button>
          </div>
          <hr />

          <h2>Hash:</h2>
          <div className="field">
            <span>{hash}</span>
            <button type="button" className="btn" onClick={() => handleSalvar()}>Enviar</button>
          </div>
          <hr />


          <div className="score">
            <span>Score: {score}</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
