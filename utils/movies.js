export const getGenresById = (genres, requiredIds) => {
  return genres
    .filter((genre) => requiredIds.includes(genre.id))
    .map((genre) => genre.name);
};
