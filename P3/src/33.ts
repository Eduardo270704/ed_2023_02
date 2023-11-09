import { readFileSync } from "fs";
import { join } from "path";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function lerArquivo(filename: string): string {
  return readFileSync(join(__dirname, filename), "utf-8");
}

function buscar(
  texto: string,
  palavra: string
): { ocorrencias: number[]; deslocamentos: number } {
  const ocorrencias: number[] = [];
  const tamanhoPalavra = palavra.length;
  let deslocamentos: number = 0;
  for (let i = 0; i <= texto.length - tamanhoPalavra; i++) {
    const substring = texto.substring(i, i + tamanhoPalavra);
    if (substring === palavra) {
      ocorrencias.push(i);
    }
    deslocamentos++;
  }
  return { ocorrencias, deslocamentos };
}

class Search<T> {
  sequential(e: T, v: T[]): number {
    let pos: number = -1;
    for (let i: number = 0; i < v.length; ++i) {
      if (e == v[i]) return i;
    }
    return pos;
  }

  sequential_w(e: T, v: T[]): number {
    let pos: number = 0;
    while (pos < v.length && v[pos] != e) ++pos;
    if (pos == v.length) return -1;
    else return pos;
  }

  /* sequential with sentinel */
  sequential_ws(e: T, v: T[]): number {
    let pos: number = 0;
    v.push(e);
    while (v[pos] != e) ++pos;
    if (pos == v.length - 1) {
      v.pop();
      return -1;
    } else {
      v.pop();
      return pos;
    }
  }

  binary(e: T, v: T[]): number {
    let start = 0;
    let end = v.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (start <= end) {
      //console.log("middle: ", middle);
      if (v[middle] == e) {
        return middle;
      } else if (v[middle] > e) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    return -1;
  }

  binary_r(e: T, v: T[], start: number, end: number): number {
    let middle = Math.floor((start + end) / 2);
    if (start > end) {
      return -1;
    } else if (v[middle] > e) {
      return this.binary_r(e, v, start, middle - 1);
    } else if (v[middle] < e) {
      return this.binary_r(e, v, middle + 1, end);
    } else {
      return middle;
    }
  }
}

let filename: string = prompt(
  `Digite o caminho e o nome do seu arquivo .txt: `
);
const fileContent: string = lerArquivo(filename);
console.log(`Texto do txt: ${fileContent}`);
let palavraBuscada: string = prompt(
  `Digite a palavra que deseja encontrar em seu arquivo: `
);

const search = new Search<string>();
const fileContentArray = fileContent.split(/\s+/); // Dividir o conteúdo do arquivo em um array de palavras
const resultadoBusca = search.sequential(palavraBuscada, fileContentArray);

console.log(
  `A palavra "${palavraBuscada}" foi encontrada na posição: ${resultadoBusca}`
);