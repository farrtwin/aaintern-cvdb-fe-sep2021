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
                                <p className="title">AACOVIDLA</p>

                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <p className="title">SITEMAP</p>
                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <p className="title">Power by AA Digital</p>
                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <p className="title">Help</p>

                            </div>
                        </div>

                        <div className="level-item has-text-centered">
                            <div>

                                <p className="title">Follow As</p>
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
