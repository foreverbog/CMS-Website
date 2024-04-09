import { createClient } from "contentful";

const client = createClient({
  space: "kg6iceixm3kq",
  accessToken: "-Ru73SwkZnbE6eYaW0V2YWaxpv8grrMfAjkewVFsFfo",
});
const fetchData = () => {
  return client.getEntries({
    content_type: "movie",
  });
};

export default fetchData;
