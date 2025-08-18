declare global {
    interface ImportMeta {
        env?: unknown;
    }
}
/**
 * On the server, replaced with the value passed in.
 * On the client, replaced with `undefined`.
 */
declare const serverOnly$: <T>(value: T) => T | undefined;
/**
 * On the client, replaced with the value passed in.
 * On the server, replaced with `undefined`.
 */
declare const clientOnly$: <T>(value: T) => T | undefined;

export { clientOnly$, serverOnly$ };
