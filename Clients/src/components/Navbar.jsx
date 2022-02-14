import React from "react";
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <ul class="nav-bar">
                <li><a href="/">IService</a></li>
                <li><a href="/posttask">Post a task</a></li>
                {/*<Link to ="PostTask">Post a Task </Link>*/}
                <li><a href="#BecomeAnExpert">Become an expert</a></li>
                <li><a href="/alltask">All Tasks</a></li>
                <li><a href="/findtask">Find tasks</a></li>
                <li><a href="#HowItWorks">How it works</a></li>
                <li style={{backgroundColor:' #75CDD8'}}><a href="#SignIn">Sign in</a></li>
            </ul>
        </div>
    )
}

export default Navbar;