const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const getSession = async () => {
  const response = await fetch(`${baseUrl}/client/getsession`, {
    method: "POST",
    body: JSON.stringify({
      type: 1,
      connection: {
        "ip-address": "127.0.0.1",
        port: "80",
      },
      browser: {
        name: "Chrome",
        version: "47.0.0.12",
      },
    }),
    headers: {
      Authorization: `Basic ${token}`,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return {
    id: result.data["session-id"],
    deviceId: result.data["device-id"],
  };
};

export default getSession;
