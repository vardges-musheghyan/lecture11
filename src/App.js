import logo from './logo.svg';
import './App.css';
import Card from "./components/card";
import Uploader from "./components/uploader";
import {useState} from "react";
import Header from "./components/header";

function App() {


    const [imageSrc, setImageSrc] = useState('');

    const changeImagEScr = (src) => {
        setImageSrc(src);
    }

  return (
      <>
          <div className="UploaderWrapper" >
              <Uploader changeImageSrc={changeImagEScr}  />
          </div>

          <Header  />
      <Card src={imageSrc} />
      </>
  );
}

export default App;
