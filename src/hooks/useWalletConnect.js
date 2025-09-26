import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { ethers } from "ethers";
import { useState } from "react";

export default function useWalletConnect() {
  const [connector, setConnector] = useState(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    const newConnector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org",
    });

    if (!newConnector.connected) {
      await newConnector.createSession();
      QRCodeModal.open(newConnector.uri, () => {
        console.log("QR Code Modal closed");
      });
    }

    newConnector.on("connect", async (error, payload) => {
      if (error) throw error;

      const { accounts } = payload.params[0];
      setAccount(accounts[0]);

      const provider = new ethers.providers.InfuraProvider("sepolia"); // ✅ testnet
      const balance = await provider.getBalance(accounts[0]);
      setBalance(ethers.utils.formatEther(balance));

      QRCodeModal.close();
    });

    setConnector(newConnector);
  };

  // ✅ Function to send ETH
  const sendTransaction = async (to, amount) => {
    if (!connector) return alert("Please connect wallet first!");

    const tx = {
      from: account,
      to: to,
      value: ethers.utils.hexlify(ethers.utils.parseEther(amount)), // convert ETH → hex
      gas: ethers.utils.hexlify(21000), // basic transfer gas
    };

    try {
      const result = await connector.sendTransaction(tx);
      alert(`✅ Transaction Sent! Hash: ${result}`);
    } catch (err) {
      console.error(err);
      alert("❌ Transaction failed");
    }
  };

  return { connectWallet, account, balance, sendTransaction };
}
