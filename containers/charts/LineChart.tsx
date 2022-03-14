import { useGlobalConverterContext } from "context/CurrencyContext";
import { getLineChart } from "./getLineChart";
import styled from "styled-components";
import { Colors } from "styled-components/GlobalStyles";

const Wrapper = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background-color: ${Colors.WHITE};
`;

const LineChart = () => {
  const { currencyChartData } = useGlobalConverterContext();
  if (currencyChartData) {
    const { fromCurrencyLabel, toCurrencyLabel } = currencyChartData;
    return (
      <Wrapper>
        <h2>
          {fromCurrencyLabel} to
          {toCurrencyLabel} Chart
        </h2>
        {getLineChart(currencyChartData)}
      </Wrapper>
    );
  }

  return null;
};

export default LineChart;
