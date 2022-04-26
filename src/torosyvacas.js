class TorosYVacas {
    constructor (codigoSecreto){
    this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento){
        let total = "";
        if(intento === this.codigoSecreto){
            return "Ganaste!";
        }
        else{
            total = this.siEsToro(intento).concat(this.siEsVaca(intento));
            total = total.concat(this.siEsTernera(intento));
        }
        return total;
    }
    verificarSiEsVaca(intento, i){
        var vaca;
        vaca =  intento.includes(this.codigoSecreto.at(i))// && (intento.includes(this.codigoSecreto.at(i),i) ==false);
        return vaca;
    }    
    siEsVaca(intento){
        let resp = "";
        for(var i=0; i < this.codigoSecreto; i++){
            if(this.verificarSiEsVaca(intento, i)){
                resp += "*";
            }
        }
        return resp;
    }
    verificarSiEsToro(intento, i){
        var toro ;
        toro =  intento.includes(this.codigoSecreto.at(i),i);
        return toro;
    }
    siEsToro(intento){
        let cadena = "";
        for(var i = 0; i < intento; i ++){
            if(this.verificarSiEsToro(intento, i)){
                cadena += "!";
            }
        }
        return cadena;
    }
    verificarSiEsTernera(intento,i){
        var ternera;
        ternera =  this.codigoSecreto.includes(Number(intento.at(i)) + 1) || this.codigoSecreto.includes(Number(intento.at(i)) - 1);
        return ternera;
    }
    siEsTernera(intento){
        let cadena = "";
        for(var i = 0;i < intento.length; i++){
            if(this.verificarSiEsTernera(intento,i)){
                cadena += "#";
            }
        }
        return cadena;
    }
}

export default TorosYVacas;