import { createElement } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function App() {
  return createElement(QRCodeCanvas, {
    value: 'https://ahtehshammaventech.github.io/qr-app-redirect-test/app.html',
    //https://ahtehshamahmad.github.io/qr-app-redirect-test/app.html?app=rajwadi
    //https://ahtehshamahmad.github.io/qr-app-redirect-test/redirect.html?app=test
    size: 220,
  })
}

export default App
