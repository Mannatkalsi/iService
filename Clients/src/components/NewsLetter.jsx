import React from "react";

const NewsLetterSignup = () => {
    return (
        <div>
            <li><p>Newsletter Sign</p></li>
            <li> <input class="email-sigup-input" type="text" id="email_signup" placeholder = "Enter your email" name="email_signup" /></li>
            <li><button class="email-sigup-button" type="button">Subscribe</button></li>
        </div>
    )
}

export default NewsLetterSignup;