import "./Result.css";


function Result({analysis}){


return(

<div className="resultBox">


<h1>
Analysis Result
</h1>



<h2
style={{
color: analysis.color
}}
>
{analysis.level}
</h2>



<p>
Risk Score : {analysis.score}
</p>



<progress
value={analysis.score}
max="100"
/>




<p>
Company Status :

<strong>

{
analysis.companyFound
?
" Trusted Company"
:
" Unknown Company"
}

</strong>

</p>




<h3>
Matched Keywords
</h3>


<ul>

{
analysis.keywordMatches.map((word)=>(

<li key={word}>
{word}
</li>

))

}

</ul>




<h3>
Matched Scam Phrases
</h3>


<ul>

{
analysis.matchedPhrases.map((phrase)=>(

<li key={phrase}>
{phrase}
</li>

))

}

</ul>




<p>
{analysis.recommendation}
</p>



</div>


)


}


export default Result;