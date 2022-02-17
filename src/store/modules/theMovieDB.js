export default {
  state: {
    movieData: {
      popular: [],
      action: [],
      comedy: [],
      crime: [],
      animation: [],
      drama: [],
      horror: [],
      sciFi: [],
    },
    loadingData: true,
    error: null,
  },

  getters: {
    GET_MOVIES(state) {
      return state.movieData;
    },
  },

  mutations: {
    SET_IS_LOADING_DATA(state, payload) {
      state.isLoadingData = payload;
    },

    SET_MOVIE_DATA(state, payload) {
      state.movieData.popular = payload.popular.results;
      state.movieData.action = payload.action.results;
      state.movieData.comedy = payload.comedy.results;
      state.movieData.crime = payload.crime.results;
      state.movieData.animation = payload.animation.results;
      state.movieData.drama = payload.drama.results;
      state.movieData.horror = payload.horror.results;
      state.movieData.sciFi = payload.sciFi.results;
    },

    SET_ERROR(state, payload) {
      state.error = payload;
    },
  },

  actions: {
    async FETCH_MOVIES({ commit }) {
      try {
        const categoryUrl = 'https://api.themoviedb.org/3/discover/movie',
          apiKey = `?api_key=${import.meta.env.VITE_APP_API_KEY}`,
          query =
            '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';

        const [
          popularResponse,
          actionResponse,
          comedyResponse,
          crimeResponse,
          animationResponse,
          dramaResponse,
          horrorResponse,
          sciFiResponse,
        ] = await Promise.all([
          fetch(
            `
                https://api.themoviedb.org/3/movie/popular${apiKey}&language=en-US&page=1`
          ),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=28`),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=35`),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=80`),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=16`),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=18`),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=27`),
          fetch(`${categoryUrl}${apiKey}${query}&with_genres=878`),
        ]);

        const popular = await popularResponse.json(),
          action = await actionResponse.json(),
          comedy = await comedyResponse.json(),
          crime = await crimeResponse.json(),
          animation = await animationResponse.json(),
          drama = await dramaResponse.json(),
          horror = await horrorResponse.json(),
          sciFi = await sciFiResponse.json();

        const payload = {
          popular,
          action,
          comedy,
          crime,
          animation,
          drama,
          horror,
          sciFi,
        };

        commit('SET_IS_LOADING_DATA', false);
        commit('SET_MOVIE_DATA', payload);
      } catch (error) {
        if (error) commit('SET_ERROR', error);
      }
    },
  },
};
