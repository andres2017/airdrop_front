import React, { useEffect, useState } from 'react'
import { recordTransactionss } from '../../services/EcoStayService'
import { useMetaMask } from '../../context/MetaMaskContext';

const Airdrop = () => {
  const { account, connectToMetamask } = useMetaMask();
  const [reward, setReward] = useState('')
  useEffect(() => {

  }, [])

  const fetchRecordTransaction = async (account) => {
    const result = await recordTransactionss(account, '0x1273199DA93d7fCeaB52919106278e20A5E868FF', '100', "GCT");
    console.log(result);
  }

  return (
    <div>
      <button onClick={fetchRecordTransaction}>Transferir Tokens</button>
    </div>
  )
}

export default Airdrop