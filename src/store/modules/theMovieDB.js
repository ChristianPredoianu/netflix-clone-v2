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
  },

  getters: {
    getMovies(state) {
      return state.movieData;
    },
  },

  mutations: {
    setPopularMovies(state, data) {
      state.popularMovies = data;
    },
    setMovieData(state, payload) {
      state.movieData = data;
    },
  },

  actions: {
    async fetchPopularMovies({ commit }) {
      const apiKey = '6e4acdeab93e10b5ba3a48dec9a8ba3d';
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();

        commit('setPopularMovies', data);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMovies({ commit }) {
      try {
        const apiKey = '6e4acdeab93e10b5ba3a48dec9a8ba3d';
        //Fetching multiple genres from api
        const results = await Promise.all([
          fetch(
            `
                https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=28`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=35`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=80`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=16`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=18`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27`
          ).then((response) => response.json()),
          fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=878`
          ).then((response) => response.json()),
        ]);
        /* 
        commit('setMovieData', ) */
        results.forEach((element) => {
          console.log(element.results);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
