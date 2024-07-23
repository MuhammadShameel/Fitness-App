import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e6e7aa69b6msh09132a1c2a2df7cp11b8b5jsne4862f5b97ec",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e6e7aa69b6msh09132a1c2a2df7cp11b8b5jsne4862f5b97ec",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
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
