import localforage from 'localforage';

const STORAGE_NAME = 'store';

const storage = {

  async init( data ) {
    let store = await this.getStorage( STORAGE_NAME );
    if( !store ) store = await this.setStorage( data );
    else store = await this.setStorage({ ...data, todos: store.todos });

    return store;
  },

  async getStorage() {
    return await localforage.getItem( STORAGE_NAME );
  },

  async setStorage( store ) {
    let result;
    try{
      result = await localforage.setItem( STORAGE_NAME, store );
      if( !result.todos ) throw new Error( result );
    } catch( error ) {
      throw new Error( error );
    }

    return result;
  },

  async updateStorage( store ) {
    return await this.setStorage( store );
  },
};

export default storage;