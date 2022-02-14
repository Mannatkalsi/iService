import React from "react";
import './Footer.css'
import NewsLetter from'./NewsLetter'

import Link from "./Link";


function Footer() {
    return(
        <div>
            <ul class="footer">
                <NewsLetter /> 
                <Link />
            </ul>
        </div>
    )
}

export default Footer;