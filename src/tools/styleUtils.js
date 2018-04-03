// Generally based on mixins from carbon-components

export const focusOutline = (type = 'border') => ({ theme }) => `
    ${type === 'border' ? `outline-color: ${theme.brand01}` : ''}
`;
