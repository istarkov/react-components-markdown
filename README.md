[![Build Status](https://travis-ci.org/istarkov/react-components-markdown.svg?branch=master)](https://travis-ci.org/istarkov/react-components-markdown)

# Notice

This library is highly outdated, IMO [markdown-in-js](https://github.com/threepointone/markdown-in-js) is much more better, please use it.

# React Components Markdown

React component to render markdown with React components inside

## Example

This library allow to create interactive documentation from md files.

i.e. this [html-hint README.md](https://github.com/istarkov/html-hint/blob/master/README.md)

become this [html-hint README with examples](http://istarkov.github.io/html-hint/)

in just few lines of [React code](https://github.com/istarkov/html-hint/blob/master/example/components/Page.js#L15-L32)

(_this library github.io example is also build with this library_)

## How to

Create `readme.md` for your component

```md
# Component Help

Lorem ipsum dolor sit amet, consectetur adipiscing elit
[My super example](http://istarkov.github.io/html-hint/#exampleSuperMain)
Duis aute irure dolor in reprehenderit
[My super example with props](http://istarkov.github.io/html-hint/#exampleSuperProps)
```

Use it in React

```javascript
import readme from './readme.md';
import Markdown from 'react-components-markdown';
import MySuperReactExample from './my-super-react-example';

export default () => (
  <Markdown
    exampleSuperMain={<MySuperReactExample />}
    exampleSuperProps={<MySuperReactExample a={1} b={2} />}
  >
    {content}
  </Markdown>
);
```

Component will replace all refs to github.io into React elements,
mapping hashes to `Markdown` element props.

Also you can define a custom match regexp

```javascript
<Markdown
  componentRe={/\[[^\]]*\][^\(]*\(.*github\.io.*#([\w]+)\)/}
...  
```

## Example

This markdown file is also example.

You can use SuperComponent with children

```javascript
( <SuperComponent>
    HELLO AFRICA
  </SuperComponent> )
```

[My super example, click to view](http://istarkov.github.io/react-components-markdown/#exampleMain)

Or just

```javascript
( <SuperComponent /> )
```

[My super example 2, click to view](http://istarkov.github.io/react-components-markdown/#exampleSecondary)


## Styling

If you are using or want to use [css-modules](https://github.com/css-modules/css-modules)

Setup your webpack loader for css as [here](https://github.com/istarkov/react-components-markdown/blob/master/config/loaders.js#L38-L44)

Install `github-markdown-css` and `highlight.js` for default styles.

Import styles from installed libraries

```javascript
import githubCss from 'github-markdown-css/github-markdown.css';
// There are many color schemas for highlight choose any
import hlJsCss from 'highlight.js/styles/github.css';

// combine styles into one
const styles = {...githubCss, ...hlJsCss};

....
// use styles as Markdown property
(
<Markdown
  styles={styles}
  ...
)

```

If you are not using css-modules, just include css from this project

`react-components-markdown/lib/markdown.css`

(_all classes are hashed like `.github-markdown__markdown-body__b21c5` so
will not pollute your styles_)

## Use this project as boilerplate for hot reloadable libraries with documentation

```bash
git clone git@github.com:istarkov/react-components-markdown.git
cd react-components-markdown
npm install
npm run start
```

And goto in browser to `localhost:4000`

You will get hot reloadable env, to create your React Component.
