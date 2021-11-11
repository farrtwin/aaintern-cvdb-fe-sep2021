import React from 'react'
import Content from './Contents'
import Footter from './Footter'
import Header from './Header'
import './styles/index.css'

const HomePage = () => {
    return (
        <div>
            <Header/>
            
            <Content/>

            <Footter/>
        </div>
    )
}

export default HomePage
