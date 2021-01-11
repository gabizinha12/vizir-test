class Utils {
  static CalculateMinutePrice(origin, destination) {
    const checkPricePerMinute = {
      "011018": "0.9",
      "011017": "1.7",
      "011016": "1.9",
      "018011": "1.9",
      "017011": "2.7",
      "016011": "2.9",
    };
    const key = origin.concat(destination);
    const pricePerMinute = Number(checkPricePerMinute[key]);
    return pricePerMinute ? pricePerMinute : NaN;
  }
  static CalculateTotalPrice(pricePerMinute, totalDuration, plan) {
    if (Number.isNaN(pricePerMinute)) {
      return ["-", "-"];
    }
    totalDuration = Number(totalDuration);
    const avaliablePlans = {
      falemais30: 30,
      falemais60: 60,
      falemais120: 120,
    };
    let maxFreeDuration = avaliablePlans[plan];
    let minutesOverFreeDuration = totalDuration - maxFreeDuration;

    const prices = [];
    if (minutesOverFreeDuration > 0) {
      const priceFaleMais =
        minutesOverFreeDuration * (pricePerMinute + pricePerMinute * 0.1);
      prices.push(priceFaleMais.toFixed(2));
    } else {
      prices.push(Number(0).toFixed(2));
    }
    const priceNoPlan = totalDuration * pricePerMinute;
    prices.push(priceNoPlan.toFixed(2));
    return prices;
  }
}
export default Utils;
