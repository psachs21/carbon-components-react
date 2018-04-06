import { focusOutline } from '../../tools/styleUtils';

const trigger = ({ theme }) => `
    color: ${theme.text01};
    svg {
        fill: ${theme.brand01};
        &:focus {
            ${focusOutline('border')}
            fill: ${theme.brand02};
        }
    }
    &:hover,
    &:focus {
        svg {
            fill: ${theme.brand02};
        }
    }
`;

const tooltip = ({ theme }) => `
    background: ${theme.ui01};
    border-color: ${theme.ui04};

    &:before {
        background: ${theme.ui01};
        border-right-color: 1px solid ${theme.ui04};
        border-bottom-color: ${theme.ui04};
    }
`;

const tooltipSimple = ({ theme }) => `
    &.bx--tooltip--simple__top,
    &.bx--tooltip--simple__bottom {
        svg {
            fill: ${theme.brand01};
        }
        &:before,
        &:after {
            background: ${theme.ui01};
        }

        &:before {
            border-color: 1px solid ${theme.ui04};
            color: ${theme.text01};
        }

        &:after {
            border-right-color: ${theme.ui04};
            border-bottom-color: ${theme.ui04};
        }

        &:hover,
        &:focus {
            svg {
                fill: ${theme.brand02};
            }
        }

        &:focus svg {
            ${focusOutline('border')}
        }
    }
`;

export default props => `
    .bx--tooltip {
        ${tooltip(props)}
    }

    .bx--tooltip--simple {
        ${tooltipSimple(props)}
    }

    .bx--tooltip__trigger {
        ${trigger(props)}
    }
`;
