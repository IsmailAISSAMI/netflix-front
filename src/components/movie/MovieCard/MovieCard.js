import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MovieCard.module.sass";


const MovieCard = (props) => {
  return (
    <div className={styles.movie_card}>
      <Link href={`/browse`}>
        <a>
          <Image
            src={props.movie.image}
            alt={props.movie.title}
            width="250"
            height="100"
            layout="intrinsic"
          />
        </a>
      </Link>
    </div>
  );
};

export default MovieCard;
