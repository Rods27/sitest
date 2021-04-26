# Smart Innovation Test
Um website para cadastro de albuns de música.

## Indice
* [Screenshots](#screenshots)
* [Tecnologias](#tecnologias)
* [IBM Cloud](#ibm-cloud)
* [Instalação](#instalação)
* [Configuração](#configuração)
* [FeedBack](#feedback)

## Screenshots

<img align="left" src="client/public/images/1.png" width="200" />

<img align="left" src="client/public/images/2.png" width="200" />

<img src="client/public/images/3.png" width="200" />

<img src="client/public/images/4.png" width="200" />

<img src="client/public/images/5.png" width="200" />

<img src="client/public/images/6.png" width="200" />


## Tecnologias
<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.mysql.com/">MySQL</a></li>
  <li><a href="https://www.ibm.com/br-pt/cloud/watson-text-to-speech">IBM Watson - Text to Speech</a></li>
  <li><a href="https://reactjs.org">React</a></li>
  <li><a href="https://sass-lang.com/">Sass</a></li>
</ul>

## IBM Cloud
#### Criando conta na IBM Cloud
1. Acesse a [IBM Cloud](https://cloud.ibm.com/login) faça seu login ou [crie sua conta](https://cloud.ibm.com/registration).
2. Na barra de Pesquisa, pesquise por **Text to Speech**.
	- Na aba **Criar**, selecione seu plano.
	- Ao lado direito, no painel, clique em **Criar**, caso já tenha uma instância, vá clique em **visualize uma existente**
	- Será rediredionado a pagina que tem suas credênciais, onde será usada mais a baixo na [configuração](#configurando-o-text-to-speech).

## Instalação
Assim que tiver clonado o repositório, usando o terminal do [vscode](https://code.visualstudio.com/) ou o terminal do seu sistema operacional, abra-o na pasta server.
- Installe as dependencias usando :
```
npm install
```
Execute o mesmo comando na pasta client.

Certifique-se que tem instalado o [Node](#tecnologias) e o [MySql](#tecnologias).

## Configuração

#### Criando o Database
- Assim que tiver tudo instalado, installe e abra o [MySQLWorkBench](https://www.mysql.com/products/workbench/), entre no seu servidor local, abra uma nova query e digite: 
```
CREATE DATABASE IF NOT EXISTS Smarkio_DB;
```
depois:
```
CREATE TABLE Smarkio_DB.commentaries (
	id INT unsigned NOT NULL auto_increment,
    comment varchar(200) NOT NULL,
    CONSTRAINT pk_commentaries PRIMARY KEY (id)
);
```
E o banco de dados estará criado.

#### Configurando a Conexão
É importante que antes de tentar iniciar a aplicação configure a conexão do seu servidor com o front-end, na pasta server/models/connection.js.
```
module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'Smarkio_DB',
  port: '3306',
})
```
#### Configurando o Text to Speech
Vá na pasta ```server/models/commentModel.js```.
```
//Text to Speech
const textToSpeech = new TextToSpeech({
  authenticator: new IamAuthenticator({ apikey: ''}),
  serviceUrl: '',
  disableSslVerification: true,
});
```
Coloque a sua chave fornecida pela IBM em ```apikey: ''```, e sua Url fornecida pela IBM em ```serviceUrl: ''```, para autenticação do microserviço.
Caso não tenha, volta pra sessão da [IBM Cloud](#criando-conta-na-ibm-cloud).

#### Iniciando a aplicação
- Vá na pasta server e digite ```npm run dev```, para abrir o servidor, na porta 3000.
- Vá na pasta client e digite ```npm start```, para iniciar a aplicação no browser, na porta 3001.

## Feedback 

Ficarei bem agradecido caso queira me dar um feedback costrutivo, caso queira meus contatos estarão abaixo!

Email: rods.leite27@gmail.com e <a href="https://linkedin.com/in/rodrigoleite27">Linkedin</a>.

