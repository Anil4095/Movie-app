import React, { useEffect } from "react";
import "./Home.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CardItem from "../../components/CardItem/CardItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { movies, setMovies, setSelectedMovieIndex } from "./homeSlice";
import Banner from "../../banner/banner";
import { createStyles, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) =>
  createStyles({
    movieListContainer: {
      backgroundColor: "black",
      alignItems: "center",
      width: "100%",
      padding: 0,
      margin: 0,
    },
  })
);
const Home = () => {
  const movieList = useAppSelector(movies);
  const styles = useStyles();
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=e11146bd4a81236990c1fa2f879c9ea6"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMovies(data.results));
      });
  }, []);

  return (
    <div className={styles.movieListContainer}>
      <div className="container-fluid ">
        <Banner />
        <div className="row">
          {movieList.map((item, index) => {
            const { poster_path, media_type, title } = item;
            return (
              <CardItem
              key={index}
                fromHomeCard="fromCardScreen"
                showDescription={() => {
                  dispatch(setSelectedMovieIndex(index));
                }}
                mediaType={media_type}
                posterPath={poster_path}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
