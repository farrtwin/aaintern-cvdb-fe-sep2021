import React, { useEffect, useState } from 'react'
import { BsChevronDoubleUp } from "react-icons/bs"

const ActiveCase = () => {
    const [dataActiveCase, setDataActiveCase] = useState({});

    const fetchActiveCase = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_PRODUCTION}/active_case`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataActiveCase(res.data[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchActiveCase()
    }, [])
    return (
        <div>
            <div className="card" style={{ backgroundColor: '#D68910', padding: '6px' }}>
                <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', color: '#873600' }}>

                    Active Cases

                </header>
                <div className="card-content" style={{ padding: '12px' }}  >

                    <div className="content" >

                        <h2 style={{ margin: '0px', color: '#873600' }}>
                            {dataActiveCase.active_case}
                        </h2>

                        <h3 style={{ margin: '0px', color: '#873600' }}>
                            {dataActiveCase.active_case_today}
                            <span className="icon" style={{ paddingLeft: '6px' }}>
                                <BsChevronDoubleUp size={16} color='#873600' />
                            </span>
                        </h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ActiveCase
