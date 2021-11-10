import React, { useEffect, useState } from 'react'

const TotalVacinationDose1 = () => {
    const [dataTotalVacinationDose1, setDataTotalVacinationDose1] = useState({});

    const fetchTotalVacinationDose1 = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/total_vaccination_dose_1`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataTotalVacinationDose1(res[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchTotalVacinationDose1()
    }, [])
    return (
        <div>
            <div className="card" style={{ backgroundColor: '#D4EFDF', paddingTop: '12px', paddingBottom: '12px', color: '#45B39D ' }}>
                <div className="card-content" style={{ padding: '12px' }}>
                    <div className="content" >
                        <h2 style={{ color: '#45B39D ' }}>{dataTotalVacinationDose1.total_vaccination_dose_1}</h2>
                        Total Vacination Dose1
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TotalVacinationDose1
