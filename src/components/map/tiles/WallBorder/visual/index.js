import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';

import tetoCavernaDireita from './img1.png';
import tetoCaverna from './img2.png';
import tetoCavernaCimaEsquerda from './img3.png';
import tetoCavernaEsquerda from './img4.png';
import tetoCavernaCimaBaixo from './img5.png';
import tetoCavernaCimaBaixo2 from './img6.png';
import tetoCavernaEsquerda2 from './img7.png';

export const options = {
    /* -- edges -- */
    tetoCavernaDireita: css`
        background-image: url(${tetoCavernaDireita});
    `,
    tetoCaverna: css`
    background-image: url(${tetoCaverna});
    `,
    tetoCavernaCimaEsquerda: css`
    background-image: url(${tetoCavernaCimaEsquerda});
    `,
    tetoCavernaEsquerda: css`
    background-image: url(${tetoCavernaEsquerda});
    `,
    tetoCavernaEsquerda2: css`
    background-image: url(${tetoCavernaEsquerda2});
    `,
    tetoCavernaCimaBaixo: css`
    background-image: url(${tetoCavernaCimaBaixo});
    `,
    tetoCavernaCimaBaixo2: css`
    background-image: url(${tetoCavernaCimaBaixo2});
    `,
};

export default styled(Base)`
    ${({ type }) => (
        type
            ? options[type]
            : options[Object.keys(options).shift()]
    )}
`;