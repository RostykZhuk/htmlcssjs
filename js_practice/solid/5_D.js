// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then((r) => r.json());
    return Promise.resolve('data from fetch');
  }
}

class LocalStorage {
  get() {
    const LsData = 'data from local storage';
    return LsData;
  }
}

// Замість того щоб постійно описувати нові способи ми просто можемм міняти інстанси класів

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }
  clientGet() {
    return this.fetch.request('youtube.com');
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }
  clientGet() {
    return this.localStorage.get();
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new FetchClient());
const ls = new Database(new LocalStorageClient());

console.log(db.getData('rand'));
console.log(ls.getData('rand'));
