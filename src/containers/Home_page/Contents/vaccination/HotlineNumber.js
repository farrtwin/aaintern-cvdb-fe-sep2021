import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";


const HotlineNumber = () => {
    return (
        <div>

            <div className="card">
                <div className="card-content" style={{ padding: '12px' }}>
                    <div className="content" >
                        <div className="columns" style={{ textAlign: "center" }}>
                            <div className="column is-3-tablet is-3-desktop has-background-warning" style={{ padding: '6px' }}>
                                <FaPhoneAlt size={22} />
                                <p style={{ margin: '0px' }}>Hotline </p>
                                <p>Number</p>
                            </div>

                            <div className="column is-3-tablet is-3-desktop has-background-warning-light" style={{ padding: '18px' }} >

                                <div style={{ display: "inline-block" }}>
                                    <FaPhoneAlt size={28} color='#85C1E9' />
                                </div>

                                <div style={{ display: "inline-block", paddingLeft: '12px' }}>
                                    <p style={{ margin: '0px' }}>166 </p>
                                    <p>Covid-19</p>
                                </div>

                            </div>

                            <div style={{ borderLeft: "1px solid grey", height: "60px", marginTop:'12px' }}></div>

                            <div className="column is-3-tablet is-3-desktop has-background-warning-light" style={{ padding: '18px' }}>

                                <div style={{ display: "inline-block" }}>
                                    <FaPhoneAlt size={28} color='#85C1E9'/>
                                </div>
                                <div style={{ display: "inline-block", paddingLeft: '12px' }}>
                                    <p style={{ margin: '0px' }}>165 </p>
                                    <p>Covid-19</p>
                                </div>
                            </div>

                            <div style={{ borderLeft: "1px solid grey", height: "60px", marginTop:'12px' }}></div>

                            <div className="column is-3-tablet is-3-desktop has-background-warning-light" style={{ padding: '18px' }}>
                                <div style={{ display: "inline-block" }}>
                                    <FaPhoneAlt size={28} color='#85C1E9' />
                                </div>
                                <div style={{ display: "inline-block", paddingLeft: '12px' }}>
                                    <p style={{ margin: '0px' }}>1623 </p>
                                    <p>Covid-19</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="card">
                <footer className="card-footer" style={{ padding: '24px 0px 24px 0px ' }}>
                    <a href="/#" className="card-footer-item" style={{ backgroundColor: "red" }}>Save</a>
                    <a href="/#" className="card-footer-item" style={{ backgroundColor: "red" }}>Save</a>
                    <a href="/#" className="card-footer-item">Edit</a>
                    <a href="/#" className="card-footer-item">Delete</a>
                </footer>
            </div> */}
            {/* <h1 className="is-size-3-mobile is-size-1-desktop title">Docker</h1>
                            <h2 className="is-size-3-mobile is-size-2-desktop subtitle">Dark Roast</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolores nam accusamus nulla dignissimos veniam vitae sunt minus natus illum?</p> */}
        </div>
    )
}

export default HotlineNumber
