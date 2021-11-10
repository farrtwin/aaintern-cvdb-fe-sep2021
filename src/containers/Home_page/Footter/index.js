import React from 'react'
import "./styles/index.css"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footter = () => {
    return (
        <div>
            <footer className="footer mt-6" >
                <div className="content">


                    <nav className="level">
                        <div className="level-item has-text-centered">
                            <div>

                                {/* <p className="heading">AACOVIDLA</p> */}
                                <h1 className="">AACOVIDLA</h1>

                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <h4 className="">SITEMAP</h4>
                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <h4 className="">POWER BY AA DIGITAL</h4>
                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <h4 className="">HELP</h4>

                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <h4 className="">FOLLOW US</h4>
                                <FaFacebookSquare size={32} />
                                <FaTwitterSquare size={32} />
                                <FaInstagramSquare size={32} />

                            </div>
                        </div>

                    </nav>
                </div>

            </footer>

        </div>
    )
}

export default Footter
