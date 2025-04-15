// single selection accordiam

import React, { useState } from 'react';
import data from './data';

const Accordian = () => {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);

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