import "./Loading.css";


function Loading(){

return(

<div className="loading-page">


<div className="scanner-circle">

🛡️

</div>


<h1>
Scanning Offer...
</h1>


<div className="loading-steps">


<p>
✅ Reading recruitment message
</p>


<p>
🔍 Detecting suspicious keywords
</p>


<p>
⚡ Running HashMap analysis
</p>


<p>
🧠 Running KMP pattern matching
</p>


<p>
📊 Generating risk score
</p>


</div>


</div>

)

}


export default Loading;