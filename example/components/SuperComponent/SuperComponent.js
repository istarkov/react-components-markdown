import React from 'react';
import superComponentStyles from './SuperComponent.sass';

export default ({ children = 'DEFAULT TEXT', styles = superComponentStyles }) => (
  <div className={styles.main}>
    {children}
  </div>
);
