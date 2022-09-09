import React from 'react';
import VisualElement, { options } from './visual';

const BeachBorder = (props = {}) => {
    const { type } = props;

    if (typeof options[type] === 'undefined') {
        console.error(`WARNING: BeachBorder with type ${type} not found!`);
        return null;
    }

    return <VisualElement {...props} className='sqm' />;
};

export const metadata = {
    walkable: true,
    slow: 0.15,
};

export default BeachBorder;