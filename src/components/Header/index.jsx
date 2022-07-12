import React from "react";
import dayjs from "dayjs";
import NextLink from "next/link";
import { useRouter } from "next/router";

import ArrowLeft from "@/icons/ArrowLeft";

const Header = ({ children }) => {
  const router = useRouter();

  const { origin, destination, departureDate } = router.query;

  return (
    <header className="header">
      {origin && destination && (
        <div className="journey-info">
          <NextLink href="/">
            <a>
              <ArrowLeft className="arrowicon" />
            </a>
          </NextLink>

          <h2 className="journey-heading">
            {origin} &mdash; {destination}
          </h2>
          <h3 className="journey-date">
            {dayjs(departureDate).locale("tr").format("DD MMMM dddd")}
          </h3>
        </div>
      )}
    </header>
  );
};

export default Header;
