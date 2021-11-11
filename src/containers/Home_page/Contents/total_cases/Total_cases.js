import React, { useEffect, useState } from 'react'
import { BsChevronDoubleUp } from "react-icons/bs"

const TotalCases = () => {
    const [dataTotalCases, setDataTotalCases] = useState({});

    const fetchTotalCases = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_PRODUCTION}/total_case`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataTotalCases(res.data[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchTotalCases()
    }, [])
    return (
        <div style={{ color: '#784212' }}>
            <span style={{ color: '#784212', fontSize: '30px', fontWeight: 'bold', marginRight: '24px' }}>
                {dataTotalCases.total_case}
            </span>

            <span style={{ color: 'red', fontSize: '22px' }}>
                {dataTotalCases.total_case_today}
                <span className="icon" style={{ paddingLeft: '6px' }}>
                    <BsChevronDoubleUp size={16} color='red' />
                </span>
            </span>

            <hr style={{ margin: '12px 25% 12px 25% ', borderTop: '1px solid #784212' }} />

            TOTAL CASES

        </div>

    )
}

export default TotalCases
