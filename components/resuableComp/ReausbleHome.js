
import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import MiddleBar from './MiddleBar'

export default function ReausbleHome({ children }) {
    return (
        <>
            <Header />
            <MiddleBar/>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
