# hotwallet-api
A JavaScript/TypeScript browser api for interacting with [Hotwallet](https://github.com/Hotmoka/hotwallet-browser.git), the wallet browser extension of [Hotmoka](https://www.hotmoka.io) blockchain.
This library gets injected by the Hotwallet browser extension into the current document.

## Usage

```js
import { isExtensionAvailable, StorageValueFactory } from 'hotwallet-api'

// check if Hotwallet extension is available 
isExtensionAvailable().then(isAvailable => {
    
    if (isAvailable) {
        // access hotwalletApi instance of window object
        // try to connect to Hotwallet
        window.hotwalletApi.connect().then(account => {
            alert('Connected successfully Hotwallet')
        })
        .catch(err => alert(err.message))
    } else {
        alert('Hotwallet extension not installed')
    }
})
.catch(() => alert('Hotwallet extension not installed'))

// send transaction
window.hotwalletApi.sendTransaction({
    smartContractAddress: {
        type: 'local',
        hash: '...'
    },
    methodSignature: {
        instanceMethod: true,
        voidMethod: true,
        definingClass: 'HelloWorld',
        methodName: 'testMe',
        formals: ['java.math.BigInteger', 'java.lang.String']
    },
    receiver: {
        type: 'local',
        hash: '...'
    },
    actuals: [
        StorageValueFactory.newStorageValue('20000', 'java.math.BigInteger'),
        StorageValueFactory.newStorageValue('hello world', 'java.lang.String'),
    ],
    amount: '5000',
    name: 'Transaction test'
})
.then(result => ...)
.catch(err => ...)
```


## Build

### Requirements

-   [Node.js](https://nodejs.org)
-   [npm](https://www.npmjs.com/)

### Install dependencies
```bash
npm install
```
### Bundle source code

```bash
npm run bundle
```

## Tests
```bash
npm run test:all
```
# https://tea.xyz/what-is-this-file
---
version: 1.0.0
codeOwners:
  - '0x611d75e641Fd3626C42c3547B16F5178063B4867'
quorum: 1
