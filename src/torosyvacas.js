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
            if(this.codigoSecreto.includes(intento.at(i))){
                resp += "*";
            }
        }
        return resp;
    }
    siEsToro(intento){
        if(this.codigoSecreto.includes(intento.at(0))){
            return "!";
        }
    }
}

export default TorosYVacas;