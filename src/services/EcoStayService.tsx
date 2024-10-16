import Web3 from 'web3';
import EcoStayontract from '../contracts/EcoStayTwo.json';
const addressContract = import.meta.env.VITE_CONTRACT_ADDRESS;

//inicializar web3
const web3 = new Web3(window.ethereum);

//Address del contrato del DAO
const contractAddress = addressContract;
const contractABI = EcoStayontract.abi;
const ecoStay = new web3.eth.Contract(contractABI, contractAddress)


export const recordTransaction = async (account: string, address: string, amount: string, nameToken: string) => {
    try {
        // Convertir la cantidad a Wei
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');
        
        // Enviar la transacción al contrato inteligente
        const tx = await ecoStay.methods.recordTransaction(address, amountWei, nameToken).send({ from: account });
        
        // Retornar la transacción como una cadena de texto
        console.log(tx.transactionHash)
        return tx.transactionHash;
    } catch (error) {
        console.error('Error al registrar la transacción:', error);
        throw new Error('No se pudo registrar la transacción');
    }
};

export const getGCTBalance = async (address: string) => {
    try {
        const gctBalance = await ecoStay.methods.gctBalances(address).call();
        return gctBalance;
    } catch (error) {
        console.error('Error al obtener el balance de GCT:', error);
        throw new Error('No se pudo obtener el balance de GCT');
    }
};

export const distributeReward = async (account: string, address: string, amount:string) => {
    try {
        // Convertir la cantidad a Wei
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');
        
        // Enviar la transacción al contrato inteligente
        const tx = await ecoStay.methods.distributeReward(address, amountWei).send({ from: account });
        
        // Retornar la transacción como una cadena de texto
        console.log(tx.transactionHash)
        return tx.transactionHash;
    } catch (error) {
        console.error('Error al registrar la transacción:', error);
        throw new Error('No se pudo registrar la transacción');
    }
};