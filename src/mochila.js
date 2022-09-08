const item = require("./item")
const db = require('./services/client')

const mochila = function(n,capacidade){
    const _item = item(n);
    const _tamanho = capacidade || 5;
    const _itens = {}

    function acumular(item){
        if(tamanho() >= _tamanho){
            return "Sua mochila está cheia, você deve dropar itens primeiro"
        }
        if(!item.isItem){
            return "A mochila só pode se preenchida com itens não" + typeof item ; 
        }
        _item[item.nome()] = item;
        return null;
    }
    function inclua(itemNome){
        return _itens[itemNome] != null;
    }
    function busque(itemNome){
        let item = _itens[itemNome]
        if(item == null){
            return null;
        }
        delete _itens[itemNome];
        return item;
    }
    async function itens(){
        await db.connect()
        var result;
        result = await db.query('SELECT * from item')
        return result;
    }
}