import Web3 from 'web3';
import EcoStayontract from '../contracts/EcoStayTwo.json';
import {ethers} from 'ethers';

//inicializar web3
const web3 = new Web3(window.ethereum);

//Address del contrato del DAO
const contractAddress = '0x232e76d8891B27B0CF9F59Aa61A7bf045551281a';
const contractABI = EcoStayontract.abi;

//proveedor de la red(Ganache)
const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545');

//clave privada de la cuenta que contiene los token
const privateKey = '0x34711810694bfbe3dd9c97ecfb362ddb4a5444db5755a0ab6c0d8948079481ec';
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
