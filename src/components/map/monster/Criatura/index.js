import React from 'react';
import VisualElement from './visual';

const Criatura = (props = {}) => {
    const myProps = {
        ...props,
    }
    return <VisualElement { ...myProps } />;
};

export const metadata = {
    walkable: false,
};

export default Criatura;