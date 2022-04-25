class TorosYVacas {
    constructor (codigoSecreto){
    this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento){
        let resp = "";
        if(intento === this.codigoSecreto){
            return "Ganaste!";
        }
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
}

export default TorosYVacas;