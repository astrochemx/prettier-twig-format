// @ts-check

/** @type {import('prettier').Config} */
const prettierConfigDefault = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  experimentalOperatorPosition: "end",
  experimentalTernaries: false,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxSingleQuote: false,
  objectWrap: "preserve",
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  vueIndentScriptAndStyle: false,
};

/** @type {import('prettier').Config} */
const prettierConfig = {
  ...prettierConfigDefault,
  printWidth: 100,
  overrides: [
    {
      files: ["anywhere.html.twig", "anywhere.raw.html.twig"],
      options: {
        parser: "anywhere",
        plugins: ["prettier-plugin-tailwindcss", "@ttskch/prettier-plugin-tailwindcss-anywhere"],
      },
    },
    {
      files: ["zackad.html.twig", "zackad.raw.html.twig"],
      options: {
        parser: "twig",
        plugins: ["@zackad/prettier-plugin-twig", "prettier-plugin-tailwindcss"],
      },
    },
  ],
};

/** @type {import('prettier').Config} */
export default prettierConfig;
