console.clear();
const prompt = require("prompt-sync")();

console.log(
  "Olá!!, nesse jogo iremos acompanhar Jay, um jogador do Ceará Sport Club."
);
console.log(
  "Ele está se preparando para a final da Copa do Nortdeste, e tem uma semana para se preparar."
);
console.log(
  "Você escolhera sua rotina durante o dia indicando o que ele irá fazer."
);
console.log(
  "Mas cuidado se sua fome e sono ultrapassar 15 pt, Jay ira desmaiar e perdera pts de força e habilidade."
);
console.log("Se jay desmaiar 3 vezes o ele não podera participar da final.");
prompt("(aperte ENTER para começar)");
console.clear();

//funções
function timer(hora, horadd) {
  horaCerta = hora + horadd;
  return horaCerta;
}
function vhabilidade(hab) {
  status.habilidade = status.habilidade + hab;
}
function vforca(a) {
  status.forca = status.forca + a;
}
function vfome(b) {
  status.fome = status.fome + b;
}
function vsono(c) {
  status.sono = status.sono + c;
}

//variaveis
let hora = 5;
let dia = 1;
let desmaio = 0;
let lose = 0;
let status = { habilidade: 0, forca: 0, fome: 0, sono: 0 };

for (let i = 0; i < 7; i++) {
  console.log("Jay acorda para mais um dia de preparo!!");
  console.log();
  while (hora <= 24) {
    console.log(`Esses São os status de Jay:
Habilidade: ${status.habilidade} - Força: ${status.forca} - Fome: ${status.fome} - Sono: ${status.sono}`);
    console.log(`\nAgora são ${hora} horas do dia ${dia}, ele pode fazer: 
1- Ir treinar no CT (+5H)
2- Ir para Academia (+2H)                
3- Comer(+1H)
4- Dormir(+8H)`);
    console.log();
    var escolha = +prompt("Qual sua escolha?: ");
    console.clear();

    // condições de treino
    if (escolha == 1) {
      vhabilidade(3);
      vforca(1);
      vfome(5);
      vsono(4);
      hora = timer(hora, 5);
    } else if (escolha == 2) {
      vforca(4);
      vfome(4);
      vsono(4);
      hora = timer(hora, 2);

      //condições de fome e sono
    } else if (escolha == 3) {
      status.fome = 0;
      hora = timer(hora, 1);
      console.log(
        `Jay fez um bela refeição e sua fome foi para ${status.fome}`
      );
      console.log();
    } else if (escolha == 4) {
      status.sono = 0;
      hora = timer(hora, 8);
      console.log(`Jay dormiu bem e seu sono foi para ${status.sono}`);
      console.log();
    } else {
      console.log("Escolha Invalida");
      console.log();
    }
    // Condições de desmaio
    if (status.fome >= 15) {
      desmaio++;
      console.log(`Jay desmaiou de fome, você desmaiou ${desmaio} vezes`);
      console.log("Sua força sera diminuida");
      console.log();
      status.forca = status.forca - 1;
      hora = timer(hora, 8);
    } else if (status.sono >= 17) {
      desmaio++;
      console.log(`Jay desmaiou de sono, você desmaiou ${desmaio} vezes`);
      console.log("Sua força sera diminuida e seu sono sera zerado");
      console.log();
      status.sono = 0;
      status.forca = status.forca - 1;
      hora = timer(hora, 8);
    }
    //barramento causado pelas condições de desmaio
    while (status.fome > 15) {
      console.clear();
      console.log("Jay está com muita fome para fazer algo");
      console.log(`
1- Ir treinar no CT (+5H)
2- Ir para Academia (+2H)                
3- Comer(+1H)
4- Dormir(+8H)`);
      console.log();
      escolha = +prompt("Qual sua escolha?: ");
      if (escolha == 3) {
        status.fome = 0;
      }
    }
  }
  //condição de derrota precoce
  if (desmaio == 3) {
    lose++;
    break;
  }
  // passagem de tempo
  dia++;
  hora = hora - 24;
}
// condição de resultado final
if (lose == 1) {
  console.clear();
  console.log(
    `Jay desmaiou ${desmaio} vezes, ele ficou muito debilitado para jogar a final`
  );
  console.log("\nGAME OVER");
} else {
  console.log("Chegou o grande dia, A final da Copa do Nordeste!!");
  console.log("O resultado da nossa jornada é que:");

  //condições de vitoria ou derrota
  if (status.habilidade >= 45 && status.forca >= 45) {
    console.log("\nJay consegue jogar e Ganhar a fina da Copa do Nordeste");
  } else if (status.habilidade >= 53 && status.forca >= 53) {
    console.log(
      "\nJay consegue jogar, Ganhar a fina da Copa do Nordeste e se ganha o prêmio de melhor jogado da partida"
    );
  } else {
    console.log("Jay consegue jogar, mas perde o jogo");
    console.log("\nGAME OVER");
  }
}
