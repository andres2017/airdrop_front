import Button from 'react-bootstrap/Button';
import { useMetaMask } from '../../context/MetaMaskContext';

// Definir los tipos esperados del contexto MetaMask
type MetaMaskContextType = {
    account: string | null;
    connectToMetamask: () => Promise<void>;
    disconnectFromMetaMask: () => void;
};

// Aplicar los tipos a `useMetaMask`
const WalletButtonComponent = () => {
    const { account, connectToMetamask, disconnectFromMetaMask } = useMetaMask() as MetaMaskContextType;

    return (
        <div>
            {account ? (
                <div>
                    <Button onClick={disconnectFromMetaMask}>Disconnect MetaMask</Button>
                </div>
            ) : (
                <div>
                    <Button onClick={connectToMetamask}>Connect MetaMask</Button>
                </div>
            )}
        </div>
    );
};

export default WalletButtonComponent;
