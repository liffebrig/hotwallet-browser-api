# hotwallet-api
A JavaScript/TypeScript browser api for interacting with [Hotwallet](https://github.com/Hotmoka/hotwallet-browser.git), the browser extension of [Hotmoka's](https://www.hotmoka.io) blockchain wallet

## Usage

```html
// In Browser
<script src="dist/hotwalletApi.js"></script>

<script type="application/javascript">
    const hotwalletApi = new hotwallet.HotwalletApi();
    (async function() {
        try {
            const hotwalletInstalled = await hotwalletApi.isExtensionInstalled();
            if (hotwalletInstalled) {
              alert('Hotwallet browser extension is installed!')  
            } 
        } catch (e) {
            console.error(e);
        }
    })();
</script>
```

```js
// In some JavaScript/Typescript front-end framework
import { HotwalletApi } from 'hotwallet-api'

const hotwalletApi = new HotwalletApi()
(async function () {
    try {
        const hotwalletInstalled = await hotwalletApi.isExtensionInstalled();
        if (hotwalletInstalled) {
            alert('Hotwallet browser extension is installed!')
        }
    } catch (e) {
        console.error(e);
    }
})()
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