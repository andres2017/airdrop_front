import { useEffect, useState } from 'react';
import './Wallet.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import { distributeReward } from '../../services/RewardService';
import { getGCTBalance } from '../../services/EcoStayService';
import LoadingComponent from '../../components/loading/LoadingComponent';

const WalletPage = () => {
    const cookies = new Cookies();
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUser();
        getTokenBalance();
    }, []); 

    const getUser = async () => {
        const user = cookies.get('user');
        setAddress(user.wallet.address);
    };

    const getTokenBalance = async () => {
        try {
            const user = cookies.get('user');
            const gtc = await getGCTBalance(user.wallet.address);
            const tokenGtc = parseFloat(gtc) / Math.pow(10, 18); // Convertir de wei a GTC
            setBalance(Math.floor(tokenGtc)); // Solo guardamos el número entero
        } catch (error) {
            console.error('Error al obtener el balance:', error);
        }
    };

    const handleReward = async () => {
        try {
            setLoading(true);
            const txHash = await distributeReward(address, 10);
            await getTokenBalance();
            alert(`Recompensa distribuida con éxito. Hash de la transacción: ${txHash}`);
        } catch (error) {
            alert(`Error al distribuir la recompensa: ${(error as Error).message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className='mt-5'>
            {loading && <LoadingComponent />}
            <div className='wallet-title text-center mb-4'>
                <h1 className='futuristic-title'>Wallet</h1>
            </div>

            <Row className='justify-content-center'>
                <Col md={6}>
                    <Card className='text-center shadow-lg bg-dark text-white border-0 futuristic-card'>
                        <Card.Body>
                            <Card.Title className='mb-4'>Información de la cuenta</Card.Title>
                            <Card.Text>
                                <strong>Cuenta:</strong> 
                                <span className="wallet-account">🔗 {address}</span>
                            </Card.Text>
                            <Card.Text>
                                <strong>Token :</strong> {balance} GTC
                            </Card.Text>
                            <Button variant='primary' className='mt-3' onClick={handleReward}>
                                Distribuir Recompensa
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default WalletPage;
