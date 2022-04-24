
describe("Toros y Vacas -> ganar", () => {
    it("Deberia responder 'Ganaste!' si se adivina el codigo ", () => {
      const torosyvacas = new TorosYVacas("3");
      expect(torosyvacas.adivinar("3")).toEqual("Ganaste!");
    });
    it("Deberia responder '' si no  se adivina el codigo secreto", () => {
    const torosyvacas = new TorosYVacas("7");
    expect(torosyvacas.adivinar("2")).toEqual("");
  });
  it("Si ingresamos como codigo 12 y nuestro intento es 2 deberia retornar '*' para determinar si es vaca", () => {
    const torosyvacas = new TorosYVacas("12");
    expect(torosyvacas.adivinar("24")).toEqual("*");
  });
});  

class TorosYVacas {
    constructor (codigoSecreto){
    this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento){
        if(intento == this.codigoSecreto){
            return "Ganaste!";
        }
        else{
            if(this.codigoSecreto.includes(intento[0])){
                return "*";
            }
            return "";
        }
    }
}