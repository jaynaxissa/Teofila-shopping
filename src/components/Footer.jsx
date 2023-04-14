import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          <em>
            SIGN UP TO OUR NEWSLETTER. DON’T MISS OUT ON OUR DREAMY NEW PRODUCT
            DROPS OR EXCLUSIVE OFFERS.
          </em>
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>INFORMATION</h2>
            <Link to="/sign-up">MY ACCOUNT</Link>
            <Link to="/">HELP & CONTACT</Link>

            <Link to="/">DELIVERY INFORMATION</Link>
          </div>
          <div className="footer-link-items">
            <h2>ABOUT TEÓFILA</h2>
            <Link to="/">ABOUT US</Link>
            <Link to="/">CAREERS</Link>
            <Link to="/">COLLABORATE</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>T&C'S</h2>
            <Link to="/">TERMS & CONDITIONS</Link>
            <Link to="/">YOUR DATA</Link>
            <Link to="/">PRIVACY POLICY</Link>
          </div>
          <div className="footer-link-items">
            <h2>SOCIAL MEDIA</h2>
            <Link to="/">INSTAGRAM</Link>
            <Link to="/">FACEBOOK</Link>
            <Link to="/">TWITTER</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <em>Teófila</em>
            </Link>
          </div>
          <small className="website-rights">
            Teófila fashion by Jayna © 2023
          </small>
          <div className="social-icons">
            <FaInstagram className="allSocialIcons" />
            <BsFacebook className="allSocialIcons" />
            <BsPinterest className="allSocialIcons" />
            <AiOutlineTwitter className="allSocialIcons" />
            <AiFillYoutube className="allSocialIcons" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
