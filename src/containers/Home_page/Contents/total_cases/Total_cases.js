import React, { useEffect, useState } from 'react'

const TotalCases = () => {
    const [dataTotalCases, setDataTotalCases] = useState({});

    const fetchTotalCases = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/total_case`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataTotalCases(res[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchTotalCases()
    }, [])
    return (
        <div style={{ color: '#784212' }}>
            <h2 style={{ color: '#784212' }}>{dataTotalCases.total_case_today}</h2>
            <hr style={{ margin: '12px 25% 12px 25% ', borderTop: '1px solid #784212' }} />
            Total cases

        </div>

    )
}

export default TotalCases
