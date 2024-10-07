
import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './Sidebar.css'
import { Link, Outlet } from "react-router-dom";

class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }

    render() {
        return (
            <div className="sidenav">
<SideNav expanded={this.state.isVisible} className="container-sidebar">
                <SideNav.Toggle
                    onClick={() => {
                        this.setState({ isVisible: !this.state.isVisible });
                    }}
                />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>
                        <Link to="/dashboard">Dashboard</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Airdrop">
                        <NavIcon>
                            <i
                                className="fa fa-fw fa-line-chart"
                                style={{ fontSize: "1.75em" }}
                            />
                        </NavIcon>
                        <NavText>
                            <Link to="airdrop">Ardrop</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="wallet">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>Wallet</NavText>
                    </NavItem>
                    <NavItem eventKey="nfts">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
                        </NavIcon>
                        <NavText>NFTs</NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <div>
                <Outlet />
            </div>
            </div>
            
        );
    }
}

export default SideNavBar;