import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_SPACE_ACCES_TOKEN,
});
const fetchData = () => {
  return client.getEntries({
    content_type: "movie",
  });
};

export default fetchData;
