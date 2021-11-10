import React, { useEffect, useState } from 'react'

const Deaths = () => {
    const [dataDeaths, setDataDeaths] = useState({});

    const fetchDeaths = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/deaths_case`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataDeaths(res[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchDeaths()
    }, [])
   
        return (
            <div>
                <div className="card" style={{ backgroundColor: '#CB4335 ', padding: '6px', color: '#7B241C' }}>
                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px' }}>

                        Deaths (0%)

                    </header>
                    <div className="card-content" style={{ padding: '12px' }}  >

                        <div className="content" >

                            <h2 style={{ margin: '0px', color: '#7B241C' }}>{dataDeaths.deaths_case_today}</h2>
                            <h3 style={{ margin: '0px', color: '#7B241C' }}>{dataDeaths.deaths_case}</h3>

                        </div>
                    </div>
                </div>

            </div >
        )
    }

export default Deaths
