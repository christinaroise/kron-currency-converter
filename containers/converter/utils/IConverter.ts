interface CurrencyProp {
  label: string;
  value: number;
}

export interface ValuesProp {
  amount: number;
  fromCurrency: CurrencyProp;
  toCurrency: CurrencyProp;
  isButtonDisabled: boolean;
};

export interface ConvertedValuesProp {
  amountToConvert: number;
  convertedAmount: number;
  toCurrencyType: string;
  fromCurrencyType: string;
};
