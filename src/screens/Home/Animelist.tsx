import React from "react";
import Banner from "../../banner/banner";
import CardItem from "../../components/CardItem/CardItem";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { movies, setSelectedMovieIndex } from "./homeSlice";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: { backgroundColor: "black" },
    mainInnerContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    mainMovieListContainer: {
      justifyContent: "space-evenly",
      backgroundColor: "black",
      color: "white",
      boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 100)",
      border: "none",
    },
    cartContainer: {
      height: "100%",
    },
    mediaType: {
      fontSize: 15,
    },
    customTitle: {
      paddingTop: 23,
    },
    descContainer: {
      color: "white",
      width: "90%",
      textAlign: "justify",
      paddingTop: "2%",
      marginLeft : "10%"
    },
  })
);

const Animelist = () => {
  const styles = useStyles();
  const movieList = useAppSelector(movies);
  const dispatch = useAppDispatch();
  return (
    <div className={clsx(styles.mainContainer)}>
      <div className="cards col-lg-12 col-md-4 col-sm-6 col-12">
        <div
          className={styles.mainInnerContainer}
        >
          <div className="cards col-lg-8 col-md-4 col-sm-4 col-12">
            <Banner />
            <div>
              <div className={"cards col-lg-5 col-md-4 col-sm-6 col-12"}>
                <div className="card ">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieList[0].poster_path}`}
                    alt="user_Img"
                    className="card_img"
                  />
                  <div className={clsx(styles.mainMovieListContainer)}>
                    <h2 className={clsx(styles.mediaType)}>
                      {movieList[0].media_type}
                    </h2>
                    <h2
                      className={
                        movieList[0].title
                          ? clsx(styles.mediaType)
                          : clsx(styles.customTitle)
                      }
                    >
                      {movieList[0].title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className={clsx(styles.descContainer)}>
                <p>{movieList[0].overview}</p>
              </div>
            </div>
          </div>
          <div className="cards col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="row">
              {movieList.map((item, index) => {
                const { poster_path, media_type, title } = item;
                return (
                  <CardItem
                  key={index}
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
      </div>
    </div>
  );
};

export default Animelist;
