import "bulma/css/bulma.min.css"
import React from "react"
import "./Hero.css"

function Hero() {

    return (
        <section class="hero is-fullheight hero-image" id="Hero">
            <div class="hero-body">
                <div class="container has-text-centered pb-6" id="heroTextContainer">
                    <p class="title is-1" id="heroName">
                        Scott Kieronski
                    </p>
                    <p class="subtitle is-3" id="heroDescription">
                        Software Engineer
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero