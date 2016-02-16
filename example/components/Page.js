import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import Markdown from 'react-components-markdown';
import pageStyles from './Page.sass';
import mdContent from '../../README.md';
import SuperComponent from './SuperComponent';

export const page = ({ styles, content }) => (
  <div className={styles.main}>
    <Markdown
      exampleMain={
        <SuperComponent>
          HELLO AFRICA
        </SuperComponent>
      }
      exampleSecondary={
        <SuperComponent />
      }
    >
      {content}
    </Markdown>
  </div>
);

export const pageHOC = compose(
  defaultProps({
    styles: pageStyles,
    content: mdContent,
  }),
);

export default pageHOC(page);
