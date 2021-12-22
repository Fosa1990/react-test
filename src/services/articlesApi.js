import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1/search';

const fetchArticlesWithQuery = searchQuery => {
  const searchpParams = new URLSearchParams({
    query: searchQuery,
  });
  const url = `${BASE_URL}?${searchpParams}`;

  return axios.get(url).then(response => response.data.hits);
};

const fetches = {
  fetchArticlesWithQuery,
};

export default fetches;
