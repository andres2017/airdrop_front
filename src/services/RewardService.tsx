import Web3 from 'web3';
import EcoStayontract from '../contracts/EcoStayTwo.json';
import { ethers } from 'ethers';
const addressContract = import.meta.env.VITE_CONTRACT_ADDRESS;
const urlRpc = import.meta.env.VITE_RPC_URL;
const addressPrivateKey = import.meta.env.VITE_PRIVATE_KEY;


//inicializar web3
const web3 = new Web3(window.ethereum);

//Address del contrato del DAO
const contractAddress = addressContract;
const contractABI = EcoStayontract.abi;

//proveedor de la red(Ganache)
const provider = new ethers.JsonRpcProvider(urlRpc);

//clave privada de la cuenta que contiene los token
const privateKey = addressPrivateKey;
const wallet = new ethers.Wallet(privateKey, provider);


const ecoStay = new ethers.Contract(contractAddress, contractABI, wallet);

export const distributeReward = async (address: string, amount: number) => {
   try {
      // Convertir la cantidad a Wei
      const amountWei = web3.utils.toWei(amount.toString(), 'ether');

      // Enviar la transacción al contrato inteligente
      const tx = await ecoStay.distributeReward(address, amountWei);
      await tx.wait();
      return tx.hash;
   } catch (error) {
      console.error('Error al registrar la transaccion:', error);
      throw new Error('No se pudo registrar la transaccion');
   }
}
