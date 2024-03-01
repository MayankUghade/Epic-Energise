export const exerciseOptions = {
  method: "GET",
  params: { limit: "300" },
  headers: {
    "X-RapidAPI-Key": "5bde83f898msh7f677bda4d21c59p1fbff3jsn8f0d514ab505",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const weight_category = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ad4804a73msh3c189b96a2f130bp1ea52ajsn50e83a703810",
    "X-RapidAPI-Host": "body-mass-index-bmi-calculator.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
