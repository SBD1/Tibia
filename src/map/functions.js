import React from 'react';
import fields from '../components/map/fields/**/*.js';
import tiles from '../components/map/tiles/**/*.js';
import terrain from '../components/map/terrain/**/*.js';
import monster from '../components/map/monster/**/*.js';
// import app from '../../backend/src/app';
import axios from 'axios';

const components = {
    fields,
    tiles,
    terrain,
    monster,
};

let equip4 = [];
let armas = [];
let armasNames = [];

export const prepareStack = (stack = [], { index, top, left, axis }) =>
    stack.map((item, currIndex) => {

            if(item == "fields:Poison") {
                // console.log("Show!!!!");
                axios.get('http://localhost:3333/item')
                .then(function (response) {
                //   console.log("Deu bom!")
                  console.log(response.data);
                //   console.log("equipamentos! 4")
                  equip4 = response.data;
                  armas = equip4.filter(e => {
                   return e.tipo == 'armas';
                  })
                  console.log(armas)

                })
                .catch(function (error) {
                  // handle error
                //   console.log("Deu erro");
                  console.log(error);
                })


                // ---------- armas name

                axios.get('http://localhost:3333/armas')
                .then(function (response) {
                  console.log(response.data);
                armasNames = response.data;
                  console.log(armasNames)
                })
                .catch(function (error) {
                  console.log(error);
                })
                
            }

            let [type, name] = (item || '').split(':');
            if (!type || !name) {
                return null;
            }
            const hasComponentSubType = name.includes('.');
            const componentNames = hasComponentSubType ? name.split('.') : [name];
            const componentSubType = hasComponentSubType ? name.split('.').pop() : null;
            
            name = hasComponentSubType ? componentNames[0] : name;

            const component = components[type][name] ? components[type][name].index : null;

            if (!component) {
                console.error(`WARNING: ${item} not found in axis ${axis}!`);
                return null;
            }
            
            const reactElement = React.createElement(component.default, {
                ...components[type].base.default,
                ...component.metadata,
                ...{
                    key: `tile-${index}-${currIndex}`,
                    zIndex: currIndex,
                    top,
                    left,
                    type: componentSubType,
                    'data-axis': axis,
                }
            });
            return reactElement;
        })
        .filter((item) => !!item);

export const shouldNotCompleteMove = (map = {}, { x, y }) => {
    return (
        typeof map[`${x}:${y}:0`] === 'undefined'
        || (
            map[`${x}:${y}:0`]
            && !map[`${x}:${y}:0`].some((stackItem) => stackItem.props.walkable === true)
            && map[`${x}:${y}:0`].some((stackItem) => !stackItem.props.border)
        )
    );
};

export const getFutureSqmInfo = (map = {}, { x, y }) => {
    const sqmEffects = map[`${x}:${y}:0`].filter((stackItem) => stackItem.props.effect);
    const effects = sqmEffects.length ? sqmEffects.map((item) => item.props.effect) : [];

    const sqmSlow = map[`${x}:${y}:0`].reduce((acc, curr) =>
        curr.props.slow > acc ? curr.props.slow : acc,
        0,
    );
    
    return {
        effects,
        slow: sqmSlow,
    };
};