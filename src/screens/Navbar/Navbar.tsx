import React, { useCallback, useEffect, useState } from "react";
import { makeStyles, createStyles, colors } from "@material-ui/core";
// import { NavLink } from 'react-router-dom';
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  appendToSearchMovies,
  searchMovies,
  selectedMovieIndex,
  setSearchMovies,
} from "../Home/homeSlice";
import "./Navbar.css";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
      justifyContent: "space-evenly",
      backgroundColor: "red",
    },
    navbarContainer: {
      height: "60px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      padding: "0.5rem 0rem",
      backgroundColor: "black",
      color: "white",
      boxShadow: "0 2px 2px 2px rgba(9, 9, 9, 0.23)",
    },
    navbarTitleContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      display: "flex",
    },
    serchMovieHeaderContainer: {
      width: "60%",
      flexDirection: "row",
      display: "flex",
      justifyContent: "flex-end",
    },
    serchMovieContainer: {
      width: "60%",
      alignItems: "center",
      color: "white",
      borderRadius: 25,
      opacity: 0.5,
      marginRight: "40px",
      paddingLeft: 15,
      backgroundColor: "#374151",
    },
    navbarInnerContainer: {
      width: "25%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    navbarTitleTxt: {
      width: "40%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      fontSize: 30,
      color: "white",
    },
    navbarTabContainer: {
      width: "50%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    navbarTabHomeLink: { width: "50%", color: "#868686", alignItems: "center" },
    navbarTabAnimeLink: {
      width: "50%",
      color: "#868686",
      alignItems: "center",
    },
    searchInnerContainer: {
      position: "absolute",
      width: "35%",
      height: "400px",
      zIndex: 10,
      overflow: "auto",
      alignContent: "center",
      top: "54px",
      /* left: 78px; */
      right: "47px",
    },
    searchListContainer: {
      width: "100%",
      alignSelf: "center",
      opacity: 0.8,
      backgroundColor: "rgb(0, 0, 0)",
      color: "white",
    },
  })
);

let page = 1;

function useDebounce(effect: any, dependencies: any, delay: any) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
const Navbar = () => {
  const styles = useStyles();
  const searchMoviesList = useAppSelector(searchMovies);
  const selectedIndex = useAppSelector(selectedMovieIndex);

  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  useDebounce(
    () => {
      page = 1;
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=e11146bd4a81236990c1fa2f879c9ea6&language=en-US&page=${page}&include_adult=false&query=${search}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.errors) {
            dispatch(setSearchMovies([]));
          } else {
            dispatch(setSearchMovies(data.results));
          }
        });
      // setFilteredTitle(
      //   searchMovies.filter((d) => d.title.toLowerCase().includes(search.toLowerCase()))
      // );
    },
    [search],
    800
  );

  const fetchMore = () => {
    page += 1;
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e11146bd4a81236990c1fa2f879c9ea6&language=en-US&page=${page}&include_adult=false&query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          dispatch(appendToSearchMovies(data.results));
        }
      });
  };

  useEffect(() => {
  }, [selectedIndex]);

  const handleSearch = (e: any) => setSearch(e.target.value);
  return (
    <div className={clsx(styles.mainContainer)}>
      <nav className={styles.navbarContainer}>
        <div
          className={styles.navbarTitleContainer}
          id="navbarSupportedContent"
        >
          <div className={styles.navbarInnerContainer}>
            <div className={styles.navbarTitleTxt}>Anonime</div>
            <div className={styles.navbarTabContainer}>
              <div className={styles.navbarTabHomeLink}>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </div>
              <div className={styles.navbarTabAnimeLink}>
                <NavLink className="nav-link" to="/AnimeList">
                  Animelist
                </NavLink>
              </div>
            </div>
          </div>
          <div className={styles.serchMovieHeaderContainer}>
            <input
              id="search"
              className={styles.serchMovieContainer}
              type="text"
              spellCheck="false"
              placeholder="Search anime or movie"
              value={search || ""}
              onChange={handleSearch}
            ></input>
            <div className={styles.searchInnerContainer}>
              <div className={styles.searchListContainer}>
                {searchMoviesList.map((item: any, index: any, arr: any) => {
                  if (arr.length - 1 === index) {
                    return (
                      <div key={index}>
                        <p>{item?.original_title} </p>
                        <p
                          onClick={() => {
                            fetchMore();
                          }}
                        >
                          load more
                        </p>
                      </div>
                    );
                  } else {
                    return <p onClick={() => {}}>{item?.original_title}</p>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
