import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../common/header'
import Footer from '../../common/footer'

function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default DefaultLayout