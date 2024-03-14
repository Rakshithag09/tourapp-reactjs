import React, { useState } from 'react';
import data from '../database/data';
import Cardcontainer from './Cardcontainer';
function Home() {
    const [selectedState,setSelectedState] = useState('');
    const uniqueStates =[
        "Uttar Pradesh",
        "Rajasthan",
        "Goa",
        "West Bengal",
        "Kerala",
        "Maharashtra",
        "Himachal Pradesh",
        "Bihar",
        "Jharkhand"
    ];
    const filterhandler = (stateName) =>{
        setSelectedState(stateName);
        console.log(selectedState);
    };

    const filterData = selectedState ?
    data.filter((item)=>item.state === selectedState) :data;
    
    return(
        <>
        <div className="filter-option">
            <select onChange={(e) =>filterhandler(e.target.value)}
                className={selectedState ? "active-select" : "inactive-select"}>
                <option>show all states</option>
                {uniqueStates.map((item)=>(
                        <option key={item} value={item}>
                            {item}
                        </option>
                    
                    ))
                    }
            </select>
        </div>
        <Cardcontainer data={filterData} />
        </>

    );
}
export default Home;