import Web3 from 'web3';
import EcoStayontract from '../contracts/EcoStayTwo.json';

//inicializar web3
const web3 = new Web3(window.ethereum);

//Address del contrato del DAO
const contractAddress = '0x232e76d8891B27B0CF9F59Aa61A7bf045551281a';
const contractABI = EcoStayontract.abi;
const ecoStay = new web3.eth.Contract(contractABI, contractAddress);



/*
// Registrar una transacción
  const tx1 = await ecoStay.recordTransaction(addr1.address, 100, "GCT");
  await tx1.wait();
  console.log("Transacción registrada para", addr1.address);
*/
export const recordTransactionss = async (account, adreess, amount, nameToken) => {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const amountWei =  web3.utils.toWei(amount.toString(), 'ether');
        const tx = await ecoStay.methods.recordTransaction(adreess, amountWei, nameToken).send({from: account});
        return tx.toString();
    } catch (error) {
        console.error('se enviaron los reward', error);
    }
}