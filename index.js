
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificarHeroi() {
  
  rl.question("Digite o nome do herói: ", (nomeHeroi) => {
    rl.question("Digite a quantidade de XP do herói: ", (xpHeroi) => {
      const parsedXpHeroi = parseInt(xpHeroi);

      
      const heroLevels = {
        'Ferro': { minXP: 0, maxXP: 1000 },
        'Bronze': { minXP: 1001, maxXP: 2000 },
        'Prata': { minXP: 2001, maxXP: 5000 },
        'Ouro': { minXP: 5001, maxXP: 7000 },
        'Platina': { minXP: 7001, maxXP: 8000 },
        'Ascendente': { minXP: 8001, maxXP: 9000 },
        'Imortal': { minXP: 9001, maxXP: 10000 },
        'Radiante': { minXP: 10001 }
      };

      
      let nivelHeroi;
      for (const level in heroLevels) {
        if (parsedXpHeroi >= heroLevels[level].minXP && (heroLevels[level].maxXP ? parsedXpHeroi <= heroLevels[level].maxXP : true)) {
          nivelHeroi = level;
          break;
        }
      }

    
      console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);

      
      rl.close();
    });
  });
}


classificarHeroi();
