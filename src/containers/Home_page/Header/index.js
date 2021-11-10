import React from 'react'
import "./styles/index.css"


const Header = () => {
    // console.log(process.env.REACT_APP_DOMAIN_KEY)
    return (
        <div>

            <nav>

                <div className="alignContent" >
                    <h1 className="SizeHeader"><b>Website Covid-19 in Laos</b></h1>
                    <h2>#LaoSusu</h2>
                </div>
                
                <hr/>

            </nav>

        </div>
    )
}

export default Header
