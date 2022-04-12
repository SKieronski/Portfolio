import "bulma/css/bulma.min.css";
import React from "react"
import './ProjectOutline.css'

function ProjectOutline({techList, title, description, githubHref, imgSrc}) {
    return(
        <>
        <section class="section is-medium" id="ProjectSection">
        <div class="container">
            <div class="columns">
                <div class="column" id="CenterText">
                    <p class="title is-1" id="Title">{title}</p>
                    <div class="content">
                      <p id="TitleSubText">
                          {description}
                      </p>
                    </div>
                    <p class="title is-3" id="Tech">Tech Used</p>
                    <div class="columns is-mobile is-multiline is-centered">
                        {techList.map((tech) => {
                            return (
                                <div class="column is-narrow" key={`${tech}`}>
                                    <code class="html">
                                        {tech}
                                    </code>
                                </div>
                            )
                        })}
                    </div>
                    <a class="button is-link is-responsive" id="GitHubButton" href={githubHref}>
                        <span class="icon">
                            <i class="fab fa-github"/>
                        </span>
                        <span>GitHub Repo</span>
                    </a>
                </div>
                {imgSrc==="images/Wind/CreateScreen.png" ? 
                    <div class="column is-narrow is-one-fifth-fullhd is-one-third-desktop is-two-thirds-mobile" id="IphoneImageContainer">
                        <figure class="image is-1by2">
                            <img alt="Project Screenshot" src={imgSrc} />
                        </figure> 
                    </div> :
                    <div class="column is-narrow is-half-desktop"id="ImageContainer">
                        <figure class="image is-16by9">
                            <img alt="Project Screenshot" src={imgSrc} />
                        </figure>
                    </div>
                }
                </div>
            </div>
        </section>
        </>
    )
}

export default ProjectOutline