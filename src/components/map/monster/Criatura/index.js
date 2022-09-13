import React from 'react';
import VisualElement from './visual';

const Criatura = (props = {}) => {
    const myProps = {
        ...props,
        walkable: false,
    }
    return <VisualElement { ...myProps } />;
};

export default Criatura;