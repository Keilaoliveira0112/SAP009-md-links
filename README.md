# Markdown Links
***
<div align="center">
  
  
 <img align="center" alt="Jest" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /> 
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="git" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="git" height="30" width="40" src="https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667" />
  <img align="center" alt="vscode" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  
  <br>

  Desenvolvido por : <br>
  <br>
    Keila Oliveira<br>
  [Linkedin](https://www.linkedin.com/in/keilaoliveiradev/) | [Github](https://github.com/Keilaoliveira0112)
  <br>

  
</div>
 
***

## Índice

* [1. Sobre o projeto](#1-sobre-o-projeto)
* [2. Instalação e comandos](#2-instalaçao-e-comandos)
* [3. Ferramentas utilizadas](#3-ferramntas-utilizadas)
* [4. Arquivos do Projeto](#4-arquivos-projeto)
* [5. Fluxograma](#5-fluxograma)

***

## 1. Sobre o projeto

Neste projeto focado em Back-End, foi criado uma ferramenta de linha de comando (CLI) que tem como objetivo permitir que o usuário execute a biblioteca diretamente do terminal, através de um módulo do Node.js que analisa e identifica links em arquivos [Markdown](https://pt.wikipedia.org/wiki/Markdown), e verifica o status _https_ de cada um deles.
## 2. Instalação e comandos

* Para instalar, execute o seguinte comando no terminal:

  `npm i md-links-keila-oliveira`

* Após a instalação, é possível executar os seguintes comandos:

  `md-links ./nomeDoDiretório/caminhoDoArquivo`

  Esse comando lê o arquivo Markdown especificado e imprime o caminho do arquivo, os links encontrados e seus textos correspondentes.

  `md-links ./nomeDoDiretório/caminhoDoArquivo --validate`

  Ao adicionar a flag --validate, o módulo fará uma requisição HTTP para verificar se cada link funciona ou não. Se o link existir e funcionar, será considerado como um link válido. Caso contrário, será marcado como inválido.

  `md-links ./nomeDoDiretório/caminhoDoArquivo --stats`

  Ao adicionar a flag --stats, será exibido um resumo estatístico dos links encontrados no arquivo especificado. Será mostrado o número total de links e o número de links únicos.

  `md-links ./nomeDoDiretório/caminhoDoArquivo --validate --stats`

  Ao adicionar as flags --stats e --validate juntas, além das informações de total de links e links únicos, também será exibido o número de links inválidos (broken) encontrados.

## 3. Ferramentas utilizadas

- [x] Node.js
- [x] JavaScript
- [x]Jest
- [x] GitHub
- [x] Miró (Fluxograma)



## 4. Arquivos do projeto

* `README.md` com descrição do módulo, instruções de instalação e uso,
  documentação da API e exemplos. 
* `index.js`: este arquivo deve exportar a função `mdLinks`.
* `package.json` deve possuir o nome, versão, descrição, autor, licença,
  dependências e scripts.
* `.editorconfig` com a configuração para o editor de texto. Este arquivo não
  deve ser alterado.
* `.eslintrc` com a configuração para o linter. Este arquivo contém uma
configuração básica para ESLint, se quiser colocar regras adicionais, você deverá modificar este arquivo.
* `.gitignore` para ignorar o `node_modules` e outras pastas que não devem
  ser incluídas no controle de versão (`git`).
* `test/md-links.spec.js` deve conter os testes unitários para a função
  `mdLinks()`. A sua implementação deve rodar estes testes.

## 5. Fluxograma
 <estilo div = "display:flex">   
  <div alinhar = "centro">

    <img alt="fluxograma" width="650"src="file:///C:/Users/keila/Downloads/MD-links%20(1).jpg"/><br>


   Fluxograma para desenvolvimento do projeto.
  </div>
 </div>
