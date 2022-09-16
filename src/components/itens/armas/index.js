import React from 'react';
import VisualElement from './visual';

const Itens = (props = {}) => {
    const myProps = {
        ...props,
    }
    return <VisualElement { ...myProps } />;
};

export const metadata = {
    walkable: false,
};

export default Itens;