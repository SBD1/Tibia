import React from 'react';
import { getRandomTile } from '../base';
import VisualElement, { options } from './visual';

const Lava = (props = {}) => {
    const randomTile = getRandomTile('Lava', options);
    return <VisualElement {...props} tile={randomTile} className='sqm' />;
};

export default Lava;