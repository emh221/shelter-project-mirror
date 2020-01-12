import React from 'react';
import './GoButton.css';
import { useHistory } from "react-router-dom";


function GoButton(props) {
  
    let history = useHistory();
    
    async function handleClick() {
      await props.goBehavior();
      //Probably not the best way to check for valid states
        if(props.isPageDataValid()){
          let data = "balls";
          await props.changeAPIData(data);
          history.push("/info");
        }
    }
  
    return (
      <button type="button" onClick={handleClick}>
        Go
      </button>
    )
}
export default GoButton

