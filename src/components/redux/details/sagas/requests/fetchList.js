const fetchList = (categoryName) => {
  const url = `https://swapi.dev/api/${categoryName}`;
  console.log("action", categoryName);
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((error) => {
      throw error;
    });
};

export default fetchList;
