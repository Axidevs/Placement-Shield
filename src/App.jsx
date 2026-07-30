
import { useState } from "react";

import Home from "./components/Home";
import Loading from "./components/Loading";
import Result from "./components/Result";


function App() {


  const [screen, setScreen] = useState("home");

  const [analysis, setAnalysis] = useState(null);



  return (

    <>


      {
        screen === "home" &&
        <Home
          setScreen={setScreen}
          setAnalysis={setAnalysis}
        />
      }



      {
        screen === "loading" &&
        <Loading />
      }



      {
        screen === "result" &&
        <Result
          analysis={analysis}
        />
      }



    </>

  );

}


export default App;