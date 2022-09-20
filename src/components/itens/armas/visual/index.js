import styled, { css } from 'styled-components';
import Base from '../../../../styles/tile';

import Blacksteel_Sword from '../img/espadas/Blacksteel_Sword.gif';
import Axe from '../img/machados/Axe.gif';
import Angelic_Axe from '../img/machados/Angelic_Axe.gif';

let itens;

axios.get('http://localhost:3333/armas')
.then(function (response) {
//   console.log(response.data);
  itens = response.data;
//   console.log(armasNames)
})
.catch(function (error) {
  console.log(error);
})

export const options = {
    blacksteel_Sword: css`
    background-image: url(${Blacksteel_Sword});
    background-repeat: no-repeat;
    `,
    axe: css`
    background-image: url(${Axe});
    background-repeat: no-repeat;
    `,
    axe: css`
    background-image: url(${Angelic_Axe});
    background-repeat: no-repeat;
    `,
    axe: css`
    background-image: url(${Angelic_Axe});
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