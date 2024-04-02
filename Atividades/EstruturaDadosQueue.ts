import readlinesync = require("readline-sync");
import { Queue } from "./Queue";

let opcao: Number
let nome: string

const fila = new Queue<string>();

do{
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Adicionar Clientes na Fila           ");
console.log("            2 - Listar todos os Clientes             ");
console.log("            3 - Retirar Cliente da fila              ");
console.log("            0 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");

opcao = readlinesync.questionInt("Digite a opcao que deseja: ");

switch(opcao){
    case 1:
      nome = readlinesync.question("\nDigite o nome: ")
        fila.enqueue(nome)
        console.log("Fila: ")
        fila.printQueue()
        console.log("Cliente adicionado!")
        break;

    case 2:
        if(fila.isEmpty())
        console.log("A fila está vazia!")

    else{
        console.log("Lista de Clientes na fila")
        fila.printQueue()

    }
        break;

    case 3:
        if(fila.isEmpty())
        console.log("A fila está vazia!")
        
        else{
            fila.dequeue()
            console.log("Fila: ")
            fila.printQueue()
            console.log("O cliente foi chamado!")
        }
        break;
    
    case 0:
        console.log("Programa Finalizado!")
        break;
        
    default:
        console.log("Opcao Invalida!")
        break;
}
}while(opcao !== 0)