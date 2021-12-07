<h1 align="center">Gorila Backend</h1>
<p align="center">Este é um projeto desenvolvido como um teste para desenvolvedor backend no Gorila</p>

<p align="center">
 <a href="#instrucoes">Instruções</a> •
 <a href="#comoUsar">Como Usar</a> • 
 <a href="#rotas">Outras Rotas</a> • 
 <a href="#tecnologias">Tecnologias</a> •  
 <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	🚧  Front-end 🚀 Em construção...  🚧
</h4>

## 📢Instruções

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Postman](https://www.postman.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <>

# Instale as dependências
$ npm install

# Rode as migrations
$ knex migrate:latest

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000
```

## 📝Como Usar

Para o bom funcionamento do código abra o postman e execute as seguintes etapas.

###  ▶️ Post em http://localhost:3000/cdb

<p>
 1- Na aba Body selecione raw.<br>
 2- Selecione JSON como o tipo de input.<br>
 3- Insira o json no formato exemplificado abaixo.<br>
</p>

```
{
    "investmentDate":"2016-11-14",
    "cdbRate": 103.5,
    "currentDate":"2016-12-26"
} 
```
<p> 4- Clique em send.<p>

### ▶️ Post em http://localhost:3000/upload

Baixe a série histórica do CDI em formato CSV [aqui](https://gorila-blog.s3-us-west-2.amazonaws.com/CDI_Prices.csv)
<p> 1- Na aba Body selecione form-data.<br>
 2- No campo Key selecione o tipo file.<br>
 3- No campo Value selecione o arquivo baixado.<br>
 4- Clique em send.
</p>

### ▶️ Get em http://localhost:3000/calculaPreco/1

Você receberá uma resposta no formato exemplificado a seguir.

```
[{
	"date": "2016-12-26",
	"unitPrice": XX.XX
},
{
	"date": "2016-12-25",
	"unitPrice": YY.YY
},
{
	"date": "2016-12-24",
	"unitPrice": ZZ.ZZ
}]
```
## 🚥 Outras Rotas

### GET
- http://localhost:3000/taxas
- http://localhost:3000/cdb
- http://localhost:3000/cdb/:id (Seleciona um input de cdb pelo id)

### DELETE
- http://localhost:3000/cdb/:id (Deleta um input de cdb pelo id)

## 🔩 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/) 
- [Knex](https://knexjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Consign](https://www.npmjs.com/package/consign)
- [Body-parser](https://www.npmjs.com/package/body-parser)

## 🚀 Autor
---

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/53568644?s=400&u=e94be1e04998a6353c71b9b02ba418eb16127e1e&v=4" width="100px;" alt=""/>
 <br />

 ### Silas Silvério 👋🏽
Feito com ❤️

<div>
  <a href="https://www.instagram.com/silas_silverio/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:contatosilas.silverio22@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/silas-silverio/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>