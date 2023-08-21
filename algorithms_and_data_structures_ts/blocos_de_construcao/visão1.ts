import { somar, subtrair, despedir } from "./modelo";
let escolha: string
escolha = "somar"
let resultado: number
switch (escolha) {
    case "somar":
        resultado = somar(1, 2);
        console.log(resultado)
        break
    case "subtrair":
        resultado = subtrair(1, 2);
        console.log(resultado)
        break
    case "despedir":
        console.log(despedir())
        break
}

