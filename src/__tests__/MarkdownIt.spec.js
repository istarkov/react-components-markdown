import expect from 'expect';
import React from 'react';
import { mount } from 'enzyme';
import Markdown from '../index';

describe('Markdown test', () => {
  it('should render Components and Markdown', () => {
    const component = mount(
      <Markdown
        styles={{ 'markdown-body': 'md-body' }}
        example={<div className={'example'}>EXAMPLE</div>}
      >
      {`
# hello
[example](http://blablabla.github.io/react-components-markdown/#example)
world
      `}
      </Markdown>
    );

    const exampleComponent = component.find('.example').first();
    expect(exampleComponent.text()).toEqual('EXAMPLE');

    const mds = component.find('.md-body').map((c) => c.html());
    expect(mds).toEqual([
      '<div class="md-body"><h1>hello</h1>\n</div>',
      '<div class="md-body"><p>world</p>\n</div>',
    ]);
  });

  it('should update components on prop changes', () => {
    const component = mount(
      <Markdown
        example={<div className={'example'}>EXAMPLE</div>}
      >
      {`
# hello
[example](http://blablabla.github.io/react-components-markdown/#example)
world
      `}
      </Markdown>
    );

    component.setProps({ example: <div className={'changed'}>CHANGED</div> });
    const changedComponent = component.find('.changed').first();
    expect(changedComponent.text()).toEqual('CHANGED');
  });

  it('should allow different regexes', () => {
    const component = mount(
      <Markdown
        example={<div className={'example'}>EXAMPLE</div>}
        componentRe={/---([\w]+)/}
      >
      {`
# hello
---example
world
      `}
      </Markdown>
    );

    const exampleComponent = component.find('.example').first();
    expect(exampleComponent.text()).toEqual('EXAMPLE');
  });
});
