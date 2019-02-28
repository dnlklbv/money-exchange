// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let value = currency;
  const exchange = {};

  if (value > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };

  while (value > 0) {
    if (value >= 50) {
      value -= 50;
      if (exchange.H === undefined) exchange.H = 0;
      exchange.H += 1;
    } else if (value >= 25) {
      value -= 25;
      if (exchange.Q === undefined) exchange.Q = 0;
      exchange.Q += 1;
    } else if (value >= 10) {
      value -= 10;
      if (exchange.D === undefined) exchange.D = 0;
      exchange.D += 1;
    } else if (value >= 5) {
      value -= 5;
      if (exchange.N === undefined) exchange.N = 0;
      exchange.N += 1;
    } else if (value >= 1) {
      value -= 1;
      if (exchange.P === undefined) exchange.P = 0;
      exchange.P += 1;
    }
  }

  return exchange;
};
