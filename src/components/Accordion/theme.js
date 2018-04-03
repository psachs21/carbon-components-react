import { focusOutline } from '../../tools/styleUtils';

const itemStyling = ({ theme }) => `
    border-top-color: ${theme.ui04};
    ${focusOutline('border')};
    &:last-child {
        border-bottom-color: ${theme.ui04};
    }
`;

const headingStyling = ({ theme }) => `
    color: ${theme.text01};
    &:focus {
        outline: none;
  
        .bx--accordion__arrow {
            ${focusOutline('border')};
        }
    }
`;

const arrowStyling = ({ theme }) => `
    fill: ${theme.ui05};
`;

const itemActiveStyling = ({ theme }) => `
    .bx--accordion__arrow {
        fill: ${theme.brand01};
    }
`;

export default props => `
    .bx--accordion__item {
        ${itemStyling(props)};
    }
    .bx--accordion__heading {
        ${headingStyling(props)};
    }
    .bx--accordion__arrow {
        ${arrowStyling(props)};
    }
    .bx--accordion__item--active{
        ${itemActiveStyling(props)};
    }
`;
