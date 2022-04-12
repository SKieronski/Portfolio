import "bulma/css/bulma.min.css";
import './App.css';
import HeaderBar from './components/HeaderBar';
import ProjectOutline from './components/ProjectOutline';
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";

const myWindTech = ["MongoDB", "Express", "React-Native", "Node.js", "Axios", "Expo"
  , "Xcode", "Bcrypt", "React-Native-Maps", "React-Navigation", "JWT"]
const myWindTitle = "Wind"
const myWindDescription = "Bored of running the same route over and over again? Wind is a mobile app designed to provide new running routes for avid runners. Using a distance (meters), bearing, and your location, Wind will calculate a running route for the user. The app also features user authorization and route-saving and deleting functionality."
const myWindGithub = "https://github.com/SKieronski/Wind"
const myWindImg="images/Wind/CreateScreen.png"

const myGitnessTech = ["MongoDB", "Express", "React", "Node.js", "Heroku", "Axios"]
const myGitnessTitle = "Gitness"
const myGitnessDescription = "Gitness is a full-stack app that allows users to view and share workout routines. They can also see specific details about each exercise, such as: description, reps/sets, and a gif example of the exercise! There is also full CRUD functionality through our custom API. Our app aims to be readable and usable, and also be a one-stop shop for users to host their routines and never have to cross-reference with other sites again!"
const myGitnessGithub = "https://github.com/SKieronski/gitness"
const myGitnessImg="images/GitnessLandingPage.png"

const myCFTech = ["React", "CSS-Grid", "Google Maps Embed", "Spotify Embed"]
const myCFTitle = "Concert Finder"
const myCFDescription = "I have always wanted more information about the performers and venues for music concerts / festivals. This app sets out to provide that in easily accessible and minimalistic ways. The results provided are the absolute basics of what people want to know about when hearing about a concert. In addition to this, the spotify embed provides a quick way to hear what that performer is like. The google maps embed gives the user a general idea of where the concert is, in which they can click on a link in the map to go to the Google Maps page and see more info about the venue or get directions."
const myCFGithub = "https://github.com/SKieronski/project-2-ga"
const myCFImg = "images/CFResults.png"

const mySPPTech = ["HTML", "CSS", "JS"]
const mySPPTitle = "Simon Plays Piano"
const mySPPDescription = "Simon is a memory game that launched in 1978. It creates a pattern of notes and lights which the player needs to repeat in order to progress. If they press the incorrect input or the time-limit runs out, the game is over. This is a variation of the original Simon game. It involves a piano keyboard that the player interacts with to play. Similarly to Simon, the computer creates a pattern of piano notes that the player needs to repeat. In addition to the tones, the computer will change the color of the keys themselves to visually signify which notes are playing. The game ends when the user inputs the incorrect key."
const mySPPGithub = "https://github.com/SKieronski/SKieronski.github.io"
const mySPPImg = "images/SPPGameOver.png"

function App() {

  return (
  <div className="App">
    <HeaderBar />
    <ProjectOutline techList={myWindTech} title={myWindTitle} description={myWindDescription} githubHref={myWindGithub} imgSrc={myWindImg}/>
    <ProjectOutline techList={myGitnessTech} title={myGitnessTitle} description={myGitnessDescription} githubHref={myGitnessGithub} imgSrc={myGitnessImg}/>
    <ProjectOutline techList={myCFTech} title={myCFTitle} description={myCFDescription} githubHref={myCFGithub} imgSrc={myCFImg}/>
    <ProjectOutline techList={mySPPTech} title={mySPPTitle} description={mySPPDescription} githubHref={mySPPGithub} imgSrc={mySPPImg}/>
    <AboutMe />
    <ContactMe />
  </div>
  );
}

export default App;
