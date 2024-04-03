const readline = require("readline-sync"); 

import {Stack} from "./Stack";

const pilha = new Stack<string>(); 

let opcao: number; 

do{
        console.log("*******************************************");
        console.log("                                           ");
        console.log("         1- Adicionar livro na pilha       ");
        console.log("         2- Listar todos os livros         ");
        console.log("         3- Retirar livro da pilha         ");
        console.log("         0- Sair                           ");
        console.log("                                           ");
        console.log("*******************************************");

        opcao = readline.questionInt("\nEntre com a opcao desejada: ")

        switch(opcao){
            case 1: 
                    const nome = readline.question("\nDigite o nome: "); 

                    pilha.push(nome);

                    console.log("\nPilha:\n");

                    pilha.printStack();

                    console.log("\nLivro Adicionado!");

                    break;
            case 2: 
                    if(pilha.isEmpty())
                            console.log("\nA pilha esta vazia!");
                    else{
                            console.log("\nLista de livros na pilha:\n")

                            pilha.printStack();
                    }
                    break;
            case 3: 
                    if(pilha.isEmpty())
                            console.log("\nA pilha esta vazia!\n");
                    else{
                            console.log("\nPilha:\n");

                            pilha.pop(); 

                            pilha.printStack(); 

                            console.log("\nO livro foi retirado da pilha!\n");

                    }
                    break;
            case 0: 
                    console.log("\nPrograma finalizado!");
                    break;
            default:
                    console.log("\nDigite uma opcao valida! ")

    }

}
while(opcao !== 0);