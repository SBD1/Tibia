import React from 'react';
import VisualElement, { options } from './visual';

const WallBorder = (props = {}) => {
    const { type } = props;

    if (typeof options[type] === 'undefined') {
        console.error(`WARNING: WallBorder with type ${type} not found!`);
        return null;
    }

    return <VisualElement {...props} className='sqm' />;
};

export const metadata = {
    walkable: false,
};

export default WallBorder;