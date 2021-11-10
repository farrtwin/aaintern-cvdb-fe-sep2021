import React, { useEffect, useState } from 'react'

const ActiveCase = () => {
    const [dataActiveCase, setDataActiveCase] = useState({});

    const fetchActiveCase = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/active_case`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataActiveCase(res[0]);


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

                        <h2 style={{ margin: '0px', color: '#873600' }}>{dataActiveCase.total_case_today}</h2>
                        <h3 style={{ margin: '0px', color: '#873600' }}>{dataActiveCase.active_case}</h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ActiveCase
