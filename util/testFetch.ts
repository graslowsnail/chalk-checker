
const fetchNbaPlayers = async () => {
  const url = 'https://api-nba-v1.p.rapidapi.com/players?team=2&season=2023';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming the API returns JSON data
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for caller to handle
  }
};

export default fetchNbaPlayers;
