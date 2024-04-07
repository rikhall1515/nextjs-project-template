module.exports = {
  // Type check TypeScript files
  "*/**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // Lint & Prettify TS and JS files
  "*/**/*.(ts|tsx|js)": [
    `prettier --write`,
    `eslint`
  ],

  // Prettify only Markdown and JSON files
  "*/**/*.(md|json|css)":
    `prettier --write`,
};
