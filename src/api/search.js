export async function searchUsers(params) {
  const queryParts = params.map((param) => {
    if (isNaN(param)) {
      return `username=${param}`;
    } else {
      return `id=${param}`;
    }
  });

  const queryString = queryParts.join("&");
  const url = `https://jsonplaceholder.typicode.com/users?${queryString}`;
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error("Ошибка при запросе данных пользователя");
  }

  return response.json();
}
