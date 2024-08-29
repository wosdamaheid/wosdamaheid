import baseConfig from "@wosdamaheid/eslint-config/base";
import reactConfig from "@wosdamaheid/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
