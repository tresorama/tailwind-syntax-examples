# How to use

## 1. Choose a theme

```tsx
// in _components/Code/with-bright/Code.tsx

// there are several themes built in
// typescript should autocomplete the options
Code.theme = "github-light"

```

## 3. Use it

```tsx
// in app/page.tsx
import { Code } from './_components/Code/with-bright/Code';

function Example () {
    const code = `
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
<p>Hello</p>
    `.trim();

    return <Code language="html">{code}</Code>
}
```


