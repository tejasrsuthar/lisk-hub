const accounts = {
  genesis: {
    passphrase: 'wagon stock borrow episode laundry kitten salute link globe zero feed marble',
    publicKey: 'c094ebee7ec0c50ebee32918655e089f6e1a604b83bcaa760293c61e0f18ab6f',
    address: '16313739661670634666L',
    balance: '9967542080836600',
  },
  delegate: {
    passphrase: 'recipe bomb asset salon coil symbol tiger engine assist pact pumpkin visit',
    publicKey: '86499879448d1b0215d59cbf078836e3d7d9d2782d56a2274a568761bff36f19',
    address: '537318935439898807L',
    username: 'genesis_17',
    balance: 1000e8,
  },
  'empty account': {
    passphrase: 'stay undo beyond powder sand laptop grow gloom apology hamster primary arrive',
    publicKey: '197cf311f678406bc72a8edfdc3dffe6f59f49c4550a860e4b68fb20382211d0',
    address: '5932438298200837883L',
    balance: 0,
  },
  'delegate candidate': {
    passphrase: 'right cat soul renew under climb middle maid powder churn cram coconut',
    publicKey: '35c6b25520fc868b56c83fed6e1c89bb350fb7994a5da0bcea7a4f621f948c7f',
    address: '544792633152563672L',
    username: 'test',
  },
  'second passphrase candidate': {
    passphrase: 'dolphin inhale planet talk insect release maze engine guilt loan attend lawn',
    publicKey: 'ecf6a5cc0b7168c7948ccfaa652cce8a41256bdac1be62eb52f68cde2fb69f2d',
    address: '4264113712245538326L',
  },
  'send all account': {
    passphrase: 'oyster flush inquiry bright leopard gas replace ball hold pudding teach swear',
    publicKey: 'c5e64031407c3ca8d526bf7404f7c78ab60ea0792e90393a73b3b06a8c8841d4',
    address: '16422276087748907680L',
  },
  'second passphrase account': {
    passphrase: 'awkward service glimpse punch genre calm grow life bullet boil match like',
    publicKey: 'fab9d261ea050b9e326d7e11587eccc343a20e64e29d8781b50fd06683cacc88',
    secondPassphrase: 'forest around decrease farm vanish permit hotel clay senior matter endorse domain',
    address: '1155682438012955434L',
    balance: 1000e8,
    secondSignature: 1,
  },
};
accounts['any account'] = accounts.genesis;


module.exports = accounts;
