import React, { useState } from "react";
import useWalletConnect from "./hooks/useWalletConnect";

function App() {
  const { connectWallet, account, balance, sendTransaction } = useWalletConnect();
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">WalletConnect dApp</h1>

      {!account ? (
        <button
          onClick={connectWallet}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg font-semibold"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="w-full max-w-md space-y-6">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <p className="mb-2">
              <span className="font-bold">Wallet:</span> {account}
            </p>
            <p>
              <span className="font-bold">Balance:</span> {balance} ETH
            </p>
          </div>

          {/* Send ETH Form */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Send ETH</h2>
            <input
              type="text"
              placeholder="Recipient Address"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Amount (ETH)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mb-3 px-3 py-2 rounded bg-gray-700 text-white"
            />
            <button
              onClick={() => sendTransaction(to, amount)}
              className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
