import { readFile, lstatSync, readdirSync, promises } from 'node:fs';
import { extname } from 'node:path';

export const isDirectory = (path) => lstatSync(path).isDirectory();
export const isFile = (path) => lstatSync(path).isFile();

 export const extrairInformacoes = (string, arquivo) => {
  if (!string) throw new Error('Dados Inválidos');
  const informacoes = string.split('](');
  const texto = informacoes[0].replace('[', '');
  const link = informacoes[1].replace(')', '');
  return {
    href: link,
    text: texto,
    file: arquivo,
  };
};
 

export const readingFile = (path, options) => {
    const encode = 'utf-8';
    const regex = /\[[^\]]+\]\(([^)]+)\)/gm;
    return promises.readFile(path, encode)
        .then((data) => {
            const arrLinks = data.match(regex);

            if (arrLinks === null) throw new Error('Arquivo sem link');
            const informacoes = arrLinks.map((item) => extrairInformacoes(item, path))
            return checkOptions(informacoes, options)
        })
        .catch((err) => {
            return err
        })
}
export const checkOptions = (data, options) => {
    if (options.validate && options.stats) {
        return validate(data)
            .then((response) => {
                return calculateStats(response)
            })
    } else if (options.validate) {
        return validate(data)
            .then((response) => {
                return response
            })
    } else if (options.stats) {
        return validate(data)
            .then((response) => {
                return calculateStats(response)
            })
    }
    else {
        return data
    }
}
export const validate = (data) => {
    return Promise.all(data.map((item) =>
        fetch(item.href)
            .then((res) => {
                item.status = res.status;
                if (res.status !== 200) {
                    item.message = 'FAIL'
                } else {
                    item.message = res.statusText;
                }
                return item;
            })
            .catch((err) => {
                item.status = err;
                item.message = 'Esse link não existe';
                return item;
            })
    ))
}

export const calculateStats = (data) => {
    const links = data.map((item) => item.href);
    const total = links.length;
   
    const unique = new Set(links).size;
    const broken = data.filter((item) => item.status !== 200).length;
    return {
        total,
        unique,
        broken
    }
}

export const mdLinks = (path, options) => {
    if (!path) throw new Error('Esse parâmetro é inválido');
   
    if (isFile(path)) {
        if (extname(path) !== '.md') throw new Error('Esta extensão é inválida');
        return readingFile(path, options);
    } else if (isDirectory(path)) {
        const files = readdirSync(path)
      /*   console.log(files); */
        const teste = files.filter((item) => extname(item) === '.md')
       /*  console.log(teste); */
        const formatacao = `${path}/${teste}`
        console.log(formatacao);
        return readingFile(formatacao, options);
      
       /*  let pathFile;
        const createPathFile = (path) => {
            const files = readdirSync(path)
            files.forEach((item) => {
                //juntar
                const formation = `${path}/${item}`
                if (item === isDirectory) {
                    return createPathFile(formation)
                } else if (item === isFile) {
                    if (extname(item) !== '.md') throw new Error('Esta extensão é inválida');
                    return pathFile = formation
                }
            })
        } */
       /*  createPathFile(path);
        console.log('nome do diretorio:', pathFile)
        return new Promise((resolve, reject) => {
            const encode = 'utf-8';
            const regex = /\[[^\]]+\]\(([^)]+)\)/gm;
            readFile(pathFile, encode, (err, data) => {
                if (err) throw reject(err);
                const conteudo = data.match(regex);
                const informacoes = conteudo.map((item) => extrairInformacoes(item, filePathMd));
                if (options.validate) {
                    validate(informacoes)
                        .then(resolve)
                } else {
                    resolve(informacoes);
                }
            })
        }); */
    }
};

 /* export const mdLinks = (caminhoDoArquivo, options) => {
  if (!caminhoDoArquivo) throw new Error('paramêtro inválido');
  return new Promise((resolve, reject) => {
    const encode = 'utf-8';
    const regex = /\[[^\]]+\]\(([^)]+)\)/gm;
    readFile(caminhoDoArquivo, encode, (err, data) => {
      if (err) throw reject(err);
      const conteudo = data.match(regex);
      const informacoes = conteudo.map((item) => extrairInformacoes(item, caminhoDoArquivo));

      if (options.validate) {
        Promise.all(informacoes.map((item) => fetch(item.href)
          .then((res) => {
            item.status = res.status;
            if (res.status !== 200) {
              item.message = 'FAIL';
            } else {
              item.message = res.statusText;
            }
            return item;
          })
          .catch((error) => {
            item.status = error;
            item.message = 'Esse link não existe';
            return item;
          })))
          .then(resolve); */
   /*    } else {
        resolve(informacoes);
      }
    });
  });
};
 */ 