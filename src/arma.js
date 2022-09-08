const item = require("./item")

const arma = function(n,p){
    const _item = item(n);
    const _peso = p || 1;

    function peso(){
        return _peso;
    }

    return {..._item,peso,isArma :true}
}
module.exports = arma;