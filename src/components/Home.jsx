import React from 'react';
import './Home.css';
const Home = () => {
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
<form className='form'>



<input id ='companyName' name='CompanyName' type='text'  placeholder='Write Company Name' />



<input id ='PlacementMsg' name='PlacementMessage' type='textarea'  placeholder='Paste your message' />


<button id='btn'>Check Now</button>
 <p className='para'>Powered by:
✔ HashMap
✔ KMP String Matching
✔ Edit Distance</p>

</form>





    </div>
  )
}

export default Home
