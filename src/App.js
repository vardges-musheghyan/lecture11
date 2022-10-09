import {useEffect, useReducer, useRef, useState} from 'react';
import './App.css';
import Card from "./components/card";
import Uploader from "./components/uploader";
import Header from "./components/header";
import { generateUUID } from "./components/utils/utils";
import {ACTIONS, imagesReducer} from "./components/reducer";


const initialState = {  images: [], allChecked: false  }


function App() {


    const [state, dispatch ] = useReducer(  imagesReducer,  initialState);

    const UploaderWrapperRef = useRef(null);



    useEffect( () => {
        UploaderWrapperRef.current.addEventListener('scroll', (e) => {
            const isBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;

        });
    }, [] )



    const handleCheck = (id) => {
        dispatch( { type: ACTIONS.SELECT_FILE, payload: { id } } )
    }

    const handleToggleSelectetAll = () => {
        dispatch({ type: ACTIONS.SELECT_ALL });
    }

    const handleUpload = (files) => {
        dispatch({ type: ACTIONS.ADD_FILE, payload: files })
    }

    const handleDeleteItems = () => {
        dispatch({ type: ACTIONS.REMOVE_FILE })
    }


  return (
      <>
          <div className="UploaderWrapper" >
              <Uploader addUploadedFiles={handleUpload}   />
          </div>

          <Header
              handleDelete={handleDeleteItems}
              allChecked={state.allChecked}
              handleToggle={handleToggleSelectetAll}
          />

          <div ref={UploaderWrapperRef} className="imagesContainer" >
              {state.images.map( i => {
                  return (
                      <div key={i.id} >
                          <Card
                              checked={i.checked}
                              src={i.src}
                              onCheckChange={ () => handleCheck(i.id) } />
                      </div>
                  )
              } )}
          </div>

      </>
  );
}

export default App;
