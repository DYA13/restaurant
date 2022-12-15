import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="footer_container">
      <div className="btn_box">
        <button
          type="button"
          className="btn_footer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Scroll to top{" "}
        </button>
      </div>

      <div className="footer_one">
        <h3 className="footer_title">GIOVE</h3>
        <p className="footer_par">LTD "GIOVE COMPANY"</p>
        <p className="footer_par">All rights reserved 2022</p>
      </div>
      <div className="footer_two">
        <p>
          <a className="footer_link" href="#/">
            Terms and Conditions
          </a>
        </p>
        <p>
          <a className="footer_link" href="#/">
            Cookie policy
          </a>
        </p>
        <p>
          <a className="footer_link" href="#/">
            Media and press
          </a>
        </p>
      </div>
    </div>
  );
}
export default Footer;
