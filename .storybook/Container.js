import React, { Component } from 'react';
import './polyfills';
import './_container.scss';
import { ThemeProvider } from 'emotion-theming';
import { css } from 'emotion';

export default class Container extends Component {
  render() {
    const { story } = this.props;

    return (
      <ThemeProvider
        theme={{
          brand01: 'green', //'#3d70b2',
          brand02: '#5596e6',
          brand03: '#7fd988',
          ui01: '#ffffff',
          ui02: '#f5f7fa',
          ui03: '#f0f3f6',
          ui04: '#dfe3e6',
          ui05: '#8c9ba5',
          text01: '#152934',
          text02: '#5a6872',
          text03: '#5a6872',
          inverse01: '#ffffff',
          field01: '#ebf0f7',
          suport01: '#e71d32',
          suport02: '#5aa700',
          suport03: '#efc100',
          suport04: '#5aaafa',
        }}>
        <div
          role="main"
          className={css`
            padding: 3em;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}>
          {story()}
        </div>
      </ThemeProvider>
    );
  }
}
