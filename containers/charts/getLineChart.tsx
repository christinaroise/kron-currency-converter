import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CurrencyChartType } from "context/CurrencyContext";
import { Colors } from "styled-components/GlobalStyles";
import { IDS } from "utils/scrollevents";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function getLineChart(data: CurrencyChartType) {
  const { dates, historyRates, fromCurrencyLabel, toCurrencyLabel } = data;

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: `${fromCurrencyLabel} to ${toCurrencyLabel} Chart`,
      },
    },
  };

  const chartdata = {
    labels: dates,
    datasets: [
      {
        label: `${fromCurrencyLabel} to ${toCurrencyLabel}`,
        data: historyRates,
        borderColor: Colors.PURPLE,
        backgroundColor: Colors.PURPLE,
        borderWidth: 3,
        font: `StabilGrotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
      },
    ],
  };
  return <Line data={chartdata} options={options} id={IDS.CHART} />;
}
