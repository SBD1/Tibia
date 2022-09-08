const acoes = function(criatura){
    const acertar = ["cabeça", "braço","perna"]
    function acerta(){
        const i = Math.floor(Math.random() * acertar.length);
        return acertar[i];
    }

    function mover(direcao){
        return function(sala,player){
            return _direcao(sala, direcao, player)
        }
    
    }

    function _direcao(sala, direcao,player){
        const porta = random.portas()[direcao];
        if(!porta){
            console.log("Você andou e machucou seu:" + acerta() + ". Ouch!");

        }else if(typeof porta == "object"){
            const itm = pl.use(porta.item);
            if(itm){
                return criatura[porta.sala];
            }else{
                pl.esconde(itm);
            }
            console.log("Voce precisa do(a)" + porta.item + "ara ir nesse caminho");

        }else{
            
        }
    }
}