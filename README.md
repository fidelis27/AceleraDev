# Desafio AceleraDev
## Codenation - React - Online

### Resumo
Este repositório é referente ao código utilizado para resolver o desafio Acelera Dev.
A linguagem utilizada é javascript, com uso framework React.

----------------------------------------------------------------------------------------------------------------------------------------

### Desafio
> Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN'. A requisição vai ser um JSON conforme o exemplo, que retornará um score:

```
{
	"numero_casas": 10,
	"token":"token_do_usuario",
	"cifrado": "texto criptografado",
	"decifrado": "aqui vai o texto decifrado",
	"resumo_criptografico": "aqui vai o resumo"
}
```

> O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome answer.json, que irá usar no restante do desafio. Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo decifrado. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo sha1 e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo sha1 do texto decifrado. Seu programa deve submeter o arquivo atualizado para correção via POST para a API: 'https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN'

>OBS: a API espera um arquivo sendo enviado como multipart/form-data, como se fosse enviado por um formulário HTML, com um campo do tipo file com o nome answer. Considere isso ao enviar o arquivo.

>O resultado da submissão vai ser sua nota ou o erro correspondente. Você pode submeter quantas vezes achar necessário, mas a API não vai permitir mais de uma submissão por minuto.


----------------------------------------------------------------------------------------------------------------------------------------

### Funcionalidades da aplicação

 A aplicação web espera o usuário entrar com seu Token gerado pela Codenation.dev. Com esse token é possível fazer uma requisição para a api da codenation e espera receber de volta um json contendo, entre os dados, uma mensagem criptografada e o número de casas puladas segundo a criptografia de Júlio Cesar. Estas duas informações são mostradas na tela. Tanto o compo cifrado como o número de casas a pular.
 Ao clicar em Decifrar o campo texto decifrado aparecerá com o texto decodicado.
 Ao clicar em Hash é gerado hash do campo decifrado.
 Ao clicar em Enviar o dados são enviado para Codenation para avaliação e retorna uma nota (Score) exibido no final.

 ### Tela aplicação
 ![acelera dev](https://user-images.githubusercontent.com/45233696/77694818-77d6f400-6f89-11ea-9bd3-9728512e6dd2.png)
