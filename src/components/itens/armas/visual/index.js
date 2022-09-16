import styled, { css } from 'styled-components';
import Base from '../../../../styles/tile';

import Blacksteel_Sword from '../img/espadas/Blacksteel_Sword.gif';


export const options = {
    blacksteel_Sword: css`
    background-image: url(${Blacksteel_Sword});
    background-repeat: no-repeat;
    `
};

export default styled(Base)`
    ${({ type }) => (
        type
            ? options[type]
            : options[Object.keys(options).shift()]
    )}
`;