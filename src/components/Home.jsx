import React, { useState } from 'react';
import './Home.css';
import analyseMessage from "../dsa/Analyser";
const Home = () => {


  const [companyName, setCompanyName] = useState("");
const [message, setMessage] = useState("");
const [result, setResult] = useState(null);
const handleCheck = (e) => {
  e.preventDefault();

  if (!companyName.trim() || !message.trim()) {
    alert("Please enter company name and message.");
    return;
  }

  const analysis = analyseMessage(companyName, message);

  setResult(analysis);
};




  return (
    <div id ='home'>
      
<p className="badge">
🤖 Scam Detector
</p>

<h1 id="h1">
Is This Offer Real?
</h1>

<h2 id="h2">

Detect fake HR messages, suspicious links, unrealistic salaries and scam patterns before you apply.
</h2>
<form
  className="form"
  onSubmit={handleCheck}
>



{/* <input id ='companyName' name='CompanyName' type='text'  placeholder='Write Company Name' /> */}
<input
id="companyName"
type="text"
placeholder="Write Company Name"
value={companyName}
onChange={(e) => setCompanyName(e.target.value)}
/>


{/* <input id ='PlacementMsg' name='PlacementMessage' type='textarea'  placeholder='Paste your message' /> */}
<textarea
id="PlacementMsg"
placeholder="Paste your message....."
value={message}
onChange={(e) => setMessage(e.target.value)}
></textarea>



<button
  id="btn"
  type="submit"
>
  Check Now
</button>
 {/* <p className='para'>Powered by:
✔ HashMap
✔ KMP String Matching
✔ Edit Distance</p> */}

</form>


{result && (
  <div className="resultBox">
 <h2
style={{
color: result.color
}}
>
{result.level}
</h2>

    <p>Score : {result.score}</p>
<progress
  value={result.score}
  max="100"
></progress>
    <p>
  Company Status:
  <strong>
    {result.companyFound ? " Trusted Company" : " Unknown Company"}
  </strong>
</p>

    <h3>Matched Keywords</h3>

    <ul>
      {result.keywordMatches.map((word) => (
        <li key={word}>{word}</li>
      ))}
    </ul>

    <h3>Matched Scam Phrases</h3>

    <ul>
      {result.matchedPhrases.map((phrase) => (
        <li key={phrase}>{phrase}</li>
      ))}
    </ul>

    <p>{result.recommendation}</p>
  </div>
)}


    </div>
  )
}

export default Home
