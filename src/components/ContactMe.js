import "bulma/css/bulma.min.css"
import React from "react"

function ContactMe() {
    return (
        <footer class="footer has-background-info-light has-text-centered" id="Contact">
            <div class="content">
                <p>
                    Email me at: <a href="mailto:scottkieronski@gmail.com">scottkieronski@gmail.com</a>
                </p>
            </div>
            <a class="button is-link is-responsive mr-4" href="https://github.com/SKieronski">
                <span class="icon is-large">
                    <i class="fab fa-github fa-2x"/>
                </span>
            </a>
            <a class="button is-link is-responsive" href="https://www.linkedin.com/in/scott-kieronski/">
                <span class="icon is-large">
                    <i class="fab fa-linkedin fa-2x"/>
                </span>
            </a>
            <div class="content mt-4">
                <p>
                    Thank you for taking the time to look at my portfolio!
                </p>
            </div>
        </footer>
    )
}

export default ContactMe