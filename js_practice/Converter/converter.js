const RATES = {
  usd: 0.027,
  eur: 0.026,
  eth: 0.000022,
  qmall: 0.0688,
};

function convert({ grn, currency }) {
  if (!RATES[currency]) {
    return null;
  }
  return grn * RATES[currency];
}
