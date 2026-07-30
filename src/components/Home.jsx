import React, { useState } from "react";
import "./Home.css";
import analyseMessage from "../dsa/Analyser";

const Home = ({ setScreen, setAnalysis }) => {

  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");


  const handleCheck = (e) => {
    e.preventDefault();


    if (!companyName.trim() || !message.trim()) {
      alert("Please enter company name and message.");
      return;
    }


    // Move to loading screen
    setScreen("loading");


    // Run analysis after loading animation
    setTimeout(() => {

      const analysis = analyseMessage(
        companyName,
        message
      );


      // Store result
      setAnalysis(analysis);


      // Move to result screen
      setScreen("result");


    }, 2000);


  };


  return (

    <div id="home">


      <p className="badge">
        🤖 Scam Detector
      </p>


      <h1 id="h1">
        Is This Offer Real?
      </h1>


      <h2 id="h2">
        Detect fake HR messages, suspicious links,
        unrealistic salaries and scam patterns before you apply.
      </h2>



      <form
        className="form"
        onSubmit={handleCheck}
      >


        <input
          id="companyName"
          type="text"
          placeholder="Write Company Name"
          value={companyName}
          onChange={(e) =>
            setCompanyName(e.target.value)
          }
        />



        <textarea
          id="PlacementMsg"
          placeholder="Paste your message....."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />



        <button
          id="btn"
          type="submit"
        >
          Check Now
        </button>

        <div className="powered">

  <div className="powered-title">
    <span></span>
    Powered By
    <span></span>
  </div>


  <div className="tech-badges">

    <span>⚡ HashMap</span>

    <span>🧠 KMP</span>

    <span>📊 Edit Distance</span>

  </div>

</div>



      </form>


    </div>

  );
};


export default Home;