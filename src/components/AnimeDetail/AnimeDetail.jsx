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
            height="32px"
            width="32px"
            alt=""
            title="View at MyAnimeList.net"
          />
        </a>
      </h1>
      <div className="background-text">
        {anime?.background || anime?.synopsis}
      </div>
      <div className="list-group">
        <div className="image-container">
          <img src={anime?.images?.jpg?.image_url} alt=""></img>
        </div>
        <div className="text-container">
          <h3>Rank: {anime?.rank}</h3>
          <h3>Popularity: {anime?.popularity}</h3>
          <h3>Score: {anime?.score}</h3>
          <h3>Members: {anime?.members}</h3>
          <h3>Source: {anime?.source}</h3>
          <h3>Duration: {anime?.duration}</h3>
          <h3>Status: {anime?.status}</h3>
          <h3>Rating: {anime?.rating}</h3>
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
