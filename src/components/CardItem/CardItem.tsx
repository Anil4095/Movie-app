import { createStyles, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { CardItemInterface } from "./CardItemInterface";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    mainContainer: {
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
  })
);

const CardItem: React.FC<CardItemInterface> = ({
  mediaType,
  posterPath,
  showDescription,
  title,
  fromHomeCard,
}) => {
  const styles = useStyles();
  return (
    <>
      <div
        onClick={() => {
          showDescription();
        }}
        className={
          fromHomeCard
            ? "cards col-lg-2 col-md-4 col-sm-6 col-12"
            : "cards col-lg-6 col-md-4 col-sm-6 col-12"
        }
      >
        <div className="card ">
          <img
            src={`https://image.tmdb.org/t/p/original${posterPath}`}
            alt="user_Img"
            className="card_img"
          />
          <div className={clsx(styles.mainContainer)}>
            <h2 className={clsx(styles.mediaType)}>{mediaType}</h2>
            <h2
              className={
                title ? clsx(styles.mediaType) : clsx(styles.customTitle)
              }
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
