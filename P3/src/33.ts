import { readFileSync } from "fs";
import { join } from "path";
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

function lerArquivo(filename: string): string {
  return readFileSync(join(__dirname, filename), "utf-8");
}

/* Basic sequential and binary search
 ** algorithms implemented in TypeScript
 **
 ** Author: Fabrício Galende M. de Carvalho, DSc
 */

class Search<T> {
  /* Por não ter a presença do professo Fabricio em, fiz dois métodos separados
  um mais semelhante ao original fornecido no repósitorio https://github.com/fabriciogmc/algorithms_and_data_structures_ts
  Sendo esse o sequential_array
  E um método que tomei mais liberdade para editar que ao meu ver atende mais o que é pedido na questão 3.3. atribuida a mim para a prova 3
  de Estrutura de Dados*/
  sequential_array(e: T, v: T[]): { ocorrencias: number[]; deslocamentos: number } {
    const ocorrencias: number[] = [];
    let deslocamentos: number = 0;
    for (let i = 0; i < v.length; i++) {
      deslocamentos++;
      if (v[i] === e) {
        ocorrencias.push(i+1);
      }
    }
    return { ocorrencias, deslocamentos };
  }

  //
  sequential_string(e: string, v: string): { ocorrencias: number[]; deslocamentos: number } {
    const ocorrencias: number[] = [];
    let deslocamentos: number = 0;
    for (let i = 0; i <= v.length - e.length; i++) {
      const substring = v.substring(i, i + e.length);
      deslocamentos++;
      if (substring === e) {
        ocorrencias.push(i);
      }
    }
    return { ocorrencias, deslocamentos };
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

const search = new Search<string>();

let filename: string = prompt(
  `Digite o caminho e o nome do seu arquivo .txt: `
);

const fileContent: string = lerArquivo(filename);
console.log(`Texto do txt: ${fileContent}`);

let searchedWord: string = prompt(
  `Digite a palavra que deseja encontrar em seu arquivo: `
);

let arrayFileContent = fileContent.split(" ");
//console.log(arrayFileContent);

const resultado_array = search.sequential_array(searchedWord, arrayFileContent);
console.log("Buscando como um array, a palavra procurada aparece nas posições:", resultado_array.ocorrencias, "e foi necessário", resultado_array.deslocamentos, "deslocamentos para chegar a essa conclusão");

const resultado_string = search.sequential_string(searchedWord, fileContent);
console.log("Buscando como um string, a palavra procurada aparece nas posições:", resultado_string.ocorrencias, "e foi necessário", resultado_string.deslocamentos, "deslocamentos para chegar a essa conclusão");