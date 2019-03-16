import React from 'react'; 

function sidebar(props) {
    const{classes} =props;

    return(
        <div class="sidebar pure-u-1-4">
        <div class="header">
            <ul class="nav-list">
                <li class="pure-u-1-1">
                    <h1>Colin Beuttler</h1>
                </li>
                <li class="pure-u-1-1">
                    <a>beutt102@mail.chapman.edu</a>
                </li>
                <li class="pure-u-1-3">
                    <h1 class="side-head">View My GitHub</h1>
                    <a class="pure-button" href="https://github.com/ColinBeuttler">GitHub</a>
                </li>
                <li class="pure-u-1-3">
                    <h1 class="side-head">View My LinkedIn</h1>
                    <a class="pure-button" href="https://www.linkedin.com/in/colin-beuttler-5683b8149/">LinkedIn</a>
                </li>
                <li class="pure-u-1-3">
                    <h1 class="side-head">View My Resume</h1>
                    <a class="pure-button"
                        href="https://docs.google.com/document/d/1hxXd6geb2dst2L_sGhxh2LuiKeHr04Q6VKzWXeCrRkg/edit">Resume</a>
                </li>
            </ul>
        </div>

    </div>
    )
}