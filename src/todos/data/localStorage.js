const localStorageKey = 'vn-redux';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(localStorageKey);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.warn('Somesing went wrong', err);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(localStorageKey, serializedState);
    } catch (err) {
        console.warn('Somesing went wrong', err);
    }
};
