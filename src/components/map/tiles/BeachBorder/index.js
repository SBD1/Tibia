import React from 'react';
import { getRandomTile } from '../base';
import VisualElement, { options } from './visual';

const BeachBorder = (props = {}) => {
    const randomTile = getRandomTile('BeachBorder', options);
    return <VisualElement {...props} tile={randomTile} className='sqm' />;
};

export const metadata = {
    walkable: false,
};

export default BeachBorder;