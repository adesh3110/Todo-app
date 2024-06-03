import axios from "axios";

async function getId(id) {
  const url = `https://api.nstack.in/v1/todos/${id}`;
  const response = axios({
    url: url,
    method: "GET",
    headers: {},
  });

  return response;
}

export default getId;
