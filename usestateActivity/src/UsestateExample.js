import React, { useState } from 'react';

const UsestateExample = () => {
   //console.log(useState("happy christmas"))
   const [text, setText] = useState('paradox')
   const handleClick = () => {
    //setText("Merry Christmas")
    if (text === 'paradox'){
        setText('Merry Christmas')
    }else{
        setText('paradox')
    }
   }
   return (
    <div>
         <h2> {text} </h2>
         <button type="button" className="btn" onClick={handleClick}> Change </button>
    </div>
   )
}

export default UsestateExample