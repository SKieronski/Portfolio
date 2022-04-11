import "bulma/css/bulma.min.css";
import './App.css';
// import HeaderBar from './components/HeaderBar';
import ProjectOutline from './components/ProjectOutline';

const myWindTech = ["MongoDB", "Express", "React-Native", "Node.js", "Axios", "Expo"
  , "Xcode", "Bcrypt", "React-Native-Maps", "React-Navigation", "JWT"]

function App() {

  return (
  <div className="App">
    <section class="section is-large" id="ProjectSection">
      <div class="container">
        <div class="columns">
          <div class="column" id="CenterText">
            <div class="block" />
            <p class="title is-1" id="WindTitle">Wind</p>
            <div class="content">
              <p id="TitleSubText">
                Bored of running the same route over and over again? 
                Wind is a mobile app designed to provide new running routes for avid runners. 
                Using a distance (meters), bearing, and your location, Wind will calculate a running route for the user. 
                The app also features user authorization and route-saving and deleting functionality. 
              </p>
            </div>
            <div class="block" />
            <p class="title is-3" id="Tech">Tech Used</p>
            <div class="columns is-mobile is-multiline is-centered">
              {myWindTech.map((tech) => {
                return (
                  <div class="column is-narrow">
                    <code class="html">
                      {tech}
                    </code>
                  </div>
                )
              })}
            </div>
            <a class="button is-link is-responsive" id="GitHubButton" href="https://github.com/SKieronski/Wind">
              <span class="icon">
                <i class="fab fa-github"/>
              </span>
              <span>GitHub Repo</span>
            </a>

          </div>
          <div class="column is-narrow is-one-fifth-fullhd is-one-third-desktop is-two-thirds-mobile" id="IphoneImageContainer">
            <figure class="image is-1by2">
              <img alt="Wind Create Screen" src="images/Wind/CreateScreen.png" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default App;
