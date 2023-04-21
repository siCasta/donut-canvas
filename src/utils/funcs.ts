export const $ = <E extends Element>(query: string) =>
    document.querySelector<E>(query)!
