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
            if(this.codigoSecreto.includes(intento[i])){
                resp += "*";
            }
        }
        return resp;
    }
}

export default TorosYVacas;