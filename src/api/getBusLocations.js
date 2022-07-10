import dayjs from "dayjs";

const dateFormat = "YYYY-MM-DD";
const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const getBusLocations = async ({ session }) => {
  const response = await fetch(`${baseUrl}/location/getbuslocations`, {
    method: "POST",
    body: JSON.stringify({
      data: null,
      "device-session": {
        "session-id": session.id,
        "device-id": session.deviceId,
      },
      date: dayjs().toISOString(),
      language: "tr-TR",
    }),
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  return result.data;
};

export default getBusLocations;
