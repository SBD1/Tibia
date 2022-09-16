import styled, { keyframes, css } from 'styled-components';
import Base from '../../../../../styles/tile';

import basalt_floor from './Basalt_Floor.gif';

export const options = {
    basalt: css`
    background-image: url(${basalt_floor});
    `,
   
};

export default styled(Base)`
    ${({ type }) => (
        type
            ? options[type]
            : options[Object.keys(options).shift()]
    )}
`;