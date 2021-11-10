import React, { useEffect, useState } from 'react'

const TotalVaccination = () => {
    const [dataTotalVaccination, setDataTotalVaccination] = useState({});

    const fetchTotalVaccination = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_PRODUCTION}/total_vaccination`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataTotalVaccination(res.data[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchTotalVaccination()
    }, [])
    return (
        <div>
            <div className="card" style={{ backgroundColor: '#EBDEF0 ', padding: '12px', color: '#9B59B6 ' }}>
                <div className="card-content" style={{ padding: '12px' }}>
                    <div className="content" >
                        <h2 style={{ color: '#9B59B6 ' }}>{dataTotalVaccination.TOTAL_VACCINATION}</h2>
                        Total Vaccination
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TotalVaccination
