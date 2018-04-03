import tinycolor from 'tinycolor2';

const buttonTheme = (
  theme,
  bgColor,
  borderColor,
  fontColor,
  hoverBgColor,
  iconColor
) =>
  `
        background-color: ${bgColor};
        border-color: ${borderColor};
        color: ${fontColor};

        &:focus,
        &:hover {
            background-color: ${hoverBgColor};
        }
    
        &:focus {
            border-color: ${theme.ui02};
            outline-color: ${hoverBgColor};
        }
    
        &:disabled:hover,
        &:disabled:focus {
            background-color: ${bgColor};
        }
    
        &:active {
            background-color: ${tinycolor(bgColor).darken(20)};
        }
    
        .bx--btn__icon {
            fill: ${iconColor};
        }
    `;

const primaryStyling = ({ theme }) =>
  buttonTheme(
    theme,
    theme.brand01,
    'transparent',
    theme.inverse01,
    theme.brand02,
    theme.ui01
  );

const secondaryStyling = ({ theme }) => `
    ${buttonTheme(
      theme,
      'transparent',
      theme.brand01,
      theme.brand01,
      theme.brand01,
      theme.brand01
    )};
    &:hover,
    &:focus {
        color: ${theme.inverse01};
    }

    &:active {
        color: ${theme.brand01};
    }

    &:hover > .bx--btn__icon,
    &:focus > .bx--btn__icon {
        fill: ${theme.inverse01};
    }

    &:hover:disabled,
    &:focus:disabled {
        color: ${theme.brand01};
    }
`;

const ghostStyling = ({ theme }) => `
    ${buttonTheme(
      theme,
      'transparent',
      'transparent',
      theme.brand01,
      theme.brand01,
      theme.brand01
    )}

    &:hover,
    &:focus {
        color: ${theme.inverse01};

        .bx--btn__icon {
            fill: ${theme.inverse01};
        }
    }

    &:hover:disabled,
    &:focus:disabled {
        color: ${theme.brand01};

        .bx--btn__icon {
            fill: ${theme.brand01};
        }
    }
`;

const danderStyling = ({ theme }) => `
    ${buttonTheme(
      theme,
      'transparent',
      theme.support01,
      theme.support01,
      theme.support01,
      theme.support01
    )}
        
    &:hover {
        color: ${theme.inverse01};
    }

    &:focus {
        color: ${theme.inverse01};
    }

    &:hover:disabled,
    &:focus:disabled {
        color: ${theme.ui05};
    }

    &:hover > .bx--btn__icon,
    &:focus > .bx--btn__icon {
        fill: ${theme.inverse01};
    }
`;

export default props => `
    .bx--btn--primary {
        ${primaryStyling(props)}
    }

    .bx--btn--secondary {
        ${secondaryStyling(props)}
    }

    .bx--btn--ghost {
        ${ghostStyling(props)}
    }

    .bx--btn--danger {
        ${danderStyling(props)}
    }
`;
