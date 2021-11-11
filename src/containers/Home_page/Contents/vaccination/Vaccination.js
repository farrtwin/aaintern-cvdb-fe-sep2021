import React from 'react'
import { FaCertificate } from "react-icons/fa";

const Vaccination = () => {
    return (
        <div>
            <div className="card has-background-link" style={{ padding: '12px' }}>
                <div className="card-content" style={{ padding: '12px' }}>
                    <div className="content" >
                        <div className="columns">
                            <div className="column is-3-tablet is-2-desktop has-text-white" style={{ paddingTop: '18px' }}>
                                <p>Vaccination</p>
                            </div>

                            <div className="column is-3-tablet is-3-desktop">
                                <button className="button" style={{ width: '100%' }}>Register</button>
                            </div>

                            <div className="column is-3-tablet is-3-desktop">
                                <button className="button" style={{ width: '100%' }}>Dowload From</button>
                            </div>

                            <div className="column is-3-tablet is-4-desktop">

                                <button className="button" style={{ width: '100%' }}>

                                    <span className="icon" style={{paddingLeft:'6px'}}>
                                        <FaCertificate size={16} color='485FC7' />
                                    </span>
                                    <span>Vaccination Certificate</span>

                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vaccination
