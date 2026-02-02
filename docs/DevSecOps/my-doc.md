---
id: my-doc-id
title: DevSecOps Intro
description: My document description
slug: /DevSecOps Intro
---

## Welcome to the world or DevSecOps

Before we can start you have to finish the tutorial so let's create links

## Links

Let's see how to [Create a react page](/create-a-page).
Let's see how to [Create a markdown page](/create-a-page.md).

# Images

![Docusaurus logo](/img/docusaurus.png)

# Code Blocks

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

Admonitions (I guess)

:::tip[My tip]

Use this awesome feature option

:::

:::danger[Take care]

This action is dangerous

:::

> Admonition Test
> Test

Markdown text with [links](./hello.md)

MDX and React Components

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !