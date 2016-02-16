import React from 'react';
import superComponentStyles from './SuperComponent.sass';

export default ({ children = 'DEFAULT TEXT', styles = superComponentStyles }) => (
  <div className={styles.main}>
    <div className={styles.title}>
      This is my super component
    </div>
    {children}
  </div>
);
