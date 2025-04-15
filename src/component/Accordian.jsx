// single selection accordiam

import React, { useState } from 'react';
import data from './data';
import './style.css';


const Accordian = () => {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return (
        <div className='wrapper' >
            <div className="accordian">
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className="item">
                            <div onClick={() => handleSingleSelection(dataItem.id)}>
                                <div className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id ?
                                        <div className='content'>
                                            {dataItem.answer}
                                        </div>
                                        : null
                                }

                            </div>
                        </div>

                        )
                        : <div> No data found </div>
                }
            </div>
        </div>
    );
};

export default Accordian;