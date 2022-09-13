import React from 'react';
import { getRandomTile } from '../base';
import VisualElement, { options } from './visual';

const Ice = (props = {}) => {
    const randomTile = getRandomTile('Ice', options);
    return <VisualElement {...props} tile={randomTile} className='sqm' />;
};

export const metadata = {
    slow: 0.5,
};

export default Ice;