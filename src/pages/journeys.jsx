import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/router";

import { useAuth } from "@/hooks";
import { ArrowRight } from "@/icons";
import { JourneySkeleton } from "@/components";

const Journeys = () => {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const session = useAuth();

  const { originId, destinationId, departureDate } = router.query;

  useEffect(() => {
    if (!session || (!originId && !destinationId)) return;

    const fetchJourneys = async () => {
      setLoading(true);

      const request = await fetch("/api/getJourneys", {
        method: "POST",
        body: JSON.stringify({
          session,
          originId,
          destinationId,
          departureDate,
        }),
      });

      const result = await request.json();
      const resultByDepartureDate = result.sort((a, b) =>
        dayjs(a.journey.departure).diff(b.journey.departure)
      );

      setJourneys(resultByDepartureDate);
      setLoading(false);
    };

    fetchJourneys();
  }, [session, originId, destinationId, departureDate]);

  return (
    <>
      <div
        className="journey-list"
        style={{ backgroundColor: loading ? "white" : "#f3f3f3" }}
      >
        {loading &&
          [...new Array(12)].map((_, i) => (
            <div key={i} className="journey-skeleton">
              <JourneySkeleton />
            </div>
          ))}

        {!loading &&
          journeys.map((x) => (
            <div key={x.id} className="journey-card">
              <div className="journey-price">
                {x.journey["internet-price"].toFixed(2)} {x.journey.currency}
              </div>

              <div className="journey__content">
                <div className="info">
                  <div className="title_wrapper">
                    <div className="title">Kalkış</div>
                    <div className="subtitle">
                      {dayjs(x.journey.departure).format("HH:mm")}
                    </div>
                  </div>

                  <ArrowRight />

                  <div className="title_wrapper">
                    <div className="title">Varış</div>
                    <div className="subtitle">
                      {dayjs(x.journey.arrival).format("HH:mm")}
                    </div>
                  </div>
                </div>

                <div className="text">
                  {x.journey.origin} &mdash; {x.journey.destination}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Journeys;
