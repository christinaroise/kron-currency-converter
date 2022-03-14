
export const getCurrencyChartData = (
    allRates: any[],
    fromCurrencyLabel: string,
    toCurrencyLabel: string,
) => {
    const dates = allRates.map((obj: any) => {
      return obj.Date;
    });

    const historyRates = allRates.map((obj: any) => {
      let fromCurrency = 0;
      let toCurrency = 0;
      Object.keys(obj).forEach((key) => {
        if (key === fromCurrencyLabel) {
          fromCurrency = obj[key];
        }
        if (key === toCurrencyLabel) {
          toCurrency = obj[key];
        }
      });

      const convertedRates = (1 / fromCurrency) * toCurrency;

      return convertedRates;
    });

    const chartData = {
      dates: dates.reverse(),
      historyRates: historyRates.reverse(),
      fromCurrencyLabel: fromCurrencyLabel,
      toCurrencyLabel: toCurrencyLabel,
    };

    return chartData;
  };