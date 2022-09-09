import "bulma/css/bulma.min.css"
import "./AboutMe.css"
import React from "react"

function AboutMe() {
    return(
        <section class="section is-medium" id="About">
            <div class="container">
            <div class="content">
                <p class="title is-1 has-text-centered" id="titleText">About Me</p>
                <p className="pText">
                    Hello! I'm a full stack web developer interested in all things MERN and I have experience
                    with GraphQL, Python, and Django too. I have just graduated from the General Assembly SEI Immersive, so I'm 
                    fully capable of picking up new technologies quickly as well! Currently, I'm working as a software developer for  
                    <a href="https://jomi.com/">JoMI</a>!
                </p>
                <br/>
                <p className="pText">
                    Before becoming a software engineer, I used to be a manager at a grocery store. Being able to build up a team
                    and watch them grow is something I'm truly passionate about and take great pride in. While managing my team, I would develop
                    daily-workflow plans, communicate department needs, concerns, and project ideas with my store director, and (most-importantly) I would
                    try to create a fun environment!
                </p>
                <br/>
                <p className="pText">
                    Outside of work, I am interested in video games, board games, card games, hiking, fitness, playing piano, reading books, and psychology. 
                    Ask me about why EDH is the best Magic the Gathering format, or how amazing hiking at the Gorge is. 
                </p>
            </div>
            </div>
        </section>
    )
}

export default AboutMe