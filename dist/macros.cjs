"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/macros.ts
var macros_exports = {};
__export(macros_exports, {
  clientOnly$: () => clientOnly$,
  serverOnly$: () => serverOnly$
});
module.exports = __toCommonJS(macros_exports);

// package.json
var name = "vite-env-only";

// src/macros.ts
var import_meta = {};
var usingVite = import_meta.env && typeof import_meta.env === "object" && "MODE" in import_meta.env && "BASE_URL" in import_meta.env && "PROD" in import_meta.env && "DEV" in import_meta.env && "SSR" in import_meta.env;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clientOnly$,
  serverOnly$
});
