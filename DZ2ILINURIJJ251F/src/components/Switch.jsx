import React, { useState } from 'react';


function Switch() {
    const [button1 , setButton1] = useState('red')
    const [button2 , setButton2] = useState('blue')

    const toggleColor=(numberofswitch)=>{
        if(numberofswitch===1){
            setButton1(button1 === "red" ? "blue" : "red")
            setButton2(button2 === "blue" ? "red" : "blue")
        }else if(numberofswitch===2){
            setButton1(button1  === "blue" ? "red" : "blue")
            setButton2(button2 === "red" ? "blue" : "red")
        }
    }

    return (
        <div>
            <button className='block1' style={{background:button1, width:"200px" , height:"200px"}}
            onClick={()=>{toggleColor(1)}}
            ></button>
            <button className='block2' style={{background:button2, width:"200px" , height:"200px"}} 
            onClick={()=>{toggleColor(2)}}
            ></button>
        </div>
    );
}

export default Switch;