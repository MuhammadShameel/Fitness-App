import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2d7e86b351msh4ac7f58f2ee13f0p148c9djsndf806a46fbc5",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url: string, options: any) => {
  try {
    const response = await axios.request({ url, ...options });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
