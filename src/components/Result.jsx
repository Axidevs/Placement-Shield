import "./Result.css";


function Result({analysis}) {


return (

<div className="result-page">


<div className="result-header">

<h1>
🛡️ Placement Shield Report
</h1>

<p>
DSA powered recruitment scam detection
</p>

</div>



<div className="result-grid">


<div className="result-card risk-card">

<h2>
Risk Score
</h2>


<div className="score">

{analysis.score}%

</div>


<h2
style={{
color:analysis.color
}}
>

{analysis.level}

</h2>


</div>




<div className="result-card">


<h2>
Company Status
</h2>


<p className="status">

{
analysis.companyFound
?
"✅ Trusted Company"
:
"⚠️ Unknown Company"
}

</p>



<h2>
Recommendation
</h2>


<p>

{analysis.recommendation}

</p>


</div>



</div>





<div className="algorithm-section">


<div className="algorithm-card">

<h2>
⚡ HashMap
</h2>

<p>
Keyword Detection
</p>


<p>
Matches:
{analysis.keywordMatches.length}
</p>


</div>




<div className="algorithm-card">

<h2>
🧠 KMP
</h2>

<p>
Phrase Matching
</p>


<p>
Matches:
{analysis.matchedPhrases.length}
</p>


</div>


<div className="algorithm-card">

<h2>
📊 Edit Distance
</h2>


<p>
Similarity Checking
</p>


</div>



</div>





<div className="threat-card">


<h2>
🚨 Detected Threats
</h2>


{
analysis.keywordMatches.map((item)=>(

<p key={item}>
⚠️ {item}
</p>

))
}



{
analysis.matchedPhrases.map((item)=>(

<p key={item}>
🚨 {item}
</p>

))

}



</div>



</div>


)

}


export default Result;