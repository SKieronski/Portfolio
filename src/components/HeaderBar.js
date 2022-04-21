import "bulma/css/bulma.min.css"
import React from "react"
import "./HeaderBar.css"

function HeaderBar() {
    return(
        <>
            <nav class="navbar is-fixed-top is-light has-shadow is-hidden-mobile" id="navBar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://scottkieronski.com/#Hero">
                        <span id="name">Scott Kieronski</span>
                    </a>
                </div>
                <div class="navbar-menu is-active" id="navbarOptions">
                    <div class="navbar-end">
                        <a class="navbar-item" href="https://scottkieronski.com/#ProjectSection">
                            Projects
                        </a>
                        <a class="navbar-item" href="https://scottkieronski.com/#About">
                            About
                        </a>
                        <a class="navbar-item" href="https://scottkieronski.com/#Contact">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default HeaderBar