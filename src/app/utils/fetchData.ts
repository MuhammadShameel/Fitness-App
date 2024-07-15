export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2d7e86b351msh4ac7f58f2ee13f0p148c9djsndf806a46fbc5",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: any, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
