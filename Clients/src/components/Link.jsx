import React from "react";
import facebook from "./images/facebook.jpeg";
import twitter from "./images/twitter.jpeg";
import insta from "./images/insta.jpeg";

const Links = () => {
    return (
        <div>
            <li class="footer-social" style={{ float: "right" }}><img src={facebook} alt="Facebook"/></li>
            <li class="footer-social" style={{ float: "right" }}><img src={twitter} alt="Twitter"/></li>
            <li class="footer-social" style={{ float: "right" }}><img src={insta} alt="instagram"/></li>
            <li class="footer-social" style={{ float: "right" }}><p>Connect Us</p></li>
        </div>
    )
}

export default Links;