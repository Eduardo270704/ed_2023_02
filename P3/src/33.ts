import * as fs from 'fs';

function readTextFile(filename: string): string {
  try {
    return fs.readFileSync(filename, 'utf8');
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${filename}`);
    process.exit(1);
  }
}

function searchWordOccurrences(text: string, word: string): number[] {
  const occurrences: number[] = [];
  let index = text.indexOf(word);
  
  while (index !== -1) {
    occurrences.push(index);
    index = text.indexOf(word, index + 1);
  }
  
  return occurrences;
}

function main() {
  const filename = 'exemplo.txt';
  const fileData = readTextFile(filename);
  console.log(fileData)
}

main();
