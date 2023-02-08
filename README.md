# Netflix clone Vue 3 + Vite 

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) 
 
 # Note about the 429 Error 
An 429 Error may appear logged to the console. Themoviedb Api has a rate limit because of the limitations of the free api key. It didn't have this limit of 50 requests per second when I build the project and I was using more then 50 movies. Some movies may not be able to be fetched on initial page load because off this limitation. Just give it a browser refresh after a second or two and all movies will show up correctly. You can read more abut this issue here: https://www.themoviedb.org/talk/62c7c1b258361b005fd2e747?page=1#62c83b78befd91005007a0c7
 
 <!-- PROJECT LOGO -->   
<br />
<p align="center">
  <a href="https://github.com/ChristianPredoianu/netflix-clone-v2">
    <img src="src/assets/images/netclone.png" alt="Logo" width="200" height="160">
  </a> 
 
  <h3 align="center">Netflix clone</h3>
   
  <p align="center">
    <a href="https://github.com/ChristianPredoianu/netflix-clone-v2"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://netclonevue2.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/ChristianPredoianu/netflix-clone-v2/issues">Report Bug</a>
  </p>
</p>

 

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A Netflix clone made with Vue 3 + Vite + Firebase to mimic Netflix functionality.

### Built With

* [Vue.js 3 (script setup)](https://vuejs.org/)
* [Vite](https://vitejs.dev/)
* [Vuex](https://vuex.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Sass](https://sass-lang.com/)
* [Firebase](https://firebase.google.com/)
* [Swiper.js](https://swiperjs.com/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ChristianPredoianu/netflix-clone-v2.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ``` 
3. Serve with hot reload at localhost
   ```sh
    npm run dev
   ``` 
5. Build for production 
   ```sh
    npm run build
   
   ```

<!-- USAGE EXAMPLES -->
## Usage

To start using Netclone you have two options:

1.1 Sign in to Netclone with an existing account for demo purposes https://netclonevue2.netlify.app/signIn:
Username: test@test.com
Password: testingnetclone => choose an existing profile

1.2 Signup to Netclone with a dummy email made up by you. E.g (john@whatever.com) It doesn't need to be a valid email. And choose a password. => Add a profile and continue with the selected profile.

 

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Christian Predoianu - [@linkedin](https://se.linkedin.com/in/christian-predoianu-369218157) - christianpredoianu@yahoo.com

Project Link: [https://github.com/ChristianPredoianu/netflix-clone-v2](https://github.com/ChristianPredoianu/netflix-clone-v2)



<!-- ACKNOWLEDGEMENTS --> 
## Acknowledgements
* [Themoviedb](https://www.themoviedb.org/)
* [Google Fonts](https://fonts.google.com/)
* [Font-Awesome](https://fontawesome.com/)
