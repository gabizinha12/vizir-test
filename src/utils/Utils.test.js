import Utils from "./Utils";
import "@testing-library/jest-dom/extend-expect";
jest.mock("./Utils");

beforeEach(() => {
  Utils.mockClear();
});

// it("checar se o método calculateTaxes funciona", () => {
//   let valor = Utils.CalculateTaxes("011", "016", "20", "falemais20");
//   expect(valor).toBe(38);
// });
it("checar se o método calculateTotalPrice funciona", () => {
  const utils = new Utils();
  let valorTotal = utils.CalculateTotalPrice(1.9, 20, "falemais30");
  expect(valorTotal).toBe(38);
});
