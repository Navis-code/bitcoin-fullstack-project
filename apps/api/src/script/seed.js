const MongoClient = require('mongodb').MongoClient;

const db = 'YOUR_DB_URL_STRING';

const fakeData = [
  {
    accountName: 'Test Account 1',
    category: 'Affiliates',
    tag: 'test',
    balance: 10,
    availableBalance: 8,
  },
  {
    accountName: 'Test Account 2',
    category: 'Affiliates',
    tag: 'test',
    balance: 2,
    availableBalance: 2,
  },
  {
    accountName: 'Test Account 3',
    category: 'Affiliates',
    tag: 'test',
    balance: 23,
    availableBalance: 2,
  },
  {
    accountName: 'Test Account 4',
    category: 'Affiliates',
    tag: 'test',
    balance: 38.2,
    availableBalance: 22.1,
  },
  {
    accountName: 'Test Account 5',
    category: 'Affiliates',
    tag: 'test',
    balance: 222.22,
    availableBalance: 102.5,
  },
  {
    accountName: 'Test Account 6',
    category: 'Affiliates',
    tag: 'test',
    balance: 34,
    availableBalance: 12.69,
  },
  {
    accountName: 'Test Account 7',
    category: 'Affiliates',
    tag: 'test',
    balance: 211.45,
    availableBalance: 102.5,
  },
  {
    accountName: 'Test Account 8',
    category: 'Affiliates',
    tag: 'test',
    balance: 0.48,
    availableBalance: 0.15,
  },
  {
    accountName: 'Test Account 9',
    category: 'Affiliates',
    tag: 'test',
    balance: 55.24,
    availableBalance: 21.66,
  },
  {
    accountName: 'Test Account 10',
    category: 'Affiliates',
    tag: 'test',
    balance: 77.14,
    availableBalance: 65.5,
  },
  {
    accountName: 'Test Account 11',
    category: 'Affiliates',
    tag: 'test',
    balance: 123.4,
    availableBalance: 55.5,
  },
  {
    accountName: 'Test Account 12',
    category: 'Affiliates',
    tag: 'test',
    balance: 2.5,
    availableBalance: 2.5,
  },
  {
    accountName: 'Test Account 13',
    category: 'Affiliates',
    tag: 'test',
    balance: 13,
    availableBalance: 11.2,
  },
  {
    accountName: 'Test Account 14',
    category: 'Affiliates',
    tag: 'test',
    balance: 0.22,
    availableBalance: 0.22,
  },
  {
    accountName: 'Test Account 15',
    category: 'Affiliates',
    tag: 'test',
    balance: 2.22,
    availableBalance: 1.5,
  },
];

async function seed() {
  const client = new MongoClient(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('connected to server ✅');

    const collection = client.db('Bitcointest').collection('accounts');
    collection.drop();

    await collection.insertMany(fakeData);

    console.log('Database seeded! 👍');
    client.close();
  } catch (err) {
    console.error(err.stack);
  }
}

seed();
