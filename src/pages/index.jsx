import React, { useId, useState, useEffect } from "react";
import dayjs from "dayjs";
import { message } from "antd";

import { Select, DatePicker } from "@/components";
import { MapIcon, SwitchIcon } from "@/icons";
import { useAuth } from "@/hooks";

const Home = () => {
  const session = useAuth();
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const [busLocations, setBusLocations] = useState(null);
  const [isBusLocationsBusy, setIsBusLocationsBusy] = useState(false);

  const canSubmit = origin !== destination && origin && destination && date;

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
    const destination = localStorage.getItem("destination");

    if (origin) {
      setOrigin(JSON.parse(origin));
    }

    if (destination) {
      setDestination(JSON.parse(destination));
    }
  }, []);

  useEffect(() => {
    if (!session) return;

    const getBusLocations = async () => {
      setIsBusLocationsBusy(true);

      const request = await fetch("/api/getBusLocations", {
        method: "POST",
        body: JSON.stringify({ session }),
      });
      const result = await request.json();

      setIsBusLocationsBusy(false);
      setBusLocations(
        result.map((loc) => ({
          value: loc.id,
          label: loc.name,
        }))
      );
    };

    getBusLocations();
  }, [session]);

  const onOriginChange = (_, option) => {
    setOrigin(option);
    localStorage.setItem("origin", JSON.stringify(option));
  };

  const onDestinationChange = (_, option) => {
    setDestination(option);
    localStorage.setItem("destination", JSON.stringify(option));
  };

  const onSwitch = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  return (
    <main className="home__content">
      <div className="home__content__input-wrapper">
        <div className="selectwrapper">
          <Select
            id={useId()}
            value={origin}
            label="Nereden"
            placeholder="İstanbul Avrupa"
            options={busLocations}
            onChange={onOriginChange}
            loading={isBusLocationsBusy}
          />
          <button onClick={onSwitch} className="switchbutton">
            <SwitchIcon />
          </button>
          <Select
            id={useId()}
            value={destination}
            label="Nereye"
            placeholder="Ankara"
            options={busLocations}
            onChange={onDestinationChange}
            loading={isBusLocationsBusy}
          />
        </div>

        <DatePicker
          label="Tarih"
          value={date}
          onChange={(date) => setDate(date)}
        />

        <button className="searchButton" disabled={!canSubmit}>
          Bileti Bul
        </button>
      </div>
    </main>
  );
};

export default Home;
