import React from "react";
import "./inValidPage.scss";
import bgVideo from "../../assets/videos/3063475-uhd_3840_2160_30fps.mp4"
import { Link } from "react-router-dom";

function InValidPage() {
  return (
    <div className="inValidPage-main">
      <div className="page-not-found">
        <div className="bg-video">
            <video width="100%" height="100%" autoPlay muted loop src={bgVideo} />
        </div>
        <h1>
          <div className="page">
            <div className="p">p</div>
            <div className="a">a</div>
            <div className="g">g</div>
            <div className="e">e</div>
          </div>
          <div className="not">
            <div className="n">n</div>
            <div className="o">o</div>
            <div className="t">t</div>
          </div>
          <div className="found">
            <div className="f">f</div>
            <div className="o">o</div>
            <div className="u">u</div>
            <div className="n">n</div>
            <div className="d">d</div>
          </div>
        </h1>
      </div>
      <div className="go-home">
        <Link to="/">Back To Home</Link>
      </div>
    </div>
  );
}

export default InValidPage;
