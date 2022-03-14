import { ChangeEvent, useRef, useState } from "react";
import {
  CurrencyChartType,
  useGlobalConverterContext,
} from "context/CurrencyContext";
import Input from "components/inputs/Input";
import Dropdown from "components/inputs/Dropdown";
import { IconButton, PrimaryButton } from "styled-components/Buttons";
import { ConvertedValuesProp, ValuesProp } from "./utils/IConverter";
import { FlipIcon, Form, InputContainer, Wrapper } from "./utils/UIcomponents";
import ConvertedAmount from "./ConvertedAmount";
import useMediaQuery from "hooks/useMediaQuery";
import { ScreenSize } from "utils/sizes";
import { scrollRefIntoView } from "utils/scrollevents";

const Converter = () => {
  const { todaysRates, setCurrencyChartData, currencyChartData, allRates } =
    useGlobalConverterContext();
  const convertedAmountRef = useRef<HTMLDivElement>(null);
  const isTablet = useMediaQuery(ScreenSize.TABLET);
  const [values, setValues] = useState<ValuesProp>({
    amount: 1,
    fromCurrency: {
      label: todaysRates[0].label,
      value: todaysRates[0].value,
    },
    toCurrency: {
      label: todaysRates[1].label,
      value: todaysRates[1].value,
    },
    isButtonDisabled: false,
  });

  const [valuesAfterConvertion, setValuesAfterConvertion] =
    useState<ConvertedValuesProp>({
      amountToConvert: values.amount,
      fromCurrencyType: todaysRates[0].label,
      toCurrencyType: todaysRates[1].label,
      convertedAmount: 0,
    });

  const {
    amount,
    fromCurrency: { value: fromCurrencyValue, label: fromCurrencyLabel },
    toCurrency: { value: toCurrencyValue, label: toCurrencyLabel },
    isButtonDisabled,
  } = values;

  const { amountToConvert, toCurrencyType, fromCurrencyType, convertedAmount } =
    valuesAfterConvertion;

  const onInputChange =
    (id?: string) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      event.preventDefault();
      if (id) {
        const element = document.getElementById(id) as HTMLSelectElement;
        setValues({
          ...values,
          [event.target.id]: {
            label: element.options[element.selectedIndex].innerText,
            value: event.target.value,
          },
          isButtonDisabled: amount ? false : true,
        });
      } else {
        setValues({
          ...values,
          [event.target.id]: event.target.value,
          isButtonDisabled:
            event.target.value <= 0 || event.target.value === "",
        });
      }
    };

  const calculateConvertion = () => {
    const euro = amount;
    const convertedCurrency = (euro / fromCurrencyValue) * toCurrencyValue;
    setValuesAfterConvertion({
      amountToConvert: amount,
      toCurrencyType: toCurrencyLabel,
      fromCurrencyType: fromCurrencyLabel,
      convertedAmount: Number(convertedCurrency.toFixed(2)),
    });
    setValues({
      ...values,
      isButtonDisabled: true,
    });
    setCurrencyChartData(null as any as CurrencyChartType);
  };

  return (
    <Wrapper isConvertedAmountVisible={convertedAmount > 0}>
      <Form name="Currency converter">
        <InputContainer>
          <Input
            id="amount"
            label="Amount"
            type="number"
            value={amount}
            onChange={onInputChange()}
            errorMessage={
              amount <= 0 || amount === "" ? "Field cannot be empty" : ""
            }
          />
          <Dropdown
            id="fromCurrency"
            label="From"
            options={todaysRates}
            onChange={onInputChange("fromCurrency")}
            value={fromCurrencyValue}
          />
          <IconButton
            aria-label="Flip currenies"
            onClick={(event) => {
              event.preventDefault();
              setValues({
                ...values,
                fromCurrency: {
                  label: toCurrencyLabel,
                  value: toCurrencyValue,
                },
                toCurrency: {
                  label: fromCurrencyLabel,
                  value: fromCurrencyValue,
                },
              });
            }}
          >
            <FlipIcon />
          </IconButton>
          <Dropdown
            id="toCurrency"
            label="To"
            options={todaysRates}
            onChange={onInputChange("toCurrency")}
            value={toCurrencyValue}
          />
        </InputContainer>
        <PrimaryButton
          disabled={isButtonDisabled}
          onClick={(event) => {
            event?.preventDefault();
            calculateConvertion();
            isTablet && scrollRefIntoView(convertedAmountRef);
          }}
        >
          Convert
        </PrimaryButton>
      </Form>
      {convertedAmount > 0 && <hr />}
      <div aria-live="polite" ref={convertedAmountRef}>
        {convertedAmount > 0 && (
          <ConvertedAmount
            amountToConvert={amountToConvert}
            toCurrencyType={toCurrencyType}
            fromCurrencyType={fromCurrencyType}
            convertedAmount={convertedAmount}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Converter;
