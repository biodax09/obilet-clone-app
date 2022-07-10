import React, { useId, useState, useEffect } from "react";
import dayjs from "dayjs";
import { message } from "antd";

import { getSession } from "../../api";
import { Input, DatePicker } from "../../components";

import "./style.css";

const Home = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);

  const canSubmit = origin !== destination;

  useEffect(() => {
    if (!origin || !destination) return;

    if (origin === destination) {
      message.error({
        content: "Kalkış yeriyle varış yeri aynı olamaz!",
        duration: 3,
      });
    }
  }, [origin, destination]);

  useEffect(() => {
    const origin = localStorage.getItem("origin");

    if (origin) {
      setOrigin(origin);
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const session = await getSession();

      console.log(session);
    };

    fetch();
  }, []);

  const onOriginChange = (value) => {
    setOrigin(value);
    localStorage.setItem("origin", value);
  };

  return (
    <main className="home__content">
      <div className="home__content__input-wrapper">
        <Input
          id={useId()}
          label="Nereden"
          placeholder="İstanbul Avrupa"
          onChange={onOriginChange}
        />
        <Input
          id={useId()}
          label="Nereye"
          placeholder="Ankara"
          onChange={(val) => setDestination(val)}
        />

        <DatePicker label="Tarih" onChange={(date) => setDate(date)} />

        <button className="searchButton" disabled={!canSubmit}>
          Bileti Bul
        </button>
      </div>
    </main>
  );
};

export default Home;
