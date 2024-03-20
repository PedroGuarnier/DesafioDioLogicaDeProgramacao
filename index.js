let nomeDoHeroi= "Sir Galahad"
let quantidadeDeXp = 10002
let nivelDoHeroi= ""

switch(true){
    case quantidadeDeXp<=1000:
    nivelDoHeroi= "Ferro"
    break
    case quantidadeDeXp <=2000:
    nivelDoHeroi= "Bronze"
    break
    case quantidadeDeXp <=5000:
    nivelDoHeroi= "Prata"    
    break
    case quantidadeDeXp <=7000:
    nivelDoHeroi= "Ouro"
    break 
    case quantidadeDeXp <=8000:
    nivelDoHeroi= "Platina"
    break
    case quantidadeDeXp <=9000:
    nivelDoHeroi= "Ascendente"
    break
    case quantidadeDeXp <=10000:
    nivelDoHeroi="Imortal"
    break 
   default:
    nivelDoHeroi="Radiante"
}
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel " + nivelDoHeroi)

