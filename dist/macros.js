import {
  name
} from "./chunk-X65BXG72.js";

// src/macros.ts
var usingVite = import.meta.env && typeof import.meta.env === "object" && "MODE" in import.meta.env && "BASE_URL" in import.meta.env && "PROD" in import.meta.env && "DEV" in import.meta.env && "SSR" in import.meta.env;
var maybe = (value) => {
  if (!usingVite)
    return value;
  throw Error(
    [
      `${name}: unreplaced macro`,
      "",
      `Did you forget to add the 'envOnlyMacros' plugin from '${name}' to your Vite config?`,
      "\u{1F449} https://github.com/pcattori/vite-env-only#macros"
    ].join("\n")
  );
};
var serverOnly$ = maybe;
var clientOnly$ = maybe;
export {
  clientOnly$,
  serverOnly$
};
