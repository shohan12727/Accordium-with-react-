import React, { useState } from 'react';
import data from './data_2';

const Accordion = () => {

    const [select, setSelect] = useState(null);


    function handleSingleSelection (index) {
        setSelect (select === index ?
            null : index
        );

    }


    return (

        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length ?
                        data.map((dataItem, index) => <div className='item' key={index}>
                            <div onClick={ () => handleSingleSelection(dataItem.id)}>
                            <div className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            <div>
                                {
                                    select === dataItem.id ?
                                        <div>{dataItem.answer}</div>

                                        : null
                                }
                            </div>
                            </div>

                        </div>)

                        : <div>Data not found</div>
                }


            </div>

        </div>
    );
};

export default Accordion;