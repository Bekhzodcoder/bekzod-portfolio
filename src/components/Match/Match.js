import React from 'react';
import './Match.css'
import { BiSad } from "react-icons/bi";

const Match = () => {
    return (
        <>
           <div className='match'>
                <div className='match_content'>
                    <BiSad />
                    <h3>Bu sahifa mavjud emas</h3>
                </div>
           </div>
        </>
    );
};

export default Match;