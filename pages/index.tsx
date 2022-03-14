import type { GetStaticProps } from "next";
import { useState } from "react";
import { ConverterContext, CurrencyChartType } from "context/CurrencyContext";
import { RateOptionType } from "types/rates";
import { fetchRates, fetchTodaysRates } from "utils/apicalls";
import styled from "styled-components";
import { PageLayout, SectionLayout } from "styled-components/StyledLayouts";
import Meta from "utils/Meta";
import KronLogo from "assets/KronLogo";
import Converter from "containers/converter/Converter";
import LineChart from "containers/charts/LineChart";

export const getStaticProps: GetStaticProps = async () => {
  const rates = await fetchTodaysRates();
  const allRates = await fetchRates();

  return { props: { rates: rates, last60DaysRates: allRates } };
};

interface IData {
  rates: RateOptionType[];
  last60DaysRates: any;
}

const TitleWrapper = styled.div`
  width: 100%;
`;

const ConverterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const Home = ({ rates, last60DaysRates }: IData) => {
  const [todaysRates, setTodaysRates] = useState<RateOptionType[]>(rates);
  const [allRates, setAllRates] = useState(last60DaysRates);
  const [currencyChartData, setCurrencyChartData] = useState<CurrencyChartType>(
    null as any as CurrencyChartType
  );
  return (
    <>
      <Meta
        title="Kron Currency Converter"
        metaTitle="An awesome Currency Converter for Kron - Investment for All"
        description="Calculate the amount for whatever currency you wish in just a few clicks!"
        image=""
      />
      <PageLayout>
        <SectionLayout>
          <TitleWrapper>
            <KronLogo />
            <h1>Currency Converter</h1>
          </TitleWrapper>
          <ConverterContext.Provider
            value={{
              todaysRates,
              setTodaysRates,
              allRates,
              setAllRates,
              currencyChartData,
              setCurrencyChartData,
            }}
          >
            <ConverterWrapper>
              <Converter />
              <article aria-live="polite">
                <LineChart />
              </article>
            </ConverterWrapper>
          </ConverterContext.Provider>
        </SectionLayout>
      </PageLayout>
    </>
  );
};

export default Home;
