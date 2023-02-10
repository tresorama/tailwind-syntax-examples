import { Code as Code_Bright } from "bright";
import minDarkModded from "./additional-themes/min-dark.modded.json";

// Choose default global theme
Code_Bright.theme = minDarkModded;

export const Code = ({
  children,
  language,
}: {
  children: React.ReactNode;
  language: string;
}) => {
  return (
    /* @ts-expect-error Server Component */
    <Code_Bright lang={language}>
      {typeof children === "string" ? children.trim() : children}
    </Code_Bright>
  );
};
