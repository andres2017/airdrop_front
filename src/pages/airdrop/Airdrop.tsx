import React, { useEffect, useState } from 'react'
import { recordTransaction, getGCTBalance, distributeReward } from '../../services/EcoStayService'
import { useMetaMask } from '../../context/MetaMaskContext';

const Airdrop = () => {
  const { account, connectToMetamask } = useMetaMask();
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [nameToken, setNameToken] = useState('GCT');
  const [transactionHash, setTransactionHash] = useState('');

  const handleRecordTransaction = async () => {
    try {
      const txHash = await recordTransaction(account, address, amount, nameToken);
      setTransactionHash(txHash);
      alert('Transacción registrada con éxito: ' + txHash);
    } catch (error) {
      alert('Error al registrar la transacción: ' + error.message);
    }
  };

  const handleGetBalance = async () => {
    try {
      const balance = await getGCTBalance(address);
      alert('Balance de GCT: ' + balance);
    } catch (error) {
      alert('Error al obtener el balance de GCT: ' + error.message)
    }
  };


  const handleReward = async () => {
    try {
      const txHash = await distributeReward(account, address, amount);
      setTransactionHash(txHash);
      alert('Transacción registrada con éxito: ' + txHash);
    } catch (error) {
      alert('Error al obtener el balance de GCT: ' + error.message)
    }
  };


    return (
      <div>
        <h2>Registrar Transacción</h2>

        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select value={nameToken} onChange={(e) => setNameToken(e.target.value)}>
          <option value="EWC">EWC</option>
          <option value="GCT">GCT</option>
        </select>
        <button onClick={handleRecordTransaction}>Registrar Transacción</button>
        <button onClick={handleGetBalance}>GetBalance</button>
        <button onClick={handleReward}>Reward</button>
        {transactionHash && <p>Transacción registrada: {transactionHash}</p>}
      </div>
    );
  }

  export default Airdrop