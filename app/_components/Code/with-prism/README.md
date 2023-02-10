# How to use

## 1. Import the client component that scan the DOM and "hydrate" the syntax highlight

```tsx
// in app/page.tsx
import { CodeSyntaxHighlighterEnabler } from './_components/Code/with-prism/CodeSyntaxHighlighterEnabler';

export default function Page () {
    return (
        <>
          <CodeSyntaxHighlighterEnabler />
        </>
    )
}
```

## 2. Choose a theme

```tsx
// in _components/Code/with-prism/Code.tsx

// =================================
// Offical "prismjs" themes
// =================================

// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
import "prismjs/themes/prism-solarizedlight.css"; // enabled
// import "prismjs/themes/prism-tomorrow.css";
// import "prismjs/themes/prism-twilight.css";
// import "prismjs/themes/prism.css";

```

## 3. Use it

```tsx
// in app/page.tsx
import { Code } from './_components/Code/with-prism/Code';

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


