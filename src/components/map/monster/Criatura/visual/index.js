import styled, { css } from 'styled-components';
import Base from '../../../../../styles/tile';
import img from '../img/sapo.gif';
import galinha from '../img/chicken.gif';
import snake from '../img/Snakee.gif';
import croc from '../img/The_Snapper.gif';
import cobra from '../img/cobra.gif';
import Acid_Blob from '../img/Acid_Blob.gif';
import Death_Blob from '../img/Death_Blob.gif';
import Slime from '../img/Slime.gif';
import Ancient_Scarab from '../img/Ancient_Scarab.gif';
import Brimstone_Bug from '../img/Brimstone_Bug.gif';
import Butterfly_Azul from '../img/Butterfly_Azul.gif';
import Exotic_Cave_Spider from '../img/Exotic_Cave_Spider.gif';

export const options = {
    sapo: css`
    background-image: url(${img});
    background-repeat: no-repeat;
    `,
    galinha: css`
    background-image: url(${galinha});
    background-repeat: no-repeat;
    `,
    snake: css`
    background-image: url(${snake});
    background-repeat: no-repeat;
    `,
    croc: css`
    background-image: url(${croc});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    cobra: css`
    background-image: url(${cobra});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Acid_Blob: css`
    background-image: url(${Acid_Blob});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Death_Blob: css`
    background-image: url(${Death_Blob});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Slime: css`
    background-image: url(${Slime});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Ancient_Scarab: css`
    background-image: url(${Ancient_Scarab});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Brimstone_Bug: css`
    background-image: url(${Brimstone_Bug});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Butterfly_Azul: css`
    background-image: url(${Butterfly_Azul});
    background-size: contain;
    background-repeat: no-repeat;
    `,
    Exotic_Cave_Spider: css`
    background-image: url(${Exotic_Cave_Spider});
    background-size: contain;
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