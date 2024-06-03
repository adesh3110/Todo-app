import axios from "axios";

async function updateTodo(id, data) {
  const url = `https://api.nstack.in/v1/todos/${id}`;
  const response = await axios({
    url: url,
    method: "PUT",
    headers: {},
    data: data,
  });
}

export default updateTodo;
