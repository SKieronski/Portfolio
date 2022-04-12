import "bulma/css/bulma.min.css"
import React from "react"

function HeaderBar() {
    return(
        <>
            <nav class="navbar is-fixed-top is-light has-shadow is-spaced" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://github.com/SKieronski">
                        <span class="icon">
                            <i class="fab fa-github"/>
                        </span>
                        <span>Scott Kieronski</span>
                    </a>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarOptions">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu" id="navbarOptions">
                    <div class="navbar-end">
                        <a class="navbar-item" href="http://localhost:3000/#ProjectSection">
                            Projects
                        </a>
                        <a class="navbar-item" href="http://localhost:3000/#Contact">
                            About
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderBar