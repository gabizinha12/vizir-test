import Utils from "./Utils";
import "@testing-library/jest-dom/extend-expect";

describe("Utils", () => {
  describe("calculateMinutePrice", () => {
    it("should be able to calculate price per minute for a origin-destination code pair.", () => {
      let pricePerMinute = Utils.CalculateMinutePrice("011", "016");
      expect(pricePerMinute).toBe(1.9);

      pricePerMinute = Utils.calculateMinutePrice("011", "017");
      expect(pricePerMinute).toBe(1.7);

      pricePerMinute = Utils.calculateMinutePrice("018", "011");
      expect(pricePerMinute).toBe(1.9);
    });

    it("should return NaN for an invalid origin-destination code pair.", () => {
      const pricePerMinute = Utils.calculateMinutePrice("018", "017");
      expect(pricePerMinute).toBe(NaN);
    });
  });

  describe("calculateTotalPrice", () => {
    it("should calculate the total price based on the duration, plan and price per minute.", () => {
      let totalPrice = Utils.calculateTotalPrice(1.9, "20", "falemais30");
      expect(totalPrice).toEqual(["0.00", "38.00"]);
    });

    it("should return an array were the first element is the total price for users with a FaleMais plan.", () => {
      let totalPrice = Utils.calculateTotalPrice(1.9, "20", "falemais30");
      expect(totalPrice[0]).toEqual("0.00");
    });

    it("should return an array were the second element is the total price for users without a FaleMais plan.", () => {
      let totalPrice = Utils.calculateTotalPrice(1.9, "20", "falemais30");
      expect(totalPrice[1]).toEqual("38.00");
    });

    it("should apply a 10% surcharge to the price of the minutes that exceed the plan's free minutes.", () => {
      let totalPrice = Utils.calculateTotalPrice(1.7, "80", "falemais60");
      expect(totalPrice).toEqual(["37.40", "136.00"]);

      totalPrice = Utils.calculateTotalPrice(1.9, "200", "falemais120");
      expect(totalPrice).toEqual(["167.20", "380.00"]);
    });

    it("should not calculate the price when the price per minutes is NaN, it should return ['-', '-'].", () => {
      let precoTotal = Utils.calculateTotalPrice(NaN, "100", "falemais30");
      expect(precoTotal).toEqual(["-", "-"]);
    });
  });
});
