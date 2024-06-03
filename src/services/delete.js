import axios from "axios";

async function deleteTodo(id) {
  const url = `https://api.nstack.in/v1/todos/${id}`;
  console.log("In Api call");
  console.log(id);

  const response = axios({
    url: url,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export default deleteTodo;
