# Backend do projeto ChatGPT para Startups

Projeto feito com Express.js para receber chamadas POST na rota "/prompt" com o _prompt_ no body.  
Quando a requisição terminar, a resposta será recebida pelo body da response.  

Para usar essa aplicação, o usuário deverá ter uma conta na OpenAI com créditos para chamadas na API.  

Passos para execução:  

1. Clone o repositório:   
```
git clone https://github.com/jann712/backend-openai.git
```  

2. Instale as _packages_:  
```
npm i
```

3. Crie um arquivo .env no _root_ do diretório e insira um registro chamado OPENAI_API_KEY com o valor da sua chave  

4. Execute o servidor node:  
```
node index.js
```

