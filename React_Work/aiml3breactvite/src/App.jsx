// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from 'react';
import Student from './Student';
import image1 from './study_image.jpeg';
function App() {

  const StudentData = {
    college: "ABES Engineering College",
    pic: "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
    roll: "127",
    name: "Prajakta Singhal",
    branch: "CSE(AIML)",
    section: "3B"
  }
  // let a = 20;
  // let mystyle = {
  //   backgroundColor: 'yellow',
  //   color: 'red',
  //   border: '2px solid red',
  //   height: '100px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // };
 

  return (
    // <div style={{ color: "red" }}>
    //   <h2>ABES Engineering College</h2>
    //   <div style={mystyle}>{a}</div>
    // </div>
    <div>
      <Student data = {StudentData} />
      {/* pic= {<img src = {image1} height= {100} width={100}/>}
      college="ABES Engineering College" roll="127" name= "Prajakta" branch="CSE(AIML)" section="AIML-3B"  />
      <Student
      pic= {<img src = {image1} height= {100} width={100}/>}
      college="ABES Engineering College" roll="127" name= "Prajakta" branch="CSE(AIML)" section="AIML-3B"  />
      <Student
      pic= {<img src = {image1} height= {100} width={100}/>}
      college="ABES Engineering College" roll="127" name= "Prajakta" branch="CSE(AIML)" section="AIML-3B"  /> */}
    </div>
  );
}

export default App;





