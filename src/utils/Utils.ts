export const asyncLocalStorage = {
    setItem: (key: string, value: string) => {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: (key: string) => {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    },
};

let _nextId: number = 0;

export function nextId(): string {
    _nextId++;
    return `id-${_nextId}`;
}

export function isDPP() {
    return ['cpp', 'dpp', 'cyfrowypaszportproduktow', 'cyfrowypaszportproduktowy', 'paszportcyfrowy', 'digital-product-passport'].some((keyword) => window.location.hostname.includes(keyword))
}