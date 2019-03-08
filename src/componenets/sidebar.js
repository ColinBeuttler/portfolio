import React from 'react';
import ReactDOM from 'react';
import "./public/css/sidebar.css"

const { Component } = React

class Sidebar extends Component {
    render() {
        return (
            <div class="sidebar pure-u-1-4">
                <div class="header ">
                    <h1>Portfolio and Sample Work</h1>
                    <nav class="nav">
                        <ul class="nav-list">
                            <li class="nav-item">
                                <a class="pure-button" href="https://github.com/ColinBeuttler">GitHub</a>
                            </li>
                            <li class="nav-item">
                                <a class="pure-button" href="https://www.linkedin.com/in/colin-beuttler-5683b8149/">LinkedIn</a>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>

        )
    }
};



export default Sidebar;