import { AsyncStorage } from 'react-native';

export function asyncStorageServiceSetItem(key, value) {
    return new Promise((resolve, reject) => {
        AsyncStorage.setItem(key, value)
            .then(() => resolve())
            .catch(() => reject())
    });
}

export function asyncStorageServiceRemoveItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.removeItem(key)
            .then(() => resolve())
            .catch(() => reject())
    });
}

export function asyncStorageServiceGetItem(key) {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(key)
            .then(res => resolve(res))
            .catch(error => reject(error))
    });
}