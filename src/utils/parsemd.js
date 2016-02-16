import RegExp from 'core-js/fn/regexp/constructor';
import flatMap from 'lodash/flatMap';
import zipWith from 'lodash/zipWith';

// TODO rewrite on md ast, this is wrong in some situations
export default (componentRe, str) => {
  const regexpG = new RegExp(componentRe, 'g');

  const strArray = str.split('```');

  const keys = strArray
    .reduce(
      (r, s, index) => ([
        ...r,
        ...(
          index % 2 === 0
            ? s.match(regexpG) || []
            : []
        ),
      ]),
      []
    );

  const data = keys.reduce(
    (r, key) => flatMap(r, (v) => v.split(key)),
    [str]
  );

  return zipWith(
    data,
    keys
      .map(key => key.match(componentRe)[1]),
    (md, componentKey) => ({ md, componentKey })
  );
};
