import React from 'react';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const tips = useLoaderData();
    console.log(tips);
    return (
        <div>
            details
        </div>
    );
};

export default TipDetails;