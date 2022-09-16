import React from 'react';
import { getRandomTile } from '../base';
import VisualElement, { options } from './visual';

const Basalt = (props = {}) => {
    const randomTile = getRandomTile('Basalt', options);
    return <VisualElement {...props} tile={randomTile} className='sqm' />;
};

export const metadata = {
    walkable: true,
};

export default Basalt;