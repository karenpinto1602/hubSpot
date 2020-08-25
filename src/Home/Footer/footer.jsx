import React, { Component } from "react";
import "./footer.css";

const data = [
  {
    title: "Increase Your Traffic",
    content: [
      "Ad Software",
      "Blog Software",
      "SEO Software",
      "Social Media Software",
      "Content Management System",
    ],
  },
  {
    title: "Connect With Leads",
    content: [
      "Find New Prospects",
      "Email Tracking",
      "Sales Email Templates",
      "Click to Call Your Leads",
      "Email Marketing",
    ],
  },
  {
    title: "Close and Manage",
    content: [
      "Documenting Tracking Tool",
      "Meeting Schedule Tool",
      "Sales Automation Tool",
      "Lead Management Tool",
      "Pipeline Management Tool",
    ],
  },
  {
    title: "Support and Tools",
    content: [
      "HubSpot Partners",
      "Join a Local User Group",
      "PieSync Integrations",
      "HubSpot Templates",
      "Free Tools & Generators",
    ],
  },
];

const getMenu = (items) => {
  return items.map((item, key) => {
    return (
      <div key={key} className="upper-menu">
        <input type="checkbox" style={{ display: "none" }}></input>
        <div className="upper-menu-title">{item.title}</div>
        <div className="upper-menu-content">
          {item.content.map((val, key) => {
            return (
              <p key={key} className="content-body">
                {val}
              </p>
            );
          })}
        </div>
      </div>
    );
  });
};

const getSupportMedia = () => {
  return (
    <div className="support-media">
      <button>Contact HubSpot Support</button>
      <div className="handles">
        <img
          src={window.location.origin + "/images/footer/fb-logo.png"}
          alt=""
        />
        <img
          src={window.location.origin + "/images/footer/insta-logo.png"}
          alt=""
        />
        <img
          src={window.location.origin + "/images/footer/youtube-logo.png"}
          alt=""
        />
        <img
          src={window.location.origin + "/images/footer/twitter-logo.png"}
          alt=""
        />
        <img
          src={window.location.origin + "/images/footer/ln-logo.png"}
          alt=""
        />
      </div>
    </div>
  );
};

class Footer extends Component {
  //state = {  }
  render() {
    return (
      <div className="footer">
        <div className="footer-upper-menu">{getMenu(data)}</div>
        <div className="footer-support-media">{getSupportMedia()}</div>
      </div>
    );
  }
}

export default Footer;
