import React, { Component } from "react";
import "./homepage.css";

const getAds = () => {
  return (
    <div className="ads">
      <h1>Ads</h1>
      <p className="ads-head" style={{ fontSize: "20px" }}>
        Use CRM and web analytics data to inform your ad campaigns and see
        exactly which ads are turning prospects into loyal customers.
      </p>
      <div className="ads-frame">
        <div className="get-started">
          <div className="get-started-box">
            <p style={{ fontWeight: "5px", fontSize: "18px" }}>
              <b>Measure the ROI of every ad campaign.</b>
            </p>
            <p style={{ fontSize: "14px" }}>
              Manage your Facebook, Instagram, LinkedIn, and Google ad
              campaigns, all within HubSpot.
            </p>
            <button className="button-get-started">Get started free</button>
            <p style={{ fontSize: "11px" }}>
              See why you should be using HubSpot to target and track your
              online ad campaigns.
            </p>
          </div>
        </div>
        <div className="video-play">
          <div className="video-play-button"></div>
        </div>
      </div>
    </div>
  );
};

const getAdsWork = () => {
  return (
    <div className="Ads-work">
      <p
        style={{
          fontSize: "30px",
          maxWidth: "65%",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <b>
          Stop struggling to justify your paid advertising, and start
          understanding which ads actually work.
        </b>
      </p>
      <div className="ads-work-grid">
        <div className="sub-grid">
          <div className="sub-grid-image">
            <img src={window.location.origin + "/images/ss.png"} />
          </div>
        </div>
        <div className="sub-grid">
          <div className="sub-grid-text">
            <p style={{ fontSize: "20px" }}>
              <p>
                <b>Report on real advertising ROI with complete precision.</b>
              </p>
              <p>Clicks don’t equal money in the bank.</p>
              <p>
                The data you get from individual ad networks only gives you part
                of your buyer’s story. HubSpot’s ads tool goes a level deeper —
                giving you insight into how your ads are influencing contacts at
                every stage of the buyer’s journey.
              </p>
              <p>
                See which ads influenced everything from a contact’s first web
                session, all the way through to booking a meeting with your
                sales team. Then tie in your sales data so you can more
                accurately report on the ROI of your ad spend.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="home-page">
        <div className="ads">{getAds()}</div>
        <div className="ads-work">{getAdsWork()}</div>
        <div className="all-in-one-grid"></div>
        <div className="bottom-get-started"></div>
      </div>
    );
  }
}

export default Homepage;
