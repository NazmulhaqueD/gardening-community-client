import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Accordion = () => {

    const [accordions, setAccordions] = useState([]);
    console.log(accordions)
    useEffect(() => {
        fetch('https://gardening-server-six.vercel.app/accordions')
            .then(res => res.json())
            .then(data => setAccordions(data));
    }, [])
    return (
        <div className='my-8'>
            <h1 className='text-2xl text-green-500 md:text-4xl text-center font-bold p-4 md:p-8'>Frequently Asked Questions</h1>
            {
                accordions.map((accordion, index) => <div key={accordion._id} className="collapse bg-base-100 border border-base-300 py-4 md:p6">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title text-xl md:text-2xl font-semibold">{index + 1}. {accordion.question}</div>
                    <div className="collapse-content text-sm md:text-xl">{accordion.answer}</div>
                </div>)
            }

        </div>
    );
};

export default Accordion;