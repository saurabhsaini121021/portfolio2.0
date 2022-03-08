import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div className="py-2 text-center footer-style">
      <div >© Saurabh Saini &nbsp; {new Date().getFullYear()}</div>
      <div>Go to Github for Projects</div>
    </div>
  );
};

export default FooterPanel;
