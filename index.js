import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import parsedMap from './src/map';
import Player from './src/components/alive/Player';
import { toggleDebugMode } from './src/store/actions/developer';
import { store, StateProvider } from './src/store';
import ScreenMessage from './src/components/hud/ScreenMessage';
import background from './src/components/itens/armas/img/espadas/Inventory.png';

import './src/scss/index.scss';

const App = () => {
    const {
        map = [],
        tileWidth,
        tileHeight,
        mapInfo: {
            maxX,
            maxY,
        },
    } = React.useMemo(() => parsedMap, []);
    
    const { state: globalState, dispatch } = React.useContext(store);
    const {
        developer: {
            debugMode
        },
    } = globalState;

    React.useEffect(() => {
        window.addEventListener('developer:debugMode', () => {
            dispatch(toggleDebugMode());
        });
    }, []);

    return (<div className={`game ${debugMode ? 'debugMode' : ''}`} style={{ width: maxX * tileWidth, height: maxY * tileHeight }}>
            <div style={{ backgroundImage: `url(${background})`, height: '50px', width: '30vh', right: 0,  }}></div>
        <ScreenMessage />
        <React.Fragment>
            <Player />
            {
                Object.values(map)
            }
        </React.Fragment>
    </div>);
};

window.utils = {};
window.utils.toggleDebugMode = () => {
    window.dispatchEvent(new Event('developer:debugMode'));
};

ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>
, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
