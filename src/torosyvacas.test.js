
describe("Toros y Vacas -> ganar", () => {
    it("Deberia responder 'Ganaste!' si se adivina el codigo ", () => {
      const torosyvacas = new TorosYVacas("3");
      expect(torosyvacas.adivinar("3")).toEqual("Ganaste!");
    });
});  

class TorosYVacas {
    constructor (codigoSecreto){
    this.codigoSecreto = codigoSecreto;
    }
    adivinar(intento){
        return "Ganaste!";
    }
}