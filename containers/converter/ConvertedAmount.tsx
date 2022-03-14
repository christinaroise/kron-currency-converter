import {
  CurrencyChartType,
  useGlobalConverterContext,
} from "context/CurrencyContext";
import { SecondaryButton } from "styled-components/Buttons";
import { IDS, scrollToElementById } from "utils/scrollevents";
import { getCurrencyChartData } from "./utils/getCurrencyChartData";
import {
  ConvertedAmountContainer,
  ConvertedAmountTitle,
} from "./utils/UIcomponents";

interface ConvertedAmountProps {
  amountToConvert: number;
  fromCurrencyType: string;
  convertedAmount: number;
  toCurrencyType: string;
}
const ConvertedAmount = ({
  amountToConvert,
  fromCurrencyType,
  convertedAmount,
  toCurrencyType,
}: ConvertedAmountProps) => {
  const { allRates, setCurrencyChartData, currencyChartData } =
    useGlobalConverterContext();

  const toggleShowChart = () => {
    if (!currencyChartData) {
      const data = getCurrencyChartData(
        allRates,
        fromCurrencyType,
        toCurrencyType
      );
      setCurrencyChartData(data);
      scrollToElementById(IDS.CHART);
    } else {
      setCurrencyChartData(null as any as CurrencyChartType);
    }
  };

  const getToggleButtonLabel = () => {
    if (currencyChartData) {
      return "Hide chart";
    } else {
      return "View chart";
    }
  };

  return (
    <ConvertedAmountContainer>
      <ConvertedAmountTitle>
        <small>
          {amountToConvert} {fromCurrencyType} =
        </small>
        <p>
          {convertedAmount} {toCurrencyType}
        </p>
      </ConvertedAmountTitle>
      <SecondaryButton onClick={toggleShowChart}>
        {getToggleButtonLabel()}
      </SecondaryButton>
    </ConvertedAmountContainer>
  );
};

export default ConvertedAmount;
