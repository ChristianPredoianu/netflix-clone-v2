import {
  API_BASE_URL,
  API_KEY,
  ENDPOINTS,
  DEFAULT_PARAMS,
  GENRES,
} from '@/api/apiConfig';
import { useFetchData } from '@/composables/useFetchData';

export default {
  state: {
    movieData: Object.keys(GENRES).reduce(
      (acc, key) => ({
        ...acc,
        [key.toLowerCase()]: { category: key, movies: [] },
      }),
      { popular: { category: 'Popular', movies: [] } }
    ),
    isLoadingData: true,
    error: null,
    userSelectedGenre: 'popular',
    movieDetails: null,
    movieTrailer: null,
  },

  getters: {
    GET_GENRES(state) {
      return Object.keys(state.movieData);
    },

    GET_MOVIES_BY_GENRE(state) {
      return state.movieData[state.userSelectedGenre]?.movies || [];
    },
  },

  mutations: {
    SET_IS_LOADING_DATA(state, payload) {
      state.isLoadingData = payload;
    },

    SET_MOVIE_DATA(state, payload) {
      Object.keys(payload).forEach((key) => {
        if (state.movieData[key]) {
          state.movieData[key].movies = payload[key].results;
        }
      });
    },

    SET_MOVIE_DETAILS(state, payload) {
      state.movieDetails = payload;
    },

    SET_ERROR(state, payload) {
      state.error = payload;
    },

    SET_MOVIE_TRAILER(state, payload) {
      state.movieTrailer = payload;
    },

    SET_USER_SELECTED_GENRE(state, payload) {
      state.userSelectedGenre = payload;
    },
  },

  actions: {
    async FETCH_MOVIES({ commit }) {
      const { fetchData } = useFetchData();
      commit('SET_IS_LOADING_DATA', true);

      try {
        const genreRequests = Object.entries(GENRES).map(async ([key, id]) => {
          const data = await fetchData(
            `${API_BASE_URL}${ENDPOINTS.DISCOVER}?api_key=${API_KEY}&language=${DEFAULT_PARAMS.language}&page=${DEFAULT_PARAMS.page}&with_genres=${id}`
          );
          return { [key.toLowerCase()]: data };
        });

        const [popularData, ...genreData] = await Promise.all([
          fetchData(
            `${API_BASE_URL}${ENDPOINTS.POPULAR}?api_key=${API_KEY}&language=${DEFAULT_PARAMS.language}&page=${DEFAULT_PARAMS.page}`
          ),
          ...genreRequests,
        ]);

        const payload = { popular: popularData, ...Object.assign({}, ...genreData) };

        commit('SET_MOVIE_DATA', payload);
      } catch (error) {
        commit('SET_ERROR', error);
      } finally {
        commit('SET_IS_LOADING_DATA', false);
      }
    },

    async FETCH_MOVIE_DETAILS({ state, commit }, movieId) {
      if (state.movieDetails?.id === movieId) return;
      const { fetchData } = useFetchData();

      try {
        const movieDetails = await fetchData(
          `${API_BASE_URL}${ENDPOINTS.MOVIE_DETAILS}/${movieId}?api_key=${API_KEY}&language=${DEFAULT_PARAMS.language}`
        );
        commit('SET_MOVIE_DETAILS', movieDetails);
      } catch (error) {
        commit('SET_ERROR', error);
      }
    },

    async FETCH_MOVIE_TRAILER({ commit }, movieId) {
      const { fetchData } = useFetchData();

      try {
        const trailerData = await fetchData(
          `${API_BASE_URL}${ENDPOINTS.MOVIE_DETAILS}/${movieId}/videos?api_key=${API_KEY}&language=${DEFAULT_PARAMS.language}`
        );
        commit('SET_MOVIE_TRAILER', trailerData);
      } catch (error) {
        commit('SET_ERROR', error);
      }
    },

    SET_USER_SELECTED_GENRE({ commit }, payload) {
      commit('SET_USER_SELECTED_GENRE', payload);
    },
  },
};
