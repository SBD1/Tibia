import styled, { keyframes, css } from 'styled-components';
import Base from '../../../../../styles/tile';

import sprite1 from './1253.png';
import sprite2 from './1254.png';
import sprite3 from './1255.png';
import sprite4 from './1256.png';
import sprite5 from './1257.png';
import sprite6 from './1258.png';

const animationKeyframes = keyframes`
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 0 -100%;
    }
`;

const animationRule = css`
    animation: ${animationKeyframes} 2s steps(12) infinite;
`;

export const options = {
    BeachBorder1: `
        background-image: url(${sprite1});
    `,
    BeachBorder2: `
        background-image: url(${sprite2});
    `,
    BeachBorder3: `
        background-image: url(${sprite3});
    `,
    BeachBorder4: `
        background-image: url(${sprite4});
    `,
    BeachBorder5: `
        background-image: url(${sprite5});
    `,
    BeachBorder6: `
        background-image: url(${sprite6});
    `
};

export default styled(Base)`
    ${({ tile }) => (
        tile
            ? options[tile]
            : options[Object.keys(options).shift()]
    )}
    ${animationRule}
`;