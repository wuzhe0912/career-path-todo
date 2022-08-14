const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: `${process.env.TMDB_API_KEY}`,
  originalImage: (imgPath) => {
    return `https://image.tmdb.org/t/p/original/${imgPath}`;
  },
  w500Image: (imgPath) => {
    return `https://image.tmdb.org/t/p/w500/${imgPath}`;
  },
};

export default apiConfig;
