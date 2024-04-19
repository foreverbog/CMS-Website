//FROM CONTENTFULL
// import { createClient } from "contentful";

// const client = createClient({
//   space: import.meta.env.VITE_SPACE_ID,
//   accessToken: import.meta.env.VITE_SPACE_ACCES_TOKEN,
// });
// const fetchData = () => {
//   return client.getEntries({
//     content_type: "movie",
//   });
// };

//FROM SERVER
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get("http://localhost:5000/");
  // console.log(response.data);
  return response.data;
};

export default fetchData;
