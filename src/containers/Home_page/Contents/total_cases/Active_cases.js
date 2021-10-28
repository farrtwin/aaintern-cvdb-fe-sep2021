import React from 'react'

const ActiveCase = () => {
    return (
        <div>
            <div className="card" style={{ backgroundColor: '#D68910', padding: '6px' }}>
                <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', color: '#873600' }}>

                    Active Cases

                </header>
                <div className="card-content" style={{ padding: '12px' }}  >

                    <div className="content" >

                        <h2 style={{ margin: '0px', color: '#873600' }}>0</h2>
                        <h3 style={{ margin: '0px', color: '#873600' }}>0</h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ActiveCase
