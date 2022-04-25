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
        if(this.codigoSecreto.includes(intento.at(0)) && this.codigoSecreto.includes(intento.at(1))){
            return "!!";
        }else{
            if(this.codigoSecreto.includes(intento.at(0))){
                return "!";
            }
        }
    }
}

export default TorosYVacas;