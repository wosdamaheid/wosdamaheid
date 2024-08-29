import baseConfig, { restrictEnvAccess } from "@wosdamaheid/eslint-config/base";
import nextjsConfig from "@wosdamaheid/eslint-config/nextjs";
import reactConfig from "@wosdamaheid/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
