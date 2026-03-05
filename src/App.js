import { createElement } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

function App() {
  return createElement(QRCodeCanvas, {
    value: 'https://ahtehshamahmad.github.io/qr-app-redirect-test/app.html',
    size: 220,
  })
}

export default App
