import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let n1_lesm:number = parseInt(prompt("Digite o primeiro número:"));
let n2_lesm:number = parseInt(prompt("Digite o segundo número:"));

let resultado_lesm:string = ""; 

switch (true){
    case n1_lesm > n2_lesm:
        resultado_lesm = "O primeiro número é o maior.";
        break;

    case n1_lesm <= n2_lesm:
        resultado_lesm = "O primeiro número é menor ou igual ao segundo.";
        break;
}
console.log (resultado_lesm);

export {};