import { mdLinks } from './md-links.js';

mdLinks('arquivos/texto.md')
.then((informacoes) => {
    console.log(informacoes);
}).catch(() => [

])