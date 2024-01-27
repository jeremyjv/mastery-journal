import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/azeret-mono"; // Defaults to weight 400
import "@fontsource/azeret-mono/400.css"; // Specify weight
import "@fontsource/azeret-mono/400-italic.css"; // Specify weight and style
//eventually need to import components

import Goals from "./components/goals.component";
import Skills from "./components/skills.component";
import Entry from "./components/entry.component"

function App() {
  return (
    <div>
      <body class="h-screen bg-black">
        <h1 className="text-3xl text-white text-center font-body">Mastery Journal</h1>
        
      <Goals />
      <Skills />
      <br/>
      <br/>
      <Entry />
        
        
      </body>
    </div>
      
    
    
  );
}

export default App;
