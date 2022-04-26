
import TorosYVacas from "./torosyvacas";

describe("Toros y Vacas -> ganar", () => {
    it("Deberia responder 'Ganaste!' si se adivina el codigo ", () => {
      const torosyvaca = new TorosYVacas("3");
      expect(torosyvaca.adivinar("3")).toEqual("Ganaste!");
    });
    it("Deberia responder '' si no  se adivina el codigo secreto", () => {
    const torosyvaca = new TorosYVacas("7");
    expect(torosyvaca.adivinar("2")).toEqual("");
  });
});  

describe("-----VACA----",() =>{
    it("Si ingresamos como codigo 12 y nuestro intento es 2 deberia retornar '*' para determinar si es vaca", () => {
        const torosyvaca = new TorosYVacas("12");
        expect(torosyvaca.siEsVaca("24")).toEqual("*");
      });
      it("Si ingresamos como codigo 12 y nuestro intento es 21 deberia retornar '**'", () => {
        const torosyvaca = new TorosYVacas("12");
        expect(torosyvaca.siEsVaca("21")).toEqual("**");
      });
      it("Si ingresamos como codigo 124 y nuestro intento es 421 deberia retornar '*'", () => {
        const torosyvacas = new TorosYVacas("124");
        expect(torosyvacas.siEsVaca("111")).toEqual("*");
      });
});

describe("-----TORO----",() =>{
  it("Si ingresamos un digito que coincide con la poiscion y el digito este deberia devolver TORO '!' ", () => {
    const torosyvaca = new TorosYVacas("12");
    expect(torosyvaca.siEsToro("15")).toEqual("!");
  });
  it("Comparamos dos digitos si coincide por cada coincidencia con digito y posiciion es '!' ", () => {
    const torosyvaca = new TorosYVacas("124");
    expect(torosyvaca.siEsToro("125")).toEqual("!!");
  });
  it("Comparamos mas de dos digitos por cada coincidencia con digito y posiciion es '!' ", () => {
    const torosyvaca = new TorosYVacas("1234");
    expect(torosyvaca.siEsToro("1235")).toEqual("!!!");
  });
});

describe("-----TERNERA----",() =>{
  it("Comprobamos si es ternera cuando el primer digito esta entre -1", () => {
    const torosyvaca = new TorosYVacas("1");
    expect(torosyvaca.siEsTernera("0")).toEqual("#");
  });
  it("Comprobamos si es ternera cuando el primer digito esta entre +1 o -1", () => {
    const torosyvaca = new TorosYVacas("1");
    expect(torosyvaca.siEsTernera("2")).toEqual("#");
  });
  it("Comprobamos si es ternera, cuando dos digitos estan entre +1 o -1", () => {
    const torosyvaca = new TorosYVacas("15");
    expect(torosyvaca.siEsTernera("27")).toEqual("#");
  });
  it("Comprobamos si es ternera, cuando mas de dos digitos estan entre +1 o -1", () => {
    const torosyvaca = new TorosYVacas("15");
    expect(torosyvaca.siEsTernera("24")).toEqual("##");
  });
});




