import { getSession } from "@/api";

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  const result = await getSession();
  res.status(200).json(result);
}
