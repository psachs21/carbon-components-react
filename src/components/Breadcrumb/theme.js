const itemStyling = ({ theme }) => `
    &::after {
        color: ${theme.text03};
    }
`;

const linkStyling = ({ theme }) => `
    .bx--link {
        &:hover,
        &:focus {
            color: ${theme.brand01};
            border-bottom-color: ${theme.brand01};
        }
    }
`;

export default props => `
    .bx--breadcrumb {
        ${linkStyling(props)};
        .bx--breadcrumb-item {
            ${itemStyling(props)};
        }
    }
`;
