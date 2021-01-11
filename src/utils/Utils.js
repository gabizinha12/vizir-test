class Utils {
  static CalculateTaxes(destino, origem, tempo, plano) {
    switch (destino) {
      case "011":
        if (origem === "016") {
          let precoBase = 2.9;
          let tempo = 0;
        }
        if (origem === "017") {
        }

        if (origem === "018") {
        }
        break;
      case "016":
        break;
      case "017":
        break;
      case "018":
        break;
      default:
        return 0;
    }
  }
  CalculateTotalPrice(baseMinPrice, tempo, plano) {
    let maxDuration = plano.split("falemais");
    console.log(maxDuration);
    maxDuration = Number(maxDuration);
    console.log(maxDuration);

    let minutesPassed = tempo - maxDuration;
    if (minutesPassed > 0) {
      let overchargePrice = minutesPassed * baseMinPrice * 0.1;
      return overchargePrice;
    } else {
      let totalPrice = tempo * baseMinPrice;
      return totalPrice;
    }
  }
}
export default Utils;
