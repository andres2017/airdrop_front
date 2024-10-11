import React, { useEffect, useState } from 'react';
import './Wallet.css';
import WalletButtonComponent from '../../components/walletButton/WalletButtonComponent';
import { useMetaMask } from '../../context/MetaMaskContext';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

const WalletPage = () => {
    const cookies = new Cookies();
    const [address, setAddress] = useState('')
    const { account, balance } = useMetaMask();

    useEffect(() => {
        getUser();
      }, [])
    
      const getUser = async () => {
        const user = cookies.get('user')
        console.log(user.wallet.address);
        setAddress(user.wallet.address);
      }

    return (
        <Container className='mt-4'>
            <div className='wallet-title text-center mb-4'>
                <h1>Wallet</h1>
            </div>

            <div className='wallet-title text-center mb-4'>
                <h1>{address}</h1>
            </div>
            <div className='wallet-content mb-5'>
                <div className='wallet-content-text text-center'>
                    <p>
                        Your wallet is a place where you can store your cryptocurrencies.
                        You can also send and receive cryptocurrencies from your wallet.
                    </p>
                    <p>
                        To start using your wallet, you need to connect to MetaMask.
                        Click on the button below to connect to MetaMask.
                    </p>
                </div>
                <div className='d-flex justify-content-center'>
                    <WalletButtonComponent />
                </div>
            </div>
            
            {account ? (
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Card className='text-center shadow-sm bg-dark text-white'>
                            <Card.Body>
                                <Card.Title className='mb-4'>Account Information</Card.Title>
                                <Card.Text>
                                    <strong>Account:</strong> {account}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Balance:</strong> {balance ? parseFloat(balance).toFixed(4) : '0.00'} ETH
                                </Card.Text>
                                <Button variant='primary' className='mt-3'>View Transactions</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Card className='text-center shadow-sm bg-dark text-white'>
                            <Card.Body>
                                <Card.Title className='mb-4'>Connection Required</Card.Title>
                                <Card.Text>
                                    Please connect to MetaMask to view your account information.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default WalletPage;