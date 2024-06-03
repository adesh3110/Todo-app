import axios from "axios";

async function getPaginatedTodo(page) {
  const params = {
    limit: 10,
    page: page,
  };
  const url = "https://api.nstack.in/v1/todos";
  const response = await axios({
    url: url,
    params: params,
    method: "GET",
    headers: {},
  });
  return response;
}

export default getPaginatedTodo;
