import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useFetchMovies = (currentPage) => {
  return useQuery({
    queryKey: ['movies', currentPage],
    queryFn: () =>
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=${currentPage}&include_adult=false`
        )
        .then((res) => res.data),
    keepPreviousData: true,
  });
};

export { useFetchMovies };
