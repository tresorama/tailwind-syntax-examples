import { Code } from "./_components/Code/with-bright/Code";
import "primeicons/primeicons.css";

// main component

const MAIN_BG = "bg-[#24242E]"; // shared background between page and code blocks

export default function Page() {
  return (
    <div className={`h-screen overflow-auto ${MAIN_BG} text-white`}>
      <h1 className="mb-0 py-28 px-8 text-6xl font-thin tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-500">
        Tailwind Syntax Examples
      </h1>
      <div className="px-8 flex flex-col gap-0">
        <Card_One />
        <CardSeparator />
        <Card_Two />
        <CardSeparator />
        <Card_Three />
        <CardSeparator />
        <Card_Four />
        <CardSeparator />
        <Card_Five />
        <CardSeparator />
        <Card_Six />
      </div>
      <div className="mt-40 mb-20 px-8 text-center text-zinc-500">
        <p className="mb-2">
          Syntax Highlight by{" "}
          <FooterLink href="https://bright.codehike.org" label="bright" />
        </p>
        <p>
          Created by{" "}
          <FooterLink
            href="https://github.com/tresorama"
            label="Jacopo Marrone"
            icon="pi pi-github"
          />
        </p>
      </div>
    </div>
  );
}

// reusable components

const FooterLink = (props: { href: string; label: string; icon?: string }) => (
  <a
    className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-300"
    href={props.href}
  >
    {props.label}
    <i className={`text-[1em] ${props.icon ?? "pi pi-external-link"}`} />
  </a>
);

const CardSeparator = () => (
  <hr className="mx-auto my-20 w-16 border-zinc-500" />
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="py-6 px-6 rounded-xl shadow-xl border-4 border-zinc-800">
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-8 text-3xl font-semibold">{children}</h2>
);
const CardSubTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2 text-md font-light opacity-60">{children}</div>
);
const CardCodeWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-12 gap-8">{children}</div>
);
const CardCodeInput = ({ inputHTML }: { inputHTML: string }) => (
  <div className="col-span-12 lg:col-span-6">
    <CardSubTitle>Input</CardSubTitle>
    <div className={`rounded-xl shadow-xl ${MAIN_BG} border-4 border-zinc-800`}>
      <Code language="html">{inputHTML}</Code>
    </div>
  </div>
);
const CardCodeOutput = ({
  outputHTML,
  outputCSS,
}: {
  outputHTML: string;
  outputCSS: string;
}) => (
  <div className="col-span-12 lg:col-span-6">
    <CardSubTitle>Output</CardSubTitle>
    <div className={`rounded-xl shadow-xl ${MAIN_BG} border-4 border-zinc-800`}>
      <Code language="html">{outputHTML}</Code>
      <p className="mt-6 px-4 opacity-30">{`// css`}</p>
      <Code language="css">{outputCSS}</Code>
    </div>
  </div>
);

// specific components

const Card_One = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="p-8 flex"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="p-8 flex"></div>`}
          outputCSS={`
.p-8 {
  padding: 1rem;
}
.flex {
  display: flex;
}
        `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Two = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="p-[2rem] mt-[5vw]"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="p-[2rem] mt-[5vw]"></div>`}
          outputCSS={`
.p-[2rem] {
  padding: 2rem;
}
.mt-[5vw] {
  margin-top: 5vw;
}
`}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Three = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput inputHTML={`<div class="p-[calc(100%-5rem)]"></div>`} />
        <CardCodeOutput
          outputHTML={`<div class="p-[calc(100%-5rem)]"></div>`}
          outputCSS={`
.p-[calc(100%-5rem)] {
  padding: calc(100% - 5rem);
}
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Four = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput
          inputHTML={`<div class="p-[calc(100%-theme(space.8))]"></div>`}
        />
        <CardCodeOutput
          outputHTML={`<div class="p-[calc(100%-theme(space.8))]"></div>`}
          outputCSS={`
.p-[calc(100%-theme(space.8))] {
  padding: calc(100% - 2rem);
}

/* theme(space.8) will be converted 
   to 2rem by the compiler, based on the 
   theme config for space.
*/      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Five = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput
          inputHTML={`<div class="[padding:5vw] [align-items:inherit]"></div>`}
        />
        <CardCodeOutput
          outputHTML={`<div class="[padding:5vw] [align-items:inherit]"></div>`}
          outputCSS={`
.[padding:5vw] {
  padding: 5vw;
}
.[align-items:inherit] {
  align-items: inherit;
}
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
const Card_Six = () => {
  return (
    <Card>
      {/* <CardTitle>Hello</CardTitle> */}
      <CardCodeWrapper>
        <CardCodeInput
          inputHTML={`<div class="[margin:theme(space.8)]"></div>`}
        />
        <CardCodeOutput
          outputHTML={`<div class="[margin:theme(space.8)]"></div>`}
          outputCSS={`
.[margin:theme(space.8)] {
  margin: 2rem;
}

/* theme(space.8) will be converted 
   to 2rem by the compiler, based on the 
   theme config for space.
*/
      `}
        />
      </CardCodeWrapper>
    </Card>
  );
};
