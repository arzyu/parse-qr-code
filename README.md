# @arzyu/parse-qr-code

Parse QR code in Node.js.

## Installation

```
npm add @arzyu/parse-qr-code
```

## Usage

```typescript
import { parseQRCode } from '@arzyu/parse-qr-code';

(async () => {
  const filepath = "/path/to/qrcode/image.png";

  try {
    const qrText = await parseQRCode(filepath);

    if (qrText.length) {
      console.log(qrText);
    }

  } catch (e) {
    console.error(e);
  }

})();
```
