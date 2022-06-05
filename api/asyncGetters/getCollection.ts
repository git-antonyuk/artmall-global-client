import { TContentType } from '../../types'

const getCollection = async (contentType: string | TContentType): Promise<any> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/collection`, {
    method: "post",
    body: JSON.stringify({ params: { contentType } }),
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
}

export default getCollection;
