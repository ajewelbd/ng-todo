export const getFromStorage = (key: string) => localStorage.getItem(key);

export const setToStorage = (key: string, value: any) => localStorage.setItem(key, value);

export const removeFromStorage = (key: string) => localStorage.removeItem(key)

export const toJson = (value: string) => JSON.parse(value); 

export const toString = (value: any) => JSON.stringify(value);

export const uuid = () => crypto.randomUUID();