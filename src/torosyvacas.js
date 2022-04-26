class TorosYVacas {
    constructor (codigoSecreto){
    this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento){
        let esVaca = "";
        if(intento === this.codigoSecreto){
            return "Ganaste!";
        }
        esVaca =  this.siEsVaca(intento);
        return esVaca;
    }
    siEsVaca(intento){
        let resp = "";
        for(var i=0; i < this.codigoSecreto; i++){
            if(intento.includes(this.codigoSecreto.at(i))){
                resp += "*";
            }
        }
        return resp;
    }
    siEsToro(intento){
        let cadena = "";
        for(var i = 0; i < intento; i ++){
            if(intento.includes(this.codigoSecreto.at(i),i)){
                cadena += "!";
            }
        }
        return cadena;
    }
    siEsTernera(intento){
        let cadena = "";
        for(var i = 0;i < intento.length; i++){
            if(this.codigoSecreto.includes(Number(intento[i]) + 1) || this.codigoSecreto.includes(Number(intento[i]) - 1)){
                cadena += "#";
            }
        }
        return cadena;
    }
}

export default TorosYVacas;