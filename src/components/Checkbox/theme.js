import { focusOutline } from '../../tools/styleUtils';

export default ({ theme }) => `
    .bx--checkbox-label .bx--checkbox-appearance {
        background-color: ${theme.brand01};
        border-color: ${theme.brand01};
    }

    .bx--checkbox:focus + .bx--checkbox-label .bx--checkbox-appearance,
    .bx--checkbox:focus + .bx--checkbox-appearance {
        ${focusOutline('blurred')};
    }

    .bx--checkbox-checkmark {
        fill: ${theme.inverse01};
    }

    .bx--checkbox:checked + .bx--checkbox-label .bx--checkbox-appearance .bx--checkbox-checkmark {
        display: block;
    
        @-moz-document url-prefix() {
            & {
                stroke: ${theme.brand01};
            }
        }
    }
`;
