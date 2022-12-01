import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AnimeDetail.css";

function AnimeDetail() {
  const { category } = useParams();

  const [anime, setAnime] = useState([]);

  const imgUrl = require(`../../assets/images/MAL.png`);

  const fetchAnime = async (category) => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${category}`).then(
      (res) => res.json()
    );

    setAnime(temp.data);
  };

  useEffect(() => {
    if (category) {
      fetchAnime(category);
    }
  }, [category]);

  console.log(anime);

  return (
    <div>
      <h1 className="title">
        {anime?.title_english || anime?.title_japanese}
        <a href={anime?.url} target="_blank" rel="noreferrer">
          <img
            src={imgUrl}
            height="28px"
            width="28px"
            alt=""
            title="View at MyAnimeList.net"
          />
        </a>
      </h1>
      <div className="background-text">
        <div>{anime?.synopsis}</div>
        <div>{anime?.background}</div>
      </div>
      <div className="list-group">
        <div className="image-container">
          <img src={anime?.images?.jpg?.image_url} alt=""></img>
        </div>
        <div className="text-container">
          <div>
            <span className="dark-text">Rank: </span>
            <span>{anime?.rank}</span>
          </div>
          <div>
            <span className="dark-text">Popularity: </span>
            <span>{anime?.popularity}</span>
          </div>
          <div>
            <span className="dark-text">Score: </span>
            <span>{anime?.score}</span>
          </div>
          <div>
            <span className="dark-text">Members: </span>
            <span>{anime?.members}</span>
          </div>
          <div>
            <span className="dark-text">Source: </span>
            <span>{anime?.source}</span>
          </div>
          <div>
            <span className="dark-text">Source: </span>
            <span>{anime?.duration}</span>
          </div>
          <div>
            <span className="dark-text">Status: </span>
            <span>{anime?.status}</span>
          </div>
          <div>
            <span className="dark-text">Status: </span>
            <span>{anime?.status}</span>
          </div>
          <div>
            <span className="dark-text">Rating: </span>
            <span>{anime?.rating}</span>
          </div>
        </div>
      </div>
      {anime?.trailer?.embed_url ? (
        <div className="trailer-section">
          <h1 className="title">Trailer</h1>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            width="600"
            height="400"
            src={anime?.trailer?.embed_url}
          ></iframe>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AnimeDetail;
