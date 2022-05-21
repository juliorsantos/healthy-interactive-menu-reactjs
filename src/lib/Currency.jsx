function currencyFormatter(value = 0, config = {}) {
  if (config.hasOwnProperty('currency') && config.currency.hasOwnProperty('exchangeRate')) {
    if (config.currency.exchangeRate > 0)
      value = value * config.currency.exchangeRate;
  }

  if (config.hasOwnProperty('sign') && config.hasOwnProperty('currency')) {
    return Intl.NumberFormat(config.sign, { style: 'currency', currency: config.currency.style }).format(value);
  } else {
    return value;
  }
}

export {
  currencyFormatter
}