import { useEffect, useState } from "react";

export default function Converter() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch("https://hexarate.paikama.co/api/rates/latest/USD?target=GBP")
      .then((res) => res.json())
      .then((json) => setRate(json.data.mid))
      .catch((err) => console.error(err));
  }, []);

  return <div>{rate ? <p>1 USD = {rate} GBP</p> : <p>Загрузка...</p>}</div>;
}
