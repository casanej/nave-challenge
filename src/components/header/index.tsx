import React, { useEffect } from 'react'

interface Props { }

const Header = (props: Props) => {
    useEffect(() => {
        console.log('[Header] Started with success');
    }, []);
    return (
        <div>Header</div>
    );
};

export { Header };
