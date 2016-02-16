# React Components Markdown

React component to render markdown with React components inside

## Example

Create `readme.md` for your component

```md
# Component Help

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

[My super example](http://istarkov.github.io/html-hint/#exampleSuperMain)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum

[My super example with props](http://istarkov.github.io/html-hint/#exampleSuperProps)
```

Create react element

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

Component will replace all refs to github.io into React elements defined in props of `Markdown`
element.

Also you can define a custom match regexp

```javascript
<Markdown
  componentRe={/\[[^\]]*\][^\(]*\(.*github\.io.*#([\w]+)\)/}
...  
```

#### Example

This markdown file is also example below in markdown you will see the link
And at github.io you will see the Component example

You can use SuperComponent with children

```javascript
( <SuperComponent>
    HELLO AFRICA
  </SuperComponent> )
```

[My super example](http://istarkov.github.io/html-hint/#exampleMain)

Or just

```javascript
( <SuperComponent /> )
```

[My super example 2](http://istarkov.github.io/html-hint/#exampleSecondary)

Example source

To run example

```bash
git clone git@github.com:istarkov/react-components-markdown.git
cd react-components-markdown
npm install
npm run start
```

And goto in browser to `localhost:4000`
