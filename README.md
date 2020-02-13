# Quill ImageHandler Module

A module for Quill rich text editor to allow images to be uploaded to a server instead of being base64 encoded

## Demo

### Install

Install with npm:

```bash
npm install quill-image-uploader --save
```

### Webpack/ES6

```javascript
import Quill from 'quill'
import ImageUploader from 'quill.imageUploader.js'

Quill.register('modules/imageUploader', ImageUploader)

const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png'
            )
          }, 3500)
        })
      }
    }
  }
})
```
