import React from 'react';
import compose from 'recompose/compose';
import defaultProps from 'recompose/defaultProps';
import mapPropsOnChange from 'recompose/mapPropsOnChange';
import mapProps from 'recompose/mapProps';
import pure from 'recompose/pure';
import parsemd from './utils/parsemd';
import MarkdownPart from './MarkdownPart';

export const markdownIt = ({ mdAndComps, wrap, styles }) => (
  <div>
    {
      mdAndComps
      .map(({ md, component, componentKey }, index) => ([
        md && <MarkdownPart key={`md-${index}`} styles={styles}>{md}</MarkdownPart>,
        wrap({ component, componentKey }),
      ]))
    }
  </div>
);

export const markdownItHOC = compose(
  defaultProps({
    anchorOffset: -90,
    componentRe: /\[[^\]]*\][^\(]*\(.*github\.io.*#([\w]+)\)/,
  }),
  mapPropsOnChange(
    ['anchorOffset'],
    ({ anchorOffset }) => ({
      wrap: ({ component, componentKey }) => {
        let newComponent;
        if (component) {
          newComponent = {
            ...component,
            key: `component-${componentKey ? `${componentKey}-` : ''}key`,
          };
        }
        return ([
          <a
            style={{
              display: 'block',
              position: 'relative',
              top: anchorOffset,
              visibility: 'hidden',
            }}
            name={componentKey}
            key={`anchor-${componentKey ? `${componentKey}-` : ''}key`}
          />,
          newComponent,
        ]);
      },
    })
  ),
  mapPropsOnChange(
    ['children'],
    ({ children, componentRe }) => ({
      mdAndCompKeys: parsemd(componentRe, children),
    })
  ),
  pure,
  mapProps(({ ...props, mdAndCompKeys }) => ({
    ...props,
    mdAndComps: mdAndCompKeys
      .map(({ md, componentKey }) => ({
        md,
        componentKey,
        component: props[componentKey],
      })),
  }))
);

export default markdownItHOC(markdownIt);
