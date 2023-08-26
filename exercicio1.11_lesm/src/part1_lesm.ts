import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

let n1_lesm:number = parseInt(prompt("Digite o primeiro número:"));
let n2_lesm:number = parseInt(prompt("Digite o segundo número:"));

if (n1_lesm <= n2_lesm){
    console.log("O", n1_lesm," é menor ou igual ao", n2_lesm)
}
else {
    console.log("O", n1_lesm,"é o maior.")
}

