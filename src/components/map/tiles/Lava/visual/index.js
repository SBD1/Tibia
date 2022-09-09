import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';
import img from './sprite.png';

export const options = {
    Lava1: css`
        background-position: 0 0;
    `,
    Lava2: css`
        background-position: 0 -32px;
    `,
    Lava3: css`
        background-position: 0 -64px;
    `,
    Lava4: css`
        background-position: -32px 0;
    `,
    Lava5: css`
        background-position: -64px 0;
    `,
    Lava6: css`
        background-position: -32px -32px;
    `,
    Lava7: css`
        background-position: -32px -64px;
    `,
    Lava8: css`
        background-position: -64px -32px;
    `,
    Lava9: css`
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