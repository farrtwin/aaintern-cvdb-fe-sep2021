import React from 'react'

const Vaccination = () => {
    return (
        <div>
            <div className="card">
                <div className="card-content" style={{ padding: '12px' }}>
                    <div className="content" >
                        <div className="columns">
                            <div className="column is-3-tablet is-2-desktop">
                                <p>Vaccination</p>
                            </div>

                            <div className="column is-3-tablet is-3-desktop">
                                <button className="button" style={{ width: '100%' }}>Register</button>
                            </div>

                            <div className="column is-3-tablet is-3-desktop">
                                <button className="button" style={{ width: '100%' }}>Dowload From</button>
                            </div>

                            <div className="column is-3-tablet is-4-desktop">
                                <button className="button" style={{ width: '100%' }}>Vaccination Certificate</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vaccination
