import axios from "axios";

export default async function createTodo(data) {
  const url = "https://api.nstack.in/v1/todos";
  const response = await axios({
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  return response;
}
