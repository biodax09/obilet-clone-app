import dayjs from "dayjs";

const dateFormat = "YYYY-MM-DD";
const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const getJourneys = async ({
  session,
  originId,
  destinationId,
  departureDate,
}) => {
  const response = await fetch(`${baseUrl}/journey/getbusjourneys`, {
    method: "POST",
    body: JSON.stringify({
      "device-session": {
        "session-id": session.id,
        "device-id": session.deviceId,
      },
      date: dayjs().format(dateFormat),
      language: "tr-TR",
      data: {
        "origin-id": +originId,
        "destination-id": +destinationId,
        "departure-date": dayjs(departureDate).format(dateFormat),
      },
    }),
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  return result.data;
};

export default getJourneys;
