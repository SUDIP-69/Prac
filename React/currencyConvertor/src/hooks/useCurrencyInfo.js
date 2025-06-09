import { useEffect, useState } from "react";

export const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((response) => response.json())
      .then((response) => setData(response["rates"]))
      .catch((error) => console.error("Error fetching currency data:", error));   
  }, [currency]);
  console.log(data);
  return data;  
}
