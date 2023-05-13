import AsyncStorage from '@react-native-async-storage/async-storage';

export class LocalStorage {
  getItem<T>(key: string, init?: T): T | undefined {
    return Storage.getItem<T>(key, init);
  }

  setItem<T>(key: string, item: T): boolean {
    return Storage.setItem<T>(key, item);
  }

  remove(key: string): boolean {
    return Storage.remove(key);
  }

  clear(): boolean {
    return Storage.clear();
  }

  getAllKeys() {
    return Storage.getAllKeys();
  }
}

export class Storage {
  static getItem<T>(key: string, init?: T): T | undefined {
    try {
      const item: any = AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : init;
    } catch (err) {
      console.log('error get item', err);
      return init;
    }
  }

  static setItem<T>(key: string, item: T): boolean {
    try {
      AsyncStorage.setItem(key, JSON.stringify(item));
      return true;
    } catch (err) {
      console.log('error set item', err);
      return false;
    }
  }

  static remove(key: string): boolean {
    try {
      AsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      console.log('error remove item', err);
      return false;
    }
  }

  static clear(): boolean {
    try {
      AsyncStorage.clear();
      return true;
    } catch (err) {
      console.log('error clear storage', err);
      return false;
    }
  }

  static getAllKeys() {
    AsyncStorage.getAllKeys().then((keys: any) => {
      return AsyncStorage.multiGet(keys)
        .then((result: any) => {
          console.log('get all keys storage', result);
        })
        .catch((error: any) => console.log('error get all keys storage', error));
    });
  }
}
