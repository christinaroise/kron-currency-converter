import { RateDataType, RateOptionType } from "types/rates";

export const CURRENCY_RATES_API = "https://jsonkeeper.com/b/561I";

export async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  if (!response.ok) {
    throw new Error(
      String({ name: response.status, message: response.statusText })
    );
  }
  return response.json().catch(() => ({}));
}

export const fetchRates = async () => {
  try {
    const rates = await http<any[]>(CURRENCY_RATES_API);
    const last60Days = rates.slice(0, 60);

    return last60Days;
  } catch (error) {
    console.log("error", error);
  }
}; 

export const fetchTodaysRates = async () => {
  try {
    const allRates = await (await http<any[]>(CURRENCY_RATES_API));
    const todaysRates = allRates[0];

    let newArray: RateOptionType[] = [];
  
    Object.keys(todaysRates).map(key => {
      newArray.push({
        label: key,
        value: todaysRates[key],
      });
      return newArray
    });

    newArray.push({
      label: "Euro",
      value: 1
    })

    const filteredRates = newArray.filter(({ value }: RateDataType) => typeof value === 'number');
   
    return filteredRates;
  } catch (error) {
    console.log("error", error);
  }
}; 