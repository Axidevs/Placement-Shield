import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div id ='home'>
      
<h1 id='h1'>

Placement-Shield

</h1>

<form className='form'>

<h2>Write Company Name </h2>

<input id ='companyName' name='CompanyName' type='text'  placeholder='Write Company Name' />

<h2>Paste Placement Message</h2>

<input id ='PlcementMsg' name='PlacementMessage' type='textarea'  placeholder='Paste your message' />


<button id='btn'>Analyze Message</button>

</form>





    </div>
  )
}

export default Home
