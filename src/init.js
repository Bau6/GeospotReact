export function initStore(store) {
    store.subscribe(() => console.log(store.getState()));
}