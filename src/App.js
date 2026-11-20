import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero";
// import MovieCard from "./components/MovieCard/MovieCard";
import MovieCard from "./components/MovieCard/MovieCard.js";
import Profile from "./components/Profile/Profile";
import data from "./data/data.json";
import SearchInput from "./components/SearchInput/SearchInput";
import MovieList from "./components/MovieList/MovieList.js";
import { Component } from "react";

import "./css/style.css";
import "./scss/style.scss";
import UserDetailButton from "./components/UserDetailButton/UserDetailButton.js";
import SectionMovies from "./components/SectionMovies/SectionMovies.js";

// function App() {
//   const accaunt = { name: "Alex", online: true };
//   const randomMovie =
//     data.movies[Math.floor(Math.random() * data.movies.length)];
//   return (
//     <div className="layout">
//       <Header>
//         <div class="wrapper">
//           <SearchInput />
//           <Profile {...accaunt} />
//         </div>
//       </Header>
//       <Hero movie={randomMovie} />
//       <MovieList
//         title="Popular Movies"
//         link={{ ref: "#", text: "View all" }}
//         movies={data.movies}
//       ></MovieList>
//       {/* <MovieList title="Your favourites" descr="Movies you've saved for later">
//         <ul>
//           {data.movies.length > 0 &&
//             data.movies
//               .filter((movie) => {
//                 return movie.favourites;
//               })
//               .map((movie, index) => {
//                 return <MovieCard card={movie} key={index} />;
//               })}
//         </ul>
//       </MovieList> */}
//     </div>
//   );
// }

class App extends Component {
  // Стан компонента, тепер коли оновлюємо стан буде відбуватись рендерингз актуальними змінами
  state = {
    accaunt: { name: "Alex", online: true },
    randomMovie: data.movies[Math.floor(Math.random() * data.movies.length)],
    favoriteMoviesCounter: [],
    movies: data.movies,
  };

  favoriteMoviesCounterToggle = (value) => {
    console.log(value);
    this.setState((prevState) => {
      const favoriteMoviesCounter =
        typeof value === "number"
          ? prevState.favoriteMoviesCounter.filter(
              (movie) => movie.id !== value,
            )
          : [...prevState.favoriteMoviesCounter, value];
      console.log(favoriteMoviesCounter);
      return { favoriteMoviesCounter };
    });

    console.log(
      "favouriteMoviesCounterToggle",
      this.state.favoriteMoviesCounter,
    );
  };

  render() {
    const favoriteMoviesIds = this.state.favoriteMoviesCounter.map(
      (movie) => movie.id,
    );

    return (
      <div className="layout">
        <Header>
          <div class="wrapper">
            <SearchInput />
            <Profile {...this.state.accaunt} />
          </div>
        </Header>
        <Hero movie={this.state.randomMovie} />
        <SectionMovies
          title="Popular Movies"
          link={{ href: "#", text: "View all" }}
        >
          <MovieList
            favoriteMoviesCounterToggle={this.favoriteMoviesCounterToggle}
            movies={data.movies}
            favoriteMoviesIds={favoriteMoviesIds}
          ></MovieList>
        </SectionMovies>

        {/* <Trending/> */}
        <SectionMovies
          title="Your favourites"
          description="Movies you've saved for later"
        >
          <MovieList
            favoriteMoviesCounterToggle={this.favoriteMoviesCounterToggle}
            movies={this.state.favoriteMoviesCounter}
            favoriteMoviesIds={favoriteMoviesIds}
          ></MovieList>
        </SectionMovies>

        <UserDetailButton
          favouriteMoviesCounter={this.state.favoriteMoviesCounter.length}
        />
        {/* <MovieList title="Your favourites" descr="Movies you've saved for later">
        <ul>
          {data.movies.length > 0 &&
            data.movies
              .filter((movie) => {
                return movie.favourites;
              })
              .map((movie, index) => {
                return <MovieCard card={movie} key={index} />;
              })}
        </ul>
      </MovieList> */}
      </div>
    );
  }
}

export default App;
