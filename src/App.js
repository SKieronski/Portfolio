import "bulma/css/bulma.min.css";
import './App.css';
// import HeaderBar from './components/HeaderBar';
import ProjectOutline from './components/ProjectOutline';

function App() {

  return (
  <div className="App">
    <section class="section is-large" id="ProjectSection">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="block" />
              <p class="title is-1">Wind</p>
              <div class="content">
                <p class="">
                  Bored of running the same route over and over again? 
                  Wind is a mobile app designed to provide new running routes for avid runners. 
                  Using a distance (meters), bearing, and your location, Wind will calculate a running route for the user. 
                  The app also features user authorization and route-saving and deleting functionality. 
                </p>
              </div>
            <div class="block" />
            <p class="title is-3">Tech Used</p>
            {/* <table class="table">
              <tbody>
                <tr>
                  <td>MongoDB</td>
                  <td>Express</td>
                  <td>React-Native</td>
                  <td>Node.js</td>
                  <td>Axios</td>
                  <td>Expo</td>
                  <td>Xcode</td>
                  <td>Bcrypt</td>
                  <td>JWT</td>
                  <td>React-Native-Maps</td>
                  <td>React-Navigation</td>
                </tr>
              </tbody>
            </table> */}
            <div class="content is-normal">
              <ul className="TechListUL">
                <li className="TechListLI"> MongoDB </li>
                <li className="TechListLI"> Express </li>
                <li className="TechListLI"> React-Native </li>
                <li className="TechListLI"> Node.js </li>
                <li className="TechListLI"> Axios </li>
                <li className="TechListLI"> Expo </li>
                <li className="TechListLI"> Xcode </li>
                <li className="TechListLI"> Bcrypt </li>
                <li className="TechListLI"> React-Native-Maps </li>
                <li className="TechListLI"> React-Navigation </li>
                <li className="TechListLI"> JWT </li>
              </ul>
            </div>
            <a class="button is-link is-responsive" id="GitHubButton">
              <span class="icon">
                <i class="fab fa-github"/>
              </span>
              <span>GitHub Repo</span>
            </a>

          </div>
          <div class="column is-narrow" id="IphoneImageContainer">
            <figure class="image is-1by2">
              <img alt="Wind Create Screen" src="images/Wind/CreateScreen.png" />
            </figure>
          </div>
        </div>
      </div>
    </section>
      {/* <HeaderBar /> */}
      {/* <ProjectOutline />
      <ProjectOutline /> */}
  </div>
  );
}

export default App;
