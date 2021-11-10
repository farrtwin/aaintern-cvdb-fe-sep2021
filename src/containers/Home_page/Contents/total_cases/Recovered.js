import React, { useEffect, useState } from 'react'

const Recovered = () => {
    const [dataRecovered, setDataRecovered] = useState({});

    const fetchRecovered = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/recovered_case`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataRecovered(res[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchRecovered()
    }, [])

    return (
        <div>
            <div className="card" style={{ backgroundColor: '#58D68D', padding: '6px', color: '#1E8449' }}>
                <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px' }}>

                    Recovered  (0%)

                </header>
                <div className="card-content" style={{ padding: '12px' }}  >

                    <div className="content" >

                        <h2 style={{ margin: '0px', color: '#1E8449' }}>{dataRecovered.recovered_case_today}</h2>
                        <h3 style={{ margin: '0px', color: '#1E8449' }}>{dataRecovered.recovered_case}</h3>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Recovered
