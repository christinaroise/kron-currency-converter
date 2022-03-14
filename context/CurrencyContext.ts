import { createContext, useContext } from "react"
import { RateOptionType } from "types/rates"

export type CurrencyChartType = {
    dates: string[],
    historyRates: number[]
    fromCurrencyLabel: string,
    toCurrencyLabel: string,
}

export const ConverterContext = createContext<GlobalConverterData>({
    todaysRates: [],
    setTodaysRates: () => {},
    allRates: [],
    setAllRates: () => {},
    currencyChartData: null as any as CurrencyChartType, 
    setCurrencyChartData: () => {}
})

export type GlobalConverterData = {
    todaysRates: RateOptionType[],
    setTodaysRates: (data: RateOptionType[]) => void;
    allRates: any [],
    setAllRates: (data: any) => void;
    currencyChartData: CurrencyChartType,
    setCurrencyChartData: (data: any) => void;
}

export const useGlobalConverterContext = () => useContext(ConverterContext)