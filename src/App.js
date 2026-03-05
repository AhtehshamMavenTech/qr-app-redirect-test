import { QRCodeCanvas } from "qrcode.react";

function App() {
  return (
    <QRCodeCanvas
      value="https://yourusername.github.io/qr-app-download/app.html"
      size={220}
    />
  );
}