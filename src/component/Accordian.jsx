import React, {useState} from 'react';

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    c
    

    function handleSingleSelection (getCurrentId) {
        setSelected (getCurrentId === selected ? null : getCurrentId);
    }

   




    return (
        <div>



            
        </div>
    );
};

export default Accordian;