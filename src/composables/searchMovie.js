import { ref } from 'vue';

export function useSearchMovie() {
  const searchTerm = ref(null);

  function setSearchTerm(userSearchTerm) {
    searchTerm.value = userSearchTerm;
  }

  function searchMovie(movieData) {
    const found = movieData.filter((movie) => {
      return movie.original_title.includes(
        searchTerm.value
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
      );
    });
    return found;
  }

  return { searchTerm, setSearchTerm, searchMovie };
}
