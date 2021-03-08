const MongoClient = require('mongodb').MongoClient;

const db = 'YOUR_DB_URL_STRING';

const fakeData = [
  {
    accountName: 'Test Account 1',
    category: 'Affiliates',
    tag: 'test',
    balance: 10,
    availableBalance: 8,
    id: '85XB5',
  },
  {
    accountName: 'Test Account 2',
    category: 'Affiliates',
    tag: 'test',
    balance: 2,
    availableBalance: 2,
    id: 'Y8F33',
  },
  {
    accountName: 'Test Account 3',
    category: 'Affiliates',
    tag: 'test',
    balance: 23,
    availableBalance: 2,
    id: 'UL4JS',
  },
  {
    accountName: 'Test Account 4',
    category: 'Affiliates',
    tag: 'test',
    balance: 38.2,
    availableBalance: 22.1,
    id: '2P1RU',
  },
  {
    accountName: 'Test Account 5',
    category: 'Affiliates',
    tag: 'test',
    balance: 222.22,
    availableBalance: 102.5,
    id: 'C42YA',
  },
  {
    accountName: 'Test Account 6',
    category: 'Affiliates',
    tag: 'test',
    balance: 34,
    availableBalance: 12.69,
    id: '8O3KO',
  },
  {
    accountName: 'Test Account 7',
    category: 'Affiliates',
    tag: 'test',
    balance: 211.45,
    availableBalance: 102.5,
    id: 'MUW6L',
  },
  {
    accountName: 'Test Account 8',
    category: 'Affiliates',
    tag: 'test',
    balance: 0.48,
    availableBalance: 0.15,
    id: 'MSZWG',
  },
  {
    accountName: 'Test Account 9',
    category: 'Affiliates',
    tag: 'test',
    balance: 55.24,
    availableBalance: 21.66,
    id: 'R4IVR',
  },
  {
    accountName: 'Test Account 10',
    category: 'Affiliates',
    tag: 'test',
    balance: 77.14,
    availableBalance: 65.5,
    id: 'K6CCB',
  },
  {
    accountName: 'Test Account 11',
    category: 'Affiliates',
    tag: 'test',
    balance: 123.4,
    availableBalance: 55.5,
    id: 'F405Q',
  },
  {
    accountName: 'Test Account 12',
    category: 'Affiliates',
    tag: 'test',
    balance: 2.5,
    availableBalance: 2.5,
    id: 'ZY9CE',
  },
  {
    accountName: 'Test Account 13',
    category: 'Affiliates',
    tag: 'test',
    balance: 13,
    availableBalance: 11.2,
    id: '8P0VK',
  },
  {
    accountName: 'Test Account 14',
    category: 'Affiliates',
    tag: 'test',
    balance: 0.22,
    availableBalance: 0.22,
    id: '79N7A',
  },
  {
    accountName: 'Test Account 15',
    category: 'Affiliates',
    tag: 'test',
    balance: 2.22,
    availableBalance: 1.5,
    id: 'JR5E6',
  },
];

const fakeStatements = [
  {
    accountId: '85XB5',
    statements: [
      {
        orderId: 'ASDF',
        orderCode: 'SETTLEMENT',
        credit: 1,
        balance: 1.05,
      },
      {
        orderId: 'FFF',
        orderCode: 'ON RAMP',
        credit: 1,
        balance: 1.05,
      },
      {
        orderId: 'AAS',
        orderCode: 'DEPOSIT',
        debit: 2,
        balance: 0.05,
      },
    ],
  },
  {
    accountId: 'Y8F33',
    statements: [
      {
        orderId: 'BBBAA',
        orderCode: 'SETTLEMENT',
        credit: 2,
        balance: 2.05,
      },
      {
        orderId: 'CCDA',
        orderCode: 'ON RAMP',
        credit: 3,
        balance: 10.05,
      },
      {
        orderId: 'AAFFASS',
        orderCode: 'DEPOSIT',
        debit: 2.5,
        balance: 1.05,
      },
    ],
  },
  {
    accountId: 'UL4JS',
    statements: [
      {
        orderId: 'GGASS',
        orderCode: 'SETTLEMENT',
        credit: 10,
        balance: 21.05,
      },
      {
        orderId: 'OKASS',
        orderCode: 'ON RAMP',
        credit: 3.5,
        balance: 10.05,
      },
      {
        orderId: 'PLAASS',
        orderCode: 'DEPOSIT',
        debit: 18,
        balance: 16.05,
      },
    ],
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

    const collectionStatement = client
      .db('Bitcointest')
      .collection('statements');
    collectionStatement.drop();

    await collectionStatement.insertMany(fakeStatements);

    console.log('Database seeded! 👍');
    client.close();
  } catch (err) {
    console.error(err.stack);
  }
  process.exit();
}

seed();
