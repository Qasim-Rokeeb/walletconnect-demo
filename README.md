

# 🔗 WalletConnect dApp

A simple React + TailwindCSS dApp that integrates **WalletConnect**.
Users can:

* Connect their mobile wallet via WalletConnect QR code.
* View their wallet **address & ETH balance**.
* Send ETH to another address (on **Sepolia testnet** by default).

---

## 🚀 Features

* ✅ Connect wallet with **WalletConnect**
* ✅ Display wallet **address & balance**
* ✅ Simple **form to send ETH**
* ✅ Styled with **TailwindCSS**
* ✅ Built on **React** with **ethers.js** for blockchain interaction

---

## 🛠️ Tech Stack

* [React](https://react.dev/) – Frontend framework
* [TailwindCSS](https://tailwindcss.com/) – Styling
* [WalletConnect](https://walletconnect.com/) – Wallet connection
* [ethers.js](https://docs.ethers.org/) – Blockchain interaction

---

## 📦 Installation

Clone repo and install dependencies:

```bash
git clone https://github.com/<your-username>/walletconnect-demo.git
cd walletconnect-demo
npm install
```

Run development server:

```bash
npm start
```

---

## ⚙️ Project Setup

### 1. TailwindCSS Setup

Tailwind is already configured in `tailwind.config.js`.
Main styles are imported in `src/index.css`.

### 2. WalletConnect Hook

Core logic lives in `src/hooks/useWalletConnect.js`:

* Connects wallet
* Fetches ETH balance
* Sends ETH transactions

### 3. UI

Main app UI is inside `src/App.js`:

* Shows “Connect Wallet” button
* Displays connected account & balance
* Contains form to send ETH

---

## 🌐 Network

Currently uses **Sepolia Testnet**.
To test sending ETH:

1. Add Sepolia testnet to your wallet.
2. Get free ETH from a [Sepolia Faucet](https://sepoliafaucet.com/).
3. Connect your wallet and try sending ETH.

---

## 📷 Screenshots

### Connect Wallet

![Connect Wallet Screenshot](./screenshots/connect-wallet.png)

### Wallet Connected

![Wallet Connected Screenshot](./screenshots/wallet-connected.png)

### Send ETH

![Send ETH Screenshot](./screenshots/send-eth.png)

---

## 🛡️ Disclaimer

This is a demo project for **learning purposes only**.
Use **testnet ETH**. Do **not** send real funds unless you know what you’re doing.

---

## 📜 License

MIT License © 2025 Qasim Rokeeb

---

