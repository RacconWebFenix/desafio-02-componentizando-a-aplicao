import { GenreResponseProps, MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  genere: GenreResponseProps;
  data: MovieProps[];
}

export function Content({ genere, data }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {genere.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {data.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
