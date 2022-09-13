import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';
import img from './sprite.png';

export const options = {
    Ice1: css`
        background-position: 0 0;
    `,
    Ice2: css`
        background-position: 0 -32px;
    `,
    Ice3: css`
        background-position: 0 -64px;
    `,
    Ice4: css`
        background-position: -32px 0;
    `,
    Ice5: css`
        background-position: -64px 0;
    `,
    Ice6: css`
        background-position: -32px -32px;
    `,
    Ice7: css`
        background-position: -32px -64px;
    `,
    Ice8: css`
        background-position: -64px -32px;
    `,
    Ice9: css`
        background-position: -64px -64px;
    `,
};

export default styled(Base)`
    background-image: url(${img});
    ${({ tile }) => (
        tile
            ? options[tile]
            : options[Object.keys(options).shift()]
    )}
`;