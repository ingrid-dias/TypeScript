const readline = require("readline-sync");

import {Queue} from "./Queue";

const fila = new Queue<string>();

let opcao: number; 

do{
        
        console.log("*******************************************");
        console.log("                                           ");
        console.log("         1- Adicionar cliente na fila      ");
        console.log("         2- Listar todos os clientes       ");
        console.log("         3- Retirar clientes da fila       ");
        console.log("         0- Sair                           ");
        console.log("                                           ");
        console.log("*******************************************");

        opcao = readline.questionInt("\nEntre com a opcao desejada: ")

        switch(opcao){
                case 1: 
                        const nome = readline.question("\nDigite o nome: ");
                        fila.enqueue(nome);
                        console.log("\nFila:\n");
                        fila.printQueue();
                        console.log("\nCliente Adicionado!");
                        break;
                case 2: 
                        if(fila.isEmpty())
                                console.log("\nA fila esta vazia!");
                        else{
                                console.log("\nLista de clientes na fila:\n")

                                fila.printQueue();
                        }
                        break;
                case 3: 
                        if(fila.isEmpty())
                                console.log("\nA fila esta vazia!\n");
                        else{
                                console.log("\nFila:\n");

                                fila.dequeue(); 

                                fila.printQueue(); 

                                console.log("\nO cliente foi chamado!\n");

                        }
                        break;
                case 0: 
                        console.log("\nPrograma finalizado! ");
                        break;
                default:
                        console.log("\nDigite uma opcao valida! ")

        }

}
while(opcao !== 0);



