import React from "react";
import { API_IMG } from "../redux/api";
import styled from "styled-components";
import notFoud from "../image/notfound.png";

const P = styled.p`
  text-overflow: ellipsis;
  line-height: 1.5em;
  height: 3em;
  overflow: hidden;
`;

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  console.log(poster_path, "poster");
  return (
    <div className="card bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          src={`${poster_path == null ? notFoud : API_IMG + poster_path}`}
          alt=""
          height="300px"
        />
        <div
          className="card-body d-flex flex-column justify-content-between"
          style={{ color: "#fff" }}
        >
          <h4>
            {title}
          </h4>
          <h5>
            ImDb: {vote_average}
          </h5>
          <h5>
            Release Date: {release_date}
          </h5>
          <br />
          <h6>Overview</h6>
          <P>
            {overview}
          </P>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
