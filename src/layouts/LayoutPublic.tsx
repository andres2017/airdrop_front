import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/navbar/NavbarComponent'

const LayoutPublic = () => {
    return (
        <div>
            <NavbarComponent />
            <main className='container'>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutPublic
