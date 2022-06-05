// import { TContentType } from './../../types/index.d';
// const getCollectionItem = async  (contentType: TContentType, id: string) => {


//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/collection`, {
//       method: "post",
//       body: JSON.stringify({ params: { contentType } }),
//       headers: { "Content-Type": "application/json" },
//     });
//     const { data } = await axios({
//       method: 'GET',
//       url: `${this.base}/${contentType}/${id}`
//     });

//     return data;
//   } catch (error) {
//     throw new Error(`getCollectionItem: ${error}`);
//   }
// }

// export default getCollectionItem;
