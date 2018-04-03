import { focusOutline } from '../../tools/styleUtils';

const cardStyling = ({ theme }) => `
    background-color: ${theme.ui01};
    border-color: ${theme.ui04};

    &:focus {
        ${focusOutline('border')};
    }
`;

const footerStyling = ({ theme }) => `
    background-color: ${theme.ui03};

    &.bx--card-footer__app-status--running::before {
        background-color: ${theme.support02};
    }

    &.bx--card-footer__app-status--not-running::before {
        background-color: ${theme.support01};
    }
`;

const aboutAdditionalInfo = ({ theme }) => `
    color: ${theme.text02};
`;

const aboutIcon = ({ theme }) => `
    background-color: ${theme.ui01};
    border-color: ${theme.ui04};
`;

const actionsButton = ({ theme }) => `
    &:hover,
    &:focus {
        .bx--app-actions__button--icon {
            fill: ${theme.brand01};
        }
    }

    &:focus {
        ${focusOutline('border')};
    }
`;

const actionsButtonIcon = ({ theme }) => `
    fill: ${theme.ui05};
`;

export default props => `
    .bx--card {
        ${cardStyling(props)};

        .bx--card-footer {
            ${footerStyling(props)};
        }
    
        .bx--card-footer__link {
            ${focusOutline('border')};
        }
    
        .bx--about__title--additional-info {
            ${aboutAdditionalInfo(props)};
        }

        .bx--about__icon {
            ${aboutIcon(props)};
        }

        .bx--app-actions__button {
            ${actionsButton(props)};
        }

        .bx--app-actions__button--icon {
            ${actionsButtonIcon(props)};
        }
    }
`;
