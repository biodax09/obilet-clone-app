import { getBusLocations } from "@/api";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).end();
    return;
  }

  const result = await getBusLocations(JSON.parse(req.body));
  res.status(200).json(result);
}
