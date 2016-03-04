import expect from 'expect';
import React from 'react';
import { mount, render } from 'enzyme';
import MarkdownPart from '../MarkdownPart';
import hlJsCss from 'highlight.js/styles/github.css';

describe('MarkdownPart test', () => {
  // ------------------------------------------------------------------------------------
  // Use jsdom rendering
  // ------------------------------------------------------------------------------------

  it('should render MarkdownPart', () => {
    const component = mount(
      <MarkdownPart styles={{ 'markdown-body': 'md-body' }}>{'# header'}</MarkdownPart>
    );

    const innerDiv = component.find('div').first();
    // can't use contains here because of dangerouslySetInnerHTML
    expect(innerDiv.html()).toEqual('<div class="md-body"><h1>header</h1>\n</div>');
  });

  it('should update content', () => {
    const component = mount(
      <MarkdownPart styles={{ 'markdown-body': 'md-body' }}>{'# header'}</MarkdownPart>
    );

    component.setProps({ children: 'bar' });

    const innerDiv = component.find('div').first();
    expect(innerDiv.html()).toEqual('<div class="md-body"><p>bar</p>\n</div>');
  });

  it('should update content on style changes', () => {
    const component = mount(
      <MarkdownPart styles={{ 'markdown-body': 'md-body' }}>{'# header'}</MarkdownPart>
    );

    component.setProps({ styles: { 'markdown-body': 'md-body-new' } });

    const innerDiv = component.find('div').first();
    expect(innerDiv.html()).toEqual('<div class="md-body-new"><h1>header</h1>\n</div>');
  });

  // ------------------------------------------------------------------------------------
  // Use html rendering
  // ------------------------------------------------------------------------------------

  it('should draw code', () => {
    const component = render(
      <MarkdownPart>{`
\`\`\`javascript
  const x = 'Hello World';
\`\`\`
      `}
      </MarkdownPart>
    );

    const innerDiv = component.find(`.${hlJsCss['hljs-string']}`);
    expect(innerDiv.html()).toEqual('&apos;Hello World&apos;');
  });

  it('should set default classNames if style is empty object', () => {
    const component = render(
      <MarkdownPart styles={{}}>{`
\`\`\`javascript
  const x = 'Hello World';
\`\`\`
      `}
      </MarkdownPart>
    );

    const innerDiv = component.find('.hljs-string');
    expect(innerDiv.html()).toEqual('&apos;Hello World&apos;');
  });
});
