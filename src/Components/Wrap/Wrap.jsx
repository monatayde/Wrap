import React from "react";
import "./Wrap.css";
import data from "./books";
import { useState } from "react";

function Wrap(){

    const [seleted, setSelected] = useState(null);
    const [multiSelector, setmultiSelector] = useState(false);
    const [multi, setMulti] = useState([]);

    function handleSelect(currentid){
        setSelected(currentid === seleted ? null : currentid);
    }

    function handleMultiSelector(currentid){
        let allMultiple = [...multi];
        const indexofCurrentid = allMultiple.indexOf(currentid);
        console.log(indexofCurrentid);
        if (indexofCurrentid === -1) allMultiple.push(currentid)
        else allMultiple.splice(indexofCurrentid, 1)
        
        setMulti(allMultiple );
    }

    console.log(seleted, multi);

    return (
        <div className="wrap">
            <button onClick={()=>setmultiSelector( !multiSelector)}>Enable Multi Selector</button>
            <div className="book">
                { 
                    data && data.length > 0 ? 
                        data.map((dataitem)=> (
                            <div className="bookinfo">
                                <div className="title" onClick={
                                    multiSelector 
                                    ? ()=>{handleMultiSelector(dataitem.id)} 
                                    : ()=> handleSelect(dataitem.id)}>
                                    <h3> {dataitem.title}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    seleted === dataitem.id || multi.indexOf(dataitem.id) !== -1 ? (
                                        <div className="content">
                                            {dataitem.content}
                                        </div>
                                    ) : null
                                }
                            </div>
                        ))            
                    : (
                        <div>
                            <h2>No data available</h2>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Wrap;