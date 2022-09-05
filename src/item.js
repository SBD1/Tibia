const item = function(n){
    const _nome = n;
    function  nome(){
        return _nome;
    }
    return {nome, isItem : true};
}

module.exports = item;