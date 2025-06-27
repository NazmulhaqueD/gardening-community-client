import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const Theme = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div>
            <button onClick={() => setIsDark(!isDark)} className='mr-6 p-1 cursor-pointer rounded-full border-2 border-e-teal-400'>
                {isDark ? <MdOutlineDarkMode size={35} />
                    : <MdDarkMode size={35} />}
            </button>
        </div>
    );
};

export default Theme;