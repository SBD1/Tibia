import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';
import img from '../img/sapo.gif';
import galinha from '../img/chicken.gif';
import snake from '../img/Snakee.gif';
import croc from '../img/The_Snapper.gif';
import cobra from '../img/cobra.gif';


export const options = {
    sapo: css`
        background-image: url(${img});
    `,
    galinha: css`
    background-image: url(${galinha});
    `,
    snake: css`
    background-image: url(${snake});
    `,
    croc: css`
    background-image: url(${croc});
    background-size: contain;
    `,
    cobra: css`
    background-image: url(${cobra});
    background-size: contain;
    `
};

export default styled(Base)`
    ${({ type }) => (
        type
            ? options[type]
            : options[Object.keys(options).shift()]
    )}
`;