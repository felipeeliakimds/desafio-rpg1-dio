const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let nome = "felipe"
let XP = 0
let nivel = "oi"

function verificarNivel(){

    rl.question("pressione ENTER, para descobrir seu nível (ou digite 'sair' para fechar): ", (input) => {

        //condição de saída para o loop
        if(input && input.toLowerCase(
            
        ) === "sair"){
            console.log("Fechando programa...")
            rl.close();
            return;
        }

        //Geração de XP aleatórios
        //gera entre 0 e 11000
        XP = Math.floor(Math.random() * 11001)


 switch (true) {
    case XP <= 1000:
        nivel = "Ferro"
        break;

    case XP >= 1001 && XP <= 2000:
        nivel = "Bronze"
         break

    case XP >= 2001 && XP <= 5000:
        nivel = "Prata"
        break

    case XP >= 5001 && XP <= 6000:
        nivel = "Ouro" 
        break

    case XP >= 6001 && XP <= 7000:
        nivel = "Platina"
        break
    
    case XP >= 7001 && XP <= 8000:
        nivel = "Ascendente"
        break

    case XP >= 8001 && XP <= 10000:
        nivel = "Imortal"
        break

    case XP >= 10001:
        nivel = "Radiante"
        break

    default:
        nivel = "Indefinído"
        break
 
   }

   //Saída
console.log("-----------------------");
console.log(`Seu XP atual é: ${XP}`);
console.log(`O herói ${nome} está no nível de ${nivel} `);
console.log("-----------------------\n");

//O loop
 verificarNivel();
 
    });
}
verificarNivel()