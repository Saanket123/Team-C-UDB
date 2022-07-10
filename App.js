import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import LandingPage from "./components/LandingPage";

// import "./styles.css";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<SignIn/>} />
        <Route path="/Register/" element = {<Register/>}/>
        <Route path ="/LandingPage/" element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
    
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to = "/">Sign in</Link>
    //         </li>
    //         <li>
    //           <Link to  ="/Register">Register</Link>
    //         </li>
    //         <li>
    //           <Link to = "LandingPage">Landing Page</Link>
    //         </li>
    //       </ul>
    //     </nav>


    //     <Routes>
    //       <Route exact path = "/">
    //         <SignIn/>
    //       </Route>
    //       <Route path = "/Register">
    //         <Register/>
    //       </Route>
    //       <Route path = "/LandingPage">
    //         <LandingPage/>
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>


    // <SignIn/>
    // <Register/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
