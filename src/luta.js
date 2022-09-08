function jogada_de_dado(level){
    const rand = (num) => Math.floor(Math.random()*num)
    return rand (12) + rand(level);
}

function luta(player1, player2){
    while(true){
        const jogada_playe1 = jogada_de_dado(player1().level()) + player1.getArma().peso();
        const jogada_playe2 = jogada_de_dado(player2().level()) + player2.getArma().peso();
        

        if(jogada_playe1 < jogada_playe2){
            player1.acerta();
            console.log(player2.nome() + "golpeou o " + player1.nome());

        } else if (player1 > player2){
            player2.acerta();
            console.log(player1.nome() + "golpeou o " + player2.nome());

        } else {
            console.log("Aos erraram");
        }

        if(player1.morto()){
            console.log(player1.nome() + "está morto, foi morto por" + player2.nome());
            return true;
        }
        if(player2.morto()){
            console.log(player2.nome() + "está morto, foi morto por" + player1.nome());
            return false;
        }
    }
}
module.exports = luta;