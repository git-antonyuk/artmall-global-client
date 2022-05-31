// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetchCollection from 'api/fetchCollection';
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  try {
    const result = await fetchCollection('products');
    res.status(200).send({ result })
  } catch (err: any) {
    console.log('%c 🍉 err: ', 'font-size:12px;background-color: #6EC1C2;color:#fff;', err);
    res.status(err.status || 500).send({ error: 'failed to fetch data' })
  }
}
