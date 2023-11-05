import axios from "axios";

export async function getData() {
  const res = await axios({
    url: `http://localhost:3001/api/getData`,
    method: "GET",
  });
  return res.data;
}
