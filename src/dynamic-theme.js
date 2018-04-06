import { css } from 'emotion';
import color from 'tinycolor2';

export default ({ theme }) => css`
  .bx--body {
    color: ${theme.color.text01};
    background-color: ${theme.color.ui02};
  }

  body {
    color: ${theme.color.text01};
    background-color: ${theme.color.ui02};
  }

  a {
    color: ${theme.color.brand01};
  }

  .bx--btn--primary {
    background-color: ${theme.color.brand01};

    color: ${theme.color.inverse01};
  }

  .bx--btn--primary:focus,
  .bx--btn--primary:hover {
    background-color: ${theme.color.brand02};
  }

  .bx--btn--primary:focus {
    border-color: ${theme.color.ui02};
    outline-color: ${theme.color.brand02};
  }

  .bx--btn--primary:disabled:hover,
  .bx--btn--primary:disabled:focus {
    background-color: ${theme.color.brand01};
  }

  .bx--btn--primary:active {
    background-color: ${color(theme.color.brand01).darken(20)};
  }

  .bx--btn--primary .bx--btn__icon {
    fill: ${theme.color.ui01};
  }

  .bx--btn--secondary {
    border-color: ${theme.color.brand01};
    color: ${theme.color.brand01};
  }

  .bx--btn--secondary:focus,
  .bx--btn--secondary:hover {
    background-color: ${theme.color.brand01};
  }

  .bx--btn--secondary:focus {
    border-color: ${theme.color.ui02};
    outline-color: ${theme.color.brand01};
  }

  .bx--btn--secondary .bx--btn__icon {
    fill: ${theme.color.brand01};
  }

  .bx--btn--secondary:hover,
  .bx--btn--secondary:focus {
    color: ${theme.color.inverse01};
  }

  .bx--btn--secondary:active {
    color: ${theme.color.brand01};
  }

  .bx--btn--secondary:hover > .bx--btn__icon,
  .bx--btn--secondary:focus > .bx--btn__icon {
    fill: ${theme.color.inverse01};
  }

  .bx--btn--secondary:hover:disabled,
  .bx--btn--secondary:focus:disabled {
    color: ${theme.color.brand01};
  }

  .bx--btn--ghost {
    color: ${theme.color.brand01};
  }

  .bx--btn--ghost:focus,
  .bx--btn--ghost:hover {
    background-color: ${theme.color.brand01};
  }

  .bx--btn--ghost:focus {
    border-color: ${theme.color.ui02};
    outline-color: ${theme.color.brand01};
  }

  .bx--btn--ghost .bx--btn__icon {
    fill: ${theme.color.brand01};
  }

  .bx--btn--ghost:hover,
  .bx--btn--ghost:focus {
    color: ${theme.color.inverse01};
  }

  .bx--btn--ghost:hover .bx--btn__icon,
  .bx--btn--ghost:focus .bx--btn__icon {
    fill: ${theme.color.inverse01};
  }

  .bx--btn--ghost:hover:disabled,
  .bx--btn--ghost:focus:disabled {
    color: ${theme.color.brand01};
  }

  .bx--btn--ghost:hover:disabled .bx--btn__icon,
  .bx--btn--ghost:focus:disabled .bx--btn__icon {
    fill: ${theme.color.brand01};
  }

  .bx--btn--danger {
    border-color: ${theme.color.support01};
    color: ${theme.color.support01};
  }

  .bx--btn--danger:focus,
  .bx--btn--danger:hover {
    background-color: ${theme.color.support01};
  }

  .bx--btn--danger:focus {
    border-color: ${theme.color.ui02};
    outline-color: ${theme.color.support01};
  }

  .bx--btn--danger .bx--btn__icon {
    fill: ${theme.color.support01};
  }

  .bx--btn--danger:hover {
    color: ${theme.color.inverse01};
  }

  .bx--btn--danger:focus {
    color: ${theme.color.inverse01};
  }

  .bx--btn--danger:hover:disabled,
  .bx--btn--danger:focus:disabled {
    color: ${theme.color.ui05};
  }

  .bx--btn--danger:hover > .bx--btn__icon,
  .bx--btn--danger:focus > .bx--btn__icon {
    fill: ${theme.color.inverse01};
  }

  .bx--btn--copy__feedback:before {
    border-color: ${theme.color.ui04};
    color: ${theme.color.text01};
  }

  .bx--btn--copy__feedback:after {
    border-right-color: ${theme.color.ui04};
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--btn--copy__feedback:before,
  .bx--btn--copy__feedback:after {
    background: ${theme.color.ui01};
  }

  input[data-invalid],
  textarea[data-invalid],
  select[data-invalid] {
    box-shadow: 0 2px 0px 0px ${theme.color.support01};
  }

  .bx--form-requirement::before {
    color: ${theme.color.support01};
  }

  .bx--loading__svg {
    stroke: ${theme.color.brand03};
  }

  .bx--loading--small .bx--loading__svg {
    stroke: ${theme.color.ui05};
  }

  .bx--loading-overlay {
    background-color: ${color(theme.color.ui01).setAlpha(0.6)};
  }

  .bx--label-description {
    color: ${theme.color.text02};
  }

  .bx--file__selected-file {
    background-color: ${theme.color.field01};
  }

  .bx--file-filename {
    color: ${theme.color.text01};
  }

  .bx--file__state-container .bx--loading__svg {
    stroke: ${theme.color.ui05};
  }

  .bx--file__state-container .bx--file-close,
  .bx--file__state-container .bx--file-complete {
    fill: ${theme.color.text01};
  }

  .bx--file__state-container .bx--file-close:focus,
  .bx--file__state-container .bx--file-complete:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--file__state-container .bx--file-close {
    fill: ${theme.color.ui05};
  }

  .bx--file__state-container .bx--file-complete {
    fill: ${theme.color.support02};
  }

  .bx--checkbox-appearance {
    background-color: ${theme.color.ui01};
    border-color: ${theme.color.ui05};
  }

  .bx--checkbox:checked + .bx--checkbox-appearance,
  .bx--checkbox:checked + .bx--checkbox-label .bx--checkbox-appearance {
    background-color: ${theme.color.brand01};
    border-color: ${theme.color.brand01};
  }

  .bx--checkbox-checkmark {
    fill: ${theme.color.inverse01};
  }

  @-moz-document url-prefix() {
    .bx--checkbox:checked + .bx--checkbox-appearance .bx--checkbox-checkmark,
    .bx--checkbox:checked
      + .bx--checkbox-label
      .bx--checkbox-appearance
      .bx--checkbox-checkmark {
      stroke: ${theme.color.brand01};
    }
  }

  .bx--radio-button__appearance {
    background-color: ${theme.color.inverse01};

    border-color: ${theme.color.ui05};
  }

  .bx--radio-button:checked
    + .bx--radio-button__label
    .bx--radio-button__appearance {
    border-color: ${theme.color.brand01};
  }

  .bx--radio-button:checked
    + .bx--radio-button__label
    .bx--radio-button__appearance:before {
    background-color: ${theme.color.brand01};
  }

  .bx--toggle__appearance:before {
    background-color: ${theme.color.ui05};
  }

  .bx--toggle__appearance:after {
    border-color: ${theme.color.ui05};

    background-color: ${theme.color.ui01};
  }

  .bx--toggle:checked + .bx--toggle__label .bx--toggle__appearance:before {
    background-color: ${theme.color.brand01};
  }

  .bx--toggle:checked + .bx--toggle__label .bx--toggle__appearance:after {
    background-color: ${theme.color.brand01};

    border-color: ${theme.color.brand01};
  }

  .bx--search-input {
    background-color: ${theme.color.field01};
    color: ${theme.color.text01};
  }

  .bx--search-input:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--search-input::-webkit-input-placeholder {
    color: ${theme.color.text03};
  }

  .bx--search-input:-ms-input-placeholder {
    color: ${theme.color.text03};
  }

  .bx--search-input::placeholder {
    color: ${theme.color.text03};
  }

  .bx--search-magnifier {
    fill: ${theme.color.ui05};
  }

  .bx--search-close {
    fill: ${theme.color.ui05};
  }

  .bx--search-button {
    background-color: ${theme.color.ui01};
  }

  .bx--search-button svg {
    fill: ${theme.color.brand01};
  }

  .bx--search-button:hover,
  .bx--search-button:focus {
    background-color: ${theme.color.brand01};
  }

  .bx--search-button:hover svg,
  .bx--search-button:focus svg {
    fill: ${theme.color.ui01};
  }

  .bx--select-input {
    color: ${theme.color.text01};
    background-color: ${theme.color.field01};
  }

  .bx--select-input:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--select__arrow {
    fill: ${theme.color.brand01};
  }

  .bx--select-optgroup,
  .bx--select-option {
    color: ${theme.color.text01};
  }

  @-moz-document url-prefix() {
    .bx--select-option {
      background-color: ${theme.color.ui01};
      color: ${theme.color.text01};
    }
    .bx--select-optgroup {
      color: ${theme.color.text01};
    }
  }

  .bx--select--inline .bx--select-input {
    color: ${theme.color.brand01};
  }

  .bx--text-input {
    color: ${theme.color.text01};
    background-color: ${theme.color.field01};
  }

  .bx--text-input::-webkit-input-placeholder {
    color: ${theme.color.text03};
  }

  .bx--text-input:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--text-area {
    color: ${theme.color.text01};
    background-color: ${theme.color.field01};
  }

  .bx--text-area:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--text-area::-webkit-input-placeholder {
    color: ${theme.color.text03};
  }

  .bx--number input[type='number'] {
    color: ${theme.color.text01};
    background-color: ${theme.color.field01};
  }

  .bx--number input[type='number']:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--number__control-btn:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--number__control-btn:hover svg {
    fill: ${theme.color.brand02};
  }

  .bx--number__controls svg {
    fill: ${theme.color.brand01};
  }

  .bx--number__controls svg:hover {
    fill: ${theme.color.brand02};
  }

  .bx--link {
    color: ${theme.color.brand01};
  }

  .bx--link:visited {
    color: ${theme.color.brand01};
  }

  .bx--link:active,
  .bx--link:hover,
  .bx--link:focus {
    color: ${theme.color.brand02};
  }

  .bx--link:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--overflow-menu:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--overflow-menu__icon {
    fill: ${theme.color.ui05};
  }

  .bx--overflow-menu__icon:hover,
  .bx--overflow-menu__icon:focus {
    fill: ${theme.color.brand01};
  }

  .bx--overflow-menu-options {
    background-color: ${theme.color.inverse01};
    border-color: ${theme.color.ui04};
  }

  .bx--overflow-menu-options:before {
    background-color: ${theme.color.inverse01};
    border-top-color: ${theme.color.ui04};
    border-left-color: ${theme.color.ui04};
  }

  .bx--overflow-menu--divider {
    border-top-color: ${theme.color.ui04};
  }

  .bx--overflow-menu-options__btn:focus {
    background-color: ${theme.color.brand01};
    color: ${theme.color.inverse01};
  }

  .bx--overflow-menu-options__option--danger
    .bx--overflow-menu-options__btn:focus {
    background-color: ${theme.color.support01};
  }

  .bx--overflow-menu-options__option:hover {
    background-color: ${theme.color.brand01};
  }

  .bx--overflow-menu-options__option:hover .bx--overflow-menu-options__btn {
    color: ${theme.color.inverse01};
  }

  .bx--overflow-menu-options__option--danger {
    border-top-color: ${theme.color.ui04};
  }

  .bx--overflow-menu-options__option--danger:hover {
    background-color: ${theme.color.support01};
  }

  .bx--responsive-table {
    background-color: ${theme.color.ui01};

    border-color: ${theme.color.ui04};
  }

  .bx--responsive-table th:focus span {
    outline-color: ${theme.color.brand01};
  }

  .bx--responsive-table--static-size {
    border-color: ${theme.color.ui04};
  }

  .bx--table-head .bx--table-row {
    border-bottom-color: ${theme.color.brand01};
  }

  .bx--table-body > .bx--parent-row,
  .bx--table-body > .bx--parent-row {
    background-color: ${theme.color.ui01};
  }

  .bx--table-body > .bx--parent-row + .bx--expandable-row,
  .bx--table-body > .bx--parent-row + .bx--expandable-row {
    background-color: ${theme.color.ui01};
  }

  .bx--table-body > .bx--parent-row--even,
  .bx--table-body > .bx--parent-row--even {
    background-color: ${theme.color.ui03};
  }

  .bx--table-body > .bx--parent-row--even + .bx--expandable-row,
  .bx--table-body > .bx--parent-row--even + .bx--expandable-row {
    background-color: ${theme.color.ui03};
  }

  .bx--table-body .bx--table-row:first-child:hover,
  .bx--table-body .bx--table-row:first-child:focus {
    border-left-color: ${theme.color.brand02};
    outline-color: ${theme.color.brand02};
  }

  .bx--table-body .bx--table-row:not(:first-child):hover,
  .bx--table-body .bx--table-row:not(:first-child):focus {
    border-left-color: ${theme.color.brand02};
    outline-color: ${theme.color.brand02};
  }

  .bx--expandable-row > td {
    border-left-color: ${theme.color.brand01};
  }

  .bx--table-expand:focus svg {
    outline-color: ${theme.color.brand01};
  }

  .bx--table-expand__svg {
    fill: ${theme.color.ui05};
  }

  .bx--table-sort__svg {
    fill: ${theme.color.ui05};
  }

  .bx--table-toolbar .bx--search-input:focus {
    box-shadow: inset 0px 0px 0px 1px ${theme.color.brand01};
  }

  .bx--toolbar-action:hover > .bx--toolbar-action__icon {
    fill: ${theme.color.brand01};
  }

  .bx--toolbar-action:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--toolbar-action:focus > .bx--toolbar-action__icon {
    fill: ${theme.color.brand01};
  }

  .bx--toolbar-action:active > .bx--toolbar-action__icon {
    fill: ${color(theme.color.brand01).darken(5)};
  }

  .bx--toolbar-action__icon {
    fill: ${theme.color.ui05};
  }

  .bx--batch-actions:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--batch-actions .bx--btn {
    color: ${theme.color.ui01};
  }

  .bx--batch-actions .bx--btn__icon {
    fill: ${theme.color.ui01};
  }

  .bx--batch-actions .bx--btn--ghost:hover,
  .bx--batch-actions .bx--btn--ghost:focus {
    background-color: ${theme.color.ui01};
    color: ${theme.color.brand01};
  }

  .bx--batch-actions .bx--btn--ghost:hover .bx--btn__icon,
  .bx--batch-actions .bx--btn--ghost:focus .bx--btn__icon {
    fill: ${theme.color.brand01};
  }

  .bx--batch-actions .bx--btn--ghost:focus {
    border-color: ${theme.color.brand01};
    outline-color: ${theme.color.ui02};
  }

  .bx--batch-actions--active {
    background-color: ${theme.color.brand01};
  }

  .bx--action-icons svg {
    fill: ${theme.color.ui01};
  }

  .bx--batch-summary {
    color: ${theme.color.ui01};
  }

  .bx--batch-summary__cancel {
    color: ${theme.color.ui01};
  }

  .bx--batch-summary__cancel:hover,
  .bx--batch-summary__cancel:focus {
    border-bottom-color: ${theme.color.ui01};
  }

  .bx--data-table-v2 {
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--data-table-v2 thead {
    background-color: ${theme.color.ui02};
  }

  .bx--data-table-v2 tbody {
    background-color: ${theme.color.ui01};
  }

  .bx--data-table-v2 tr:hover td {
    background-color: ${color(theme.color.brand02).setAlpha(0.1)};
    border-top-color: ${theme.color.brand01};
    border-bottom-color: ${theme.color.brand01};
  }

  .bx--data-table-v2 tr:hover td:first-of-type {
    border-left-color: ${theme.color.brand01};
  }

  .bx--data-table-v2 tr:hover td:last-of-type {
    border-right-color: ${theme.color.brand01};
  }

  .bx--data-table-v2 th {
    border-top-color: ${theme.color.ui04};
  }

  .bx--data-table-v2 th,
  .bx--data-table-v2 td {
    border-top-color: ${theme.color.ui04};
  }

  .bx--data-table-v2 th:first-of-type,
  .bx--data-table-v2 td:first-of-type {
    border-left-color: ${theme.color.ui04};
  }

  .bx--data-table-v2 th:last-of-type,
  .bx--data-table-v2 td:last-of-type {
    border-right-color: ${theme.color.ui04};
  }

  .bx--data-table-v2 .bx--overflow-menu:focus .bx--overflow-menu__icon {
    box-shadow: inset 0px 0px 0px 1px ${theme.color.brand01};
  }

  .bx--data-table-v2--zebra tbody tr:nth-child(even) {
    background-color: ${theme.color.ui02};
  }

  .bx--data-table-v2--no-border th:last-of-type,
  .bx--data-table-v2--no-border td:last-of-type {
    border-right-color: ${theme.color.ui04};
  }

  .bx--data-table-v2--zebra tbody tr.bx--data-table-v2--selected,
  tbody tr.bx--data-table-v2--selected {
    background-color: ${color(theme.color.brand02).setAlpha(0.1)};
  }

  tr.bx--expandable-row-v2 td {
    background-color: ${theme.color.ui01};
  }

  tr.bx--expandable-row-v2 > td:first-of-type:before {
    background-color: ${theme.color.brand01};
  }

  tr.bx--expandable-row-v2:hover > td {
    background-color: ${color(theme.color.brand02).setAlpha(0.1)};
  }

  tr.bx--expandable-row-v2:hover > td:last-of-type {
    border-right-color: ${theme.color.brand01};
  }

  tr.bx--expandable-row-v2:hover + tr[data-child-row] > td {
    background-color: ${color(theme.color.brand02).setAlpha(0.1)};
    border-bottom-color: ${theme.color.brand01};
    border-right-color: ${theme.color.brand01};
  }

  tr.bx--expandable-row--hover-v2 > td {
    background-color: ${color(theme.color.brand02).setAlpha(0.1)};
    border-top-color: ${theme.color.brand01};
  }

  tr.bx--expandable-row--hover-v2 > td:last-of-type {
    border-right-color: ${theme.color.brand01};
  }

  .bx--table-expand-v2__button:focus svg {
    box-shadow: inset 0px 0px 0px 1px ${theme.color.brand01};
  }

  .bx--table-expand-v2__svg {
    fill: ${theme.color.ui05};
  }

  .bx--table-sort-v2:focus svg {
    outline-color: ${theme.color.brand01};
    fill: ${theme.color.brand01};
  }

  .bx--table-sort-v2__icon {
    fill: ${theme.color.ui05};
  }

  .bx--inline-edit-label__action:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--inline-edit-label__icon {
    fill: ${theme.color.ui05};
  }

  .bx--structured-list.bx--structured-list--border {
    border-color: ${theme.color.ui04};
    background-color: ${theme.color.ui01};
  }

  .bx--structured-list-row {
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--structured-list--selection
    .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row) {
    background-color: ${color(theme.color.brand02).setAlpha()};
  }

  [data-structured-list]
    .bx--structured-list-row:hover:not(.bx--structured-list-row--header-row) {
    background-color: ${color(theme.color.brand02).setAlpha()};
  }

  .bx--structured-list-row.bx--structured-list-row--selected {
    background-color: ${color(theme.color.brand02).setAlpha()};
  }

  .bx--structured-list-row.bx--structured-list-row--header-row {
    border-bottom-color: ${theme.color.brand01};
  }

  .bx--structured-list-row:focus:not(.bx--structured-list-row--header-row) {
    outline-color: ${theme.color.brand01};
  }

  .bx--structured-list-row:hover .bx--structured-list-svg {
    fill: ${color(theme.color.brand02).setAlpha(0.1)};
  }

  .bx--structured-list-input:checked
    + .bx--structured-list-row
    .bx--structured-list-svg,
  .bx--structured-list-input:checked
    + .bx--structured-list-td
    .bx--structured-list-svg {
    fill: ${theme.color.brand02};
  }

  .bx--snippet--code {
    background-color: ${theme.color.field01};
  }

  .bx--snippet--terminal {
    background-color: ${theme.color.text01};
    color: ${theme.color.inverse01};
  }

  .bx--snippet__icon {
    fill: ${theme.color.brand01};
  }

  .bx--snippet__icon:hover {
    fill: ${theme.color.brand02};
  }

  .bx--snippet--terminal .bx--snippet__icon {
    fill: ${theme.color.inverse01};
  }

  .bx--snippet--terminal .bx--snippet__icon:hover {
    fill: ${theme.color.brand02};
  }

  .bx--snippet-button:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--card {
    background-color: ${theme.color.ui01};
    border-color: ${theme.color.ui04};
  }

  .bx--card:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--card-footer {
    background-color: ${theme.color.ui03};
  }

  .bx--card-footer__link:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--about__title--additional-info {
    color: ${theme.color.text02};
  }

  .bx--about__icon {
    background-color: ${theme.color.ui01};
    border-color: ${theme.color.ui04};
  }

  .bx--card-footer__app-status--running::before {
    background-color: ${theme.color.support02};
  }

  .bx--card-footer__app-status--not-running::before {
    background-color: ${theme.color.support01};
  }

  .bx--app-actions__button:hover .bx--app-actions__button--icon,
  .bx--app-actions__button:focus .bx--app-actions__button--icon {
    fill: ${theme.color.brand01};
  }

  .bx--app-actions__button:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--app-actions__button--icon {
    fill: ${theme.color.ui05};
  }

  .bx--content-switcher-btn {
    border-color: ${theme.color.brand01};
    color: ${theme.color.brand01};
  }

  .bx--content-switcher-btn:focus {
    background-color: ${theme.color.brand02};

    border-color: ${theme.color.brand02};

    color: ${theme.color.inverse01};
  }

  .bx--content-switcher-btn:hover,
  .bx--content-switcher-btn:active {
    background-color: ${theme.color.brand02};
    border-color: ${theme.color.brand02};
    color: ${theme.color.inverse01};
  }

  .bx--content-switcher-btn:not(:first-of-type) {
    border-left-color: ${theme.color.brand01};
  }

  .bx--content-switcher-btn:first-of-type:hover {
    border-color: ${theme.color.brand02};
  }

  .bx--content-switcher-btn:last-of-type:hover {
    border-color: ${theme.color.brand02};
  }

  .bx--content-switcher-btn.bx--content-switcher--selected {
    background-color: ${theme.color.brand01};
    color: ${theme.color.inverse01};
  }

  .bx--content-switcher-btn.bx--content-switcher--selected:hover {
    border-color: ${theme.color.brand01};
  }

  .bx--date-picker__input {
    background-color: ${theme.color.field01};
    color: ${theme.color.text01};
  }

  .bx--date-picker__input:focus,
  .bx--date-picker__input.bx--focused {
    outline-color: ${theme.color.brand01};
  }

  .bx--date-picker__input::-webkit-input-placeholder {
    color: ${theme.color.text03};
  }

  .bx--date-picker__icon {
    fill: ${theme.color.brand01};
  }

  .bx--date-picker__calendar,
  .flatpickr-calendar.open {
    background-color: ${theme.color.ui01};
  }

  .bx--date-picker__calendar:focus,
  .flatpickr-calendar.open:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--date-picker__month .flatpickr-prev-month,
  .bx--date-picker__month .flatpickr-next-month,
  .flatpickr-month .flatpickr-prev-month,
  .flatpickr-month .flatpickr-next-month {
    fill: ${theme.color.text01};
  }

  .bx--date-picker__month .flatpickr-prev-month:hover svg,
  .bx--date-picker__month .flatpickr-next-month:hover svg,
  .flatpickr-month .flatpickr-prev-month:hover svg,
  .flatpickr-month .flatpickr-next-month:hover svg {
    fill: ${theme.color.brand01};
  }

  .bx--date-picker__month .flatpickr-current-month svg,
  .flatpickr-month .flatpickr-current-month svg {
    fill: ${theme.color.text01};
  }

  .bx--date-picker__month .flatpickr-current-month .cur-month,
  .flatpickr-month .flatpickr-current-month .cur-month {
    color: ${theme.color.text01};
  }

  .bx--date-picker__month .numInputWrapper .numInput,
  .flatpickr-month .numInputWrapper .numInput {
    color: ${theme.color.text01};
    background-color: ${theme.color.field01};
  }

  .bx--date-picker__month .numInputWrapper .numInput:focus,
  .flatpickr-month .numInputWrapper .numInput:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--date-picker__month .numInputWrapper span.arrowUp:hover:after,
  .bx--date-picker__month .numInputWrapper span.arrowDown:hover:after,
  .flatpickr-month .numInputWrapper span.arrowUp:hover:after,
  .flatpickr-month .numInputWrapper span.arrowDown:hover:after {
    border-bottom-color: ${theme.color.brand02};
    border-top-color: ${theme.color.brand02};
  }

  .bx--date-picker__month .numInputWrapper span.arrowUp:after,
  .bx--date-picker__month .numInputWrapper span.arrowDown:after,
  .flatpickr-month .numInputWrapper span.arrowUp:after,
  .flatpickr-month .numInputWrapper span.arrowDown:after {
    border-bottom-color: ${theme.color.brand01};
    border-top-color: ${theme.color.brand01};
  }

  span.bx--date-picker__weekday,
  span.flatpickr-weekday {
    color: ${theme.color.text01};
  }

  .bx--date-picker__day,
  .flatpickr-day {
    color: ${theme.color.text01};
  }

  .bx--date-picker__day:hover,
  .flatpickr-day:hover {
    background: ${theme.color.ui04};
  }

  .bx--date-picker__day:focus,
  .flatpickr-day:focus {
    background: ${theme.color.ui04};
  }

  .bx--date-picker__day.today,
  .flatpickr-day.today {
    border-color: ${theme.color.brand01};
  }

  .bx--date-picker__day.disabled,
  .flatpickr-day.disabled {
    color: ${theme.color.ui05};
  }

  .bx--date-picker__day.inRange,
  .flatpickr-day.inRange {
    background: ${theme.color.brand02};
    box-shadow: -6px 0 0 ${theme.color.brand02}, 6px 0 0 ${theme.color.brand02};
  }

  .bx--date-picker__day.selected,
  .flatpickr-day.selected {
    background: ${theme.color.brand01};
    color: ${theme.color.inverse01};
  }

  .bx--date-picker__day.endRange.inRange,
  .flatpickr-day.endRange.inRange {
    background: ${theme.color.ui01};
    color: ${theme.color.text01};
    border-color: ${theme.color.brand01};
  }

  .bx--date-picker__day.endRange.inRange.selected,
  .flatpickr-day.endRange.inRange.selected {
    background: ${theme.color.brand01};

    color: ${theme.color.inverse01};
  }

  .bx--date-picker__day.startRange.inRange:not(.selected),
  .flatpickr-day.startRange.inRange:not(.selected) {
    background: ${theme.color.ui01};
    border-color: ${theme.color.brand01};
  }

  .bx--tabs {
    color: ${theme.color.text01};
  }

  .bx--tabs-trigger {
    background-color: ${theme.color.field01};
  }

  .bx--tabs-trigger svg {
    fill: ${theme.color.brand01};
  }

  .bx--tabs-trigger:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--tabs-trigger-text {
    color: ${theme.color.text01};
  }

  .bx--tabs-trigger-text:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--tabs__nav-item {
    background-color: ${theme.color.ui01};
  }

  .bx--tabs__nav-item:hover,
  .bx--tabs__nav-item:focus {
    background-color: ${theme.color.brand01};
  }

  @media screen and (min-width: 768px) {
    .bx--tabs__nav-item--selected {
      border-bottom-color: ${theme.color.brand01};
    }
    .bx--tabs__nav-item--selected .bx--tabs__nav-link {
      color: ${theme.color.brand01};
    }
    .bx--tabs__nav-item--selected .bx--tabs__nav-link:focus {
      color: ${theme.color.brand01};
    }
  }

  .bx--tabs__nav-item:hover .bx--tabs__nav-link {
    color: ${theme.color.inverse01};
  }

  @media screen and (min-width: 768px) {
    .bx--tabs__nav-item:hover .bx--tabs__nav-link {
      color: ${theme.color.brand01};
    }
  }

  .bx--tabs__nav-link {
    color: ${theme.color.text01};
  }

  .bx--tabs__nav-link:focus {
    background-color: ${theme.color.brand01};
    color: ${theme.color.inverse01};
  }

  @media screen and (min-width: 768px) {
    .bx--tabs__nav-link:hover {
      color: ${theme.color.brand01};
    }
    .bx--tabs__nav-link:focus {
      color: ${theme.color.text01};

      box-shadow: 0 0 0 1px ${theme.color.brand01};
    }
  }

  .bx--breadcrumb-item::after {
    color: ${theme.color.text03};
  }

  .bx--breadcrumb .bx--link:hover,
  .bx--breadcrumb .bx--link:focus {
    color: ${theme.color.brand01};
    border-bottom-color: ${theme.color.brand01};
  }

  .bx--detail-page-header--no-tabs {
    background-color: ${theme.color.ui02};
  }

  .bx--detail-page-header--with-tabs {
    background-color: ${theme.color.ui01};
  }

  .bx--detail-page-header-icon-container {
    border-color: ${theme.color.ui05};
  }

  .bx--detail-page-header-title {
    color: ${theme.color.text02};
  }

  .bx--detail-page-header-status-icon {
    background-color: ${theme.color.support02};
  }

  .bx--dropdown {
    background-color: ${theme.color.field01};

    color: ${theme.color.text01};
  }

  .bx--dropdown:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--dropdown.bx--dropdown--open:focus {
    box-shadow: 0 -1px 0 0 ${theme.color.brand01},
      1px 0 0 0 ${theme.color.brand01}, -1px 0 0 0 ${theme.color.brand01};
  }

  .bx--dropdown__arrow {
    fill: ${theme.color.brand01};
  }

  .bx--dropdown[data-value=''] .bx--dropdown-text {
    color: ${theme.color.text03};
  }

  .bx--dropdown-link:hover,
  .bx--dropdown-link:focus {
    background-color: ${theme.color.brand01};
    color: ${theme.color.inverse01};
  }

  .bx--dropdown--open .bx--dropdown-list {
    background-color: ${theme.color.ui01};
  }

  .bx--dropdown--open:focus .bx--dropdown-list {
    box-shadow: 0 1px 0 0 ${theme.color.brand01},
      1px 0 0 0 ${theme.color.brand01}, -1px 0 0 0 ${theme.color.brand01};
  }

  .bx--modal {
    background-color: ${color(theme.color.ui03).setAlpha(0.5)};
  }

  .bx--modal-container {
    background-color: ${theme.color.ui01};
    border-top: ${theme.color.brand01} 4px solid;
  }

  .bx--modal-header__label {
    color: ${theme.color.text01};
  }

  .bx--modal-header__heading {
    color: ${theme.color.text02};
  }

  .bx--modal-footer {
    background-color: ${theme.color.ui03};
  }

  .bx--modal-close:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--modal-close__icon {
    fill: ${theme.color.ui05};
  }

  .bx--module .bx--module__inner {
    background-color: ${theme.color.ui01};
  }

  .bx--module .bx--module__header {
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--module .bx--module__title {
    color: ${theme.color.text01};
  }

  .bx--inline-notification {
    color: ${theme.color.text03};
  }

  .bx--inline-notification--error {
    border-color: ${theme.color.support01};
    border-left: 6px solid ${theme.color.support01};
  }

  .bx--inline-notification--error .bx--inline-notification__icon {
    fill: ${theme.color.support01};
  }

  .bx--inline-notification--success {
    border-color: ${theme.color.support02};
    border-left: 6px solid ${theme.color.support02};
  }

  .bx--inline-notification--success .bx--inline-notification__icon {
    fill: ${theme.color.support02};
  }

  .bx--inline-notification--info {
    border-color: ${theme.color.support04};
    border-left: 6px solid ${theme.color.support04};
  }

  .bx--inline-notification--info .bx--inline-notification__icon {
    fill: ${theme.color.support04};
  }

  .bx--inline-notification--warning {
    border-color: ${theme.color.support03};
    border-left: 6px solid ${theme.color.support03};
  }

  .bx--inline-notification--warning .bx--inline-notification__icon {
    fill: ${theme.color.support03};
  }

  .bx--inline-notification__close-button:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--inline-notification__close-icon {
    fill: ${theme.color.text03};
  }

  .bx--toast-notification {
    background-color: ${theme.color.inverse01};
    color: ${theme.color.text01};
  }

  .bx--toast-notification--error {
    border-left: 6px solid ${theme.color.support01};
  }

  .bx--toast-notification--success {
    border-left: 6px solid ${theme.color.support02};
  }

  .bx--toast-notification--info {
    border-left: 6px solid ${theme.color.support04};
  }

  .bx--toast-notification--warning {
    border-left: 6px solid ${theme.color.support03};
  }

  .bx--toast-notification__close-button {
    background-color: ${theme.color.inverse01};
  }

  .bx--toast-notification__close-button:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--toast-notification__icon {
    fill: ${theme.color.text03};
  }

  .bx--toast-notification__subtitle {
    color: ${theme.color.text03};
  }

  .bx--toast-notification__caption {
    color: ${theme.color.text03};
  }

  .bx--tooltip__trigger {
    color: ${theme.color.text01};
  }

  .bx--tooltip__trigger svg {
    fill: ${theme.color.brand01};
  }

  .bx--tooltip__trigger svg:focus {
    outline-color: ${theme.color.brand01};
    fill: ${theme.color.brand02};
  }

  .bx--tooltip__trigger:hover svg,
  .bx--tooltip__trigger:focus svg {
    fill: ${theme.color.brand02};
  }

  .bx--tooltip {
    background: ${theme.color.ui01};

    border-color: ${theme.color.ui04};
  }

  .bx--tooltip:before {
    background: ${theme.color.ui01};

    border-right-color: ${theme.color.ui04};
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--tooltip--simple__top svg,
  .bx--tooltip--simple__bottom svg {
    fill: ${theme.color.brand01};
  }

  .bx--tooltip--simple__top:before,
  .bx--tooltip--simple__top:after,
  .bx--tooltip--simple__bottom:before,
  .bx--tooltip--simple__bottom:after {
    background: ${theme.color.ui01};
  }

  .bx--tooltip--simple__top:before,
  .bx--tooltip--simple__bottom:before {
    border-color: ${theme.color.ui04};

    color: ${theme.color.text01};
  }

  .bx--tooltip--simple__top:after,
  .bx--tooltip--simple__bottom:after {
    border-right-color: ${theme.color.ui04};
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--tooltip--simple__top:hover svg,
  .bx--tooltip--simple__top:focus svg,
  .bx--tooltip--simple__bottom:hover svg,
  .bx--tooltip--simple__bottom:focus svg {
    fill: ${theme.color.brand02};
  }

  .bx--tooltip--simple__top:focus svg,
  .bx--tooltip--simple__bottom:focus svg {
    outline-color: ${theme.color.brand01};
  }

  .bx--left-nav__trigger--apps span,
  .bx--left-nav__trigger--apps span:before,
  .bx--left-nav__trigger--apps span:after {
    background: ${theme.color.nav05};
  }

  .bx--left-nav__trigger--apps:hover,
  .bx--left-nav__trigger--apps:focus {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__trigger--apps.bx--left-nav__trigger--active span:before,
  .bx--left-nav__trigger--apps.bx--left-nav__trigger--active span:after {
    background: ${theme.color.nav06};
  }

  .bx--left-nav__trigger--apps.bx--left-nav__trigger--active:hover,
  .bx--left-nav__trigger--apps.bx--left-nav__trigger--active:focus {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__trigger--services span,
  .bx--left-nav__trigger--services span:before,
  .bx--left-nav__trigger--services span:after {
    background: ${theme.color.nav03};
  }

  .bx--left-nav__trigger--services:hover,
  .bx--left-nav__trigger--services:focus {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__trigger--services.bx--left-nav__trigger--active span:before,
  .bx--left-nav__trigger--services.bx--left-nav__trigger--active span:after {
    background: ${theme.color.nav04};
  }

  .bx--left-nav__trigger--services.bx--left-nav__trigger--active:hover,
  .bx--left-nav__trigger--services.bx--left-nav__trigger--active:focus {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__trigger--infrastructure span,
  .bx--left-nav__trigger--infrastructure span:before,
  .bx--left-nav__trigger--infrastructure span:after {
    background: ${theme.color.nav07};
  }

  .bx--left-nav__trigger--infrastructure:hover,
  .bx--left-nav__trigger--infrastructure:focus {
    background-color: ${theme.color.nav08};
  }

  .bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active
    span:before,
  .bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active
    span:after {
    background: ${theme.color.nav08};
  }

  .bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:hover,
  .bx--left-nav__trigger--infrastructure.bx--left-nav__trigger--active:focus {
    background-color: ${theme.color.nav08};
  }

  .bx--global-header {
    background-color: ${theme.color.nav02};
  }

  .bx--unified-header--apps .bx--global-header__title--current-page {
    color: ${theme.color.nav05};
  }

  .bx--unified-header--infrastructure .bx--global-header__title--current-page {
    color: ${theme.color.nav07};
  }

  .bx--unified-header--services .bx--global-header__title--current-page {
    color: ${theme.color.nav03};
  }

  .bx--global-header__right-container {
    background-color: ${theme.color.nav02};
  }

  .bx--global-header__menu__item--link {
    background-color: ${theme.color.nav02};
  }

  .bx--top-nav {
    background-color: ${theme.color.nav01};
  }

  .bx--top-nav__left-container .bx--dropdown,
  .bx--top-nav__right-container .bx--dropdown {
    background-color: ${theme.color.nav01};
    color: ${theme.color.inverse01};
  }

  .bx--top-nav__left-container .bx--dropdown__arrow,
  .bx--top-nav__right-container .bx--dropdown__arrow {
    fill: ${theme.color.inverse01};
  }

  .bx--top-nav__left-container .bx--dropdown-item:hover,
  .bx--top-nav__right-container .bx--dropdown-item:hover {
    color: ${theme.color.text01};
  }

  .bx--top-nav__left-container .bx--dropdown-link,
  .bx--top-nav__right-container .bx--dropdown-link {
    color: ${theme.color.inverse01};
  }

  .bx--top-nav__left-container__link {
    background-color: ${theme.color.nav01};

    color: ${theme.color.inverse01};
  }

  .bx--top-nav__left-container__link--icon {
    fill: ${theme.color.inverse01};
  }

  .bx--top-nav__right-container__item[data-trial] .bx--dropdown-text,
  .bx--top-nav__right-container__item[data-credit] .bx--dropdown-text {
    color: ${theme.color.inverse01};
  }

  .bx--top-nav__right-container__item[data-trial]
    .bx--dropdown__trial-content:focus,
  .bx--top-nav__right-container__item[data-trial]
    .bx--dropdown__trial-content:hover,
  .bx--top-nav__right-container__item[data-trial]
    .bx--dropdown__credit-content:focus,
  .bx--top-nav__right-container__item[data-trial]
    .bx--dropdown__credit-content:hover,
  .bx--top-nav__right-container__item[data-credit]
    .bx--dropdown__trial-content:focus,
  .bx--top-nav__right-container__item[data-credit]
    .bx--dropdown__trial-content:hover,
  .bx--top-nav__right-container__item[data-credit]
    .bx--dropdown__credit-content:focus,
  .bx--top-nav__right-container__item[data-credit]
    .bx--dropdown__credit-content:hover {
    color: ${theme.color.inverse01};
  }

  .bx--top-nav__right-container__item:last-child
    .bx--dropdown-text--profile-image
    .profile-image
    svg,
  .bx--top-nav__right-container__item:last-child
    .bx--dropdown-text--profile-image
    .profile-image
    img {
    fill: ${theme.color.inverse01};
  }

  .bx--dropdown__profile-dropdown--picture {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav {
    background-color: ${theme.color.ui01};
  }

  .bx--left-nav__close-row {
    background-color: ${theme.color.ui01};
  }

  .bx--left-nav__header {
    background-color: ${theme.color.nav01};
  }

  .bx--left-nav__header[data-left-nav-current-section='apps'] {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__header[data-left-nav-current-section='infrastructure'] {
    background-color: ${theme.color.nav08};
  }

  .bx--left-nav__header[data-left-nav-current-section='services'] {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__header--title {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__header--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__header--close-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__sections {
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--left-nav__section {
    background-color: ${theme.color.ui01};
  }

  .bx--left-nav__section:hover[data-left-nav-section='apps'] {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__section:hover[data-left-nav-section='services'] {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__section:hover .bx--left-nav__section--link {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__section:hover .bx--left-nav__section--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__section--active,
  .bx--left-nav__section--transition {
    background-color: ${theme.color.ui01};
  }

  .bx--left-nav__section--active[data-left-nav-section='apps'],
  [data-left-nav-section='apps'].bx--left-nav__section--transition {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__section--active[data-left-nav-section='infrastructure'],
  [data-left-nav-section='infrastructure'].bx--left-nav__section--transition {
    background-color: ${theme.color.nav08};
  }

  .bx--left-nav__section--active[data-left-nav-section='services'],
  [data-left-nav-section='services'].bx--left-nav__section--transition {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__section--transition .bx--left-nav__section--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__section--taxonomy-icon {
    fill: ${theme.color.text01};
  }

  .bx--left-nav__section--link {
    color: ${theme.color.text01};
  }

  .bx--left-nav__main-nav {
    background-color: ${theme.color.inverse01};
  }

  .bx--main-nav__parent-item {
    background-color: ${theme.color.ui01};
  }

  .bx--parent-item__link {
    color: ${theme.color.text01};
  }

  .bx--parent-item__link .bx--parent-item__link--taxonomy-icon {
    fill: ${theme.color.text01};
  }

  .bx--parent-item__link .bx--parent-item__link--down-icon svg {
    fill: ${theme.color.text01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--parent-item__link:hover {
    color: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--parent-item__link:hover
    .bx--parent-item__link--taxonomy-icon,
  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--parent-item__link:hover
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--parent-item__link:hover {
    color: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--parent-item__link:hover
    .bx--parent-item__link--taxonomy-icon,
  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--parent-item__link:hover
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--parent-item__link:hover {
    color: ${theme.color.nav08};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--parent-item__link:hover
    .bx--parent-item__link--taxonomy-icon,
  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--parent-item__link:hover
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.nav08};
  }

  .bx--main-nav__parent-item.bx--active-list-item .bx--parent-item__link {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover
    .bx--parent-item__link--taxonomy-icon,
  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover
    .bx--parent-item__link--taxonomy-icon,
  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link {
    background-color: ${theme.color.nav08};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover
    .bx--parent-item__link--taxonomy-icon,
  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link:hover
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.inverse01};
  }

  .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--main-nav__parent-item.bx--active-list-item
    .bx--parent-item__link--down-icon
    svg {
    fill: ${theme.color.inverse01};
  }

  .bx--main-nav__parent-item.bx--active-list-item:hover {
    color: ${theme.color.inverse01};
  }

  .bx--nested-list__item--link {
    color: ${theme.color.text01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--nested-list__item--link:hover {
    color: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--nested-list__item--link:hover
    .bx--left-nav-list__item-link--taxonomy-icon {
    fill: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--nested-list__item--link:hover {
    color: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--nested-list__item--link:hover
    .bx--left-nav-list__item-link--taxonomy-icon {
    fill: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--nested-list__item--link:hover {
    color: ${theme.color.nav08};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--nested-list__item--link:hover
    .bx--left-nav-list__item-link--taxonomy-icon {
    fill: ${theme.color.nav08};
  }

  .bx--nested-list__item--icon svg {
    fill: ${theme.color.text01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link:hover
    .bx--parent-item__link--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link:hover
    .bx--parent-item__link--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link {
    background-color: ${theme.color.nav08};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--nested-list__item.bx--active-list-item
    .bx--nested-list__item--link:hover
    .bx--parent-item__link--taxonomy-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--nested-list__item.bx--active-list-item .bx--nested-list__item--icon svg {
    fill: ${theme.color.text01};
  }

  .bx--nested-list__flyout-menu {
    color: ${theme.color.inverse01};
  }

  .bx--nested-list__flyout-menu--displayed {
    border-left-color: ${theme.color.ui04};
  }

  .bx--flyout-menu__item--link {
    color: ${theme.color.text01};
  }

  .bx--flyout-menu__item {
    background-color: ${theme.color.ui01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--flyout-menu__item:hover
    .bx--flyout-menu__item--link {
    color: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--flyout-menu__item:hover
    .bx--flyout-menu__item--link {
    color: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--flyout-menu__item:hover
    .bx--flyout-menu__item--link {
    color: ${theme.color.nav08};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--flyout-menu__item.bx--active-list-item {
    background-color: ${theme.color.nav06};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--flyout-menu__item.bx--active-list-item
    .bx--flyout-menu__item--link {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='apps']
    .bx--flyout-menu__item.bx--active-list-item
    .bx--flyout-menu__item--link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--flyout-menu__item.bx--active-list-item {
    background-color: ${theme.color.nav04};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--flyout-menu__item.bx--active-list-item
    .bx--flyout-menu__item--link {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='services']
    .bx--flyout-menu__item.bx--active-list-item
    .bx--flyout-menu__item--link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--flyout-menu__item.bx--active-list-item {
    background-color: ${theme.color.nav08};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--flyout-menu__item.bx--active-list-item
    .bx--flyout-menu__item--link {
    color: ${theme.color.inverse01};
  }

  .bx--left-nav__main-nav[data-left-nav-list='infrastructure']
    .bx--flyout-menu__item.bx--active-list-item
    .bx--flyout-menu__item--link:hover {
    color: ${theme.color.inverse01};
  }

  .bx--account-switcher__linked-icon {
    fill: ${theme.color.inverse01};
  }

  .bx--account-switcher__toggle {
    color: ${theme.color.inverse01};

    background-color: ${theme.color.nav01};
  }

  .bx--account-switcher__menu__container {
    color: ${theme.color.inverse01};
  }

  .bx--interior-left-nav--collapseable
    .bx--interior-left-nav-collapse__link:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--select--inline .bx--select-input {
    color: ${theme.color.brand01};
  }

  .bx--pagination {
    background-color: ${theme.color.ui01};

    border-color: ${theme.color.ui04};
  }

  .bx--pagination__text {
    color: ${theme.color.text02};
  }

  .bx--pagination__button-icon {
    fill: ${theme.color.ui05};
  }

  .bx--pagination__button:hover .bx--pagination__button-icon {
    fill: ${theme.color.brand01};
  }

  .bx--pagination__button:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--pagination .bx--select-input:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--pagination .bx--text-input:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--pagination--inline .bx--pagination__button {
    border-left-color: ${theme.color.ui04};
    border-right-color: ${theme.color.ui04};
  }

  .bx--accordion__item {
    border-top-color: ${theme.color.ui04};
  }

  .bx--accordion__item:focus .bx--accordion__arrow {
    outline-color: ${theme.color.brand01};
  }

  .bx--accordion__item:last-child {
    border-bottom-color: ${theme.color.ui04};
  }

  .bx--accordion__heading {
    color: ${theme.color.text01};
  }

  .bx--accordion__heading:focus .bx--accordion__arrow {
    outline-color: ${theme.color.brand01};
  }

  .bx--accordion__arrow {
    fill: ${theme.color.ui05};
  }

  .bx--accordion__item--active .bx--accordion__arrow {
    fill: ${theme.color.brand01};
  }

  .bx--progress-step--current circle:first-child {
    stroke: ${theme.color.brand01};
  }

  .bx--progress-step--current circle:last-child {
    fill: ${theme.color.brand01};
  }

  .bx--progress-step--current .bx--progress-label {
    color: ${theme.color.brand01};
  }

  .bx--progress-step--current .bx--progress-line {
    background-color: ${theme.color.brand01};
  }

  .bx--progress-step--incomplete circle {
    stroke: ${theme.color.ui05};
  }

  .bx--progress-step--incomplete .bx--progress-label {
    color: ${theme.color.text02};
  }

  .bx--progress-step--incomplete .bx--progress-line {
    background-color: ${theme.color.ui05};
  }

  .bx--progress-step--complete circle {
    stroke: ${theme.color.brand01};
  }

  .bx--progress-step--complete polygon {
    fill: ${theme.color.brand01};
  }

  .bx--progress-step--complete .bx--progress-label {
    color: ${theme.color.brand01};
  }

  .bx--progress-step--complete .bx--progress-line {
    background-color: ${theme.color.brand01};
  }

  .bx--toolbar .bx--overflow-menu__icon {
    fill: ${theme.color.text02};
  }

  .bx--toolbar .bx--search-magnifier {
    fill: ${theme.color.text02};
  }

  .bx--toolbar .bx--toolbar-search--active .bx--search-input {
    background-color: ${theme.color.field01};
  }

  .bx--toolbar .bx--overflow-menu--open > .bx--overflow-menu__icon {
    fill: ${theme.color.brand01};
  }

  .bx--toolbar-search__btn:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--toolbar-menu__divider {
    border-top-color: ${theme.color.ui04};
  }

  .bx--time-picker__input-field {
    background-color: ${theme.color.field01};

    color: ${theme.color.text01};
  }

  .bx--time-picker__input-field:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--slider--disabled .bx--slider__thumb:active {
    background: ${theme.color.brand01};
  }

  .bx--slider__range-label {
    color: ${theme.color.text02};
  }

  .bx--slider__track {
    background: ${theme.color.ui05};
  }

  .bx--slider__filled-track {
    background: ${theme.color.brand01};
  }

  .bx--slider__thumb {
    background: ${theme.color.brand01};
  }

  .bx--slider__thumb:active {
    background: ${color(theme.color.brand01).darken(5)};
  }

  .bx--order-summary {
    background-color: ${theme.color.ui01};
  }

  .bx--order-header {
    border-bottom-color: ${theme.color.ui05};
  }

  .bx--order-header .bx--dropdown {
    background-color: ${theme.color.ui01};
  }

  .bx--order-header .bx--dropdown[data-value=''] .bx--dropdown-text,
  .bx--order-header .bx--dropdown-text {
    color: ${theme.color.brand01};
  }

  .bx--order-list {
    border-bottom-color: ${theme.color.ui05};
  }

  .bx--order-detail {
    color: ${theme.color.text02};
  }

  .bx--order-total-price span {
    color: ${theme.color.text02};
  }

  .bx--order-total-subtitle {
    color: ${theme.color.text02};
  }

  .bx--order-footer-text {
    color: ${theme.color.text02};
  }

  .bx--tile {
    background-color: ${theme.color.ui01};
    border-color: ${theme.color.ui03};
  }

  .bx--tile:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--tile--clickable:hover,
  .bx--tile--selectable:hover,
  .bx--tile--expandable:hover {
    border-color: ${theme.color.ui04};
  }

  .bx--tile--clickable:hover .bx--tile__chevron svg,
  .bx--tile--clickable:focus .bx--tile__chevron svg,
  .bx--tile--selectable:hover .bx--tile__chevron svg,
  .bx--tile--selectable:focus .bx--tile__chevron svg,
  .bx--tile--expandable:hover .bx--tile__chevron svg,
  .bx--tile--expandable:focus .bx--tile__chevron svg {
    fill: ${theme.color.brand01};
  }

  .bx--tile--clickable:focus,
  .bx--tile--expandable:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--tile--selectable:focus {
    border-color: ${theme.color.brand01};
  }

  .bx--tile--is-clicked {
    border-color: ${theme.color.ui04};
  }

  .bx--tile__checkmark:focus,
  .bx--tile__chevron:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--tile__checkmark svg {
    background-color: ${color(theme.color.ui01).setAlpha(0.25)};
    fill: ${color(theme.color.brand01).setAlpha(0.25)};
  }

  .bx--tile__chevron svg {
    fill: ${theme.color.ui05};
  }

  .bx--tile--is-selected,
  .bx--tile--is-selected:hover,
  .bx--tile--is-selected:focus {
    border-color: ${theme.color.brand01};
  }

  .bx--tile-input:checked + .bx--tile__checkmark svg {
    fill: ${theme.color.brand01};
    background-color: ${theme.color.ui01};
  }

  .bx--lightbox__btn:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--lightbox__btn svg {
    fill: ${theme.color.ui05};
  }

  .bx--lightbox__footer {
    background: ${theme.color.ui01};
  }

  .bx--filmstrip-btn:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--carousel__btn:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--carousel__btn svg {
    fill: ${theme.color.brand01};
  }

  .bx--carousel__item:hover,
  .bx--carousel__item:focus {
    outline-color: ${theme.color.brand01};
  }

  .bx--carousel__item--active {
    outline-color: ${theme.color.brand01};
  }

  .bx--footer {
    border-top-color: ${theme.color.brand01};
    background-color: ${theme.color.ui01};
  }
`;
