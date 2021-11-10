import React, { useEffect, useState } from 'react'

const TotalVacinationDose2 = () => {
    const [dataTotalVacinationDose2, setDataTotalVacinationDose2] = useState({});

    const fetchTotalVacinationDose2 = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/total_vaccination_dose_2`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataTotalVacinationDose2(res[0]);


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchTotalVacinationDose2()
    }, [])
    return (
        <div>
            <div className="card" style={{ backgroundColor: '#AED6F1 ', paddingTop: '12px', paddingBottom: '12px', color: '#2980B9 ' }}>

                <div className="card-content" style={{ padding: '12px' }}>
                    <div className="content" >
                        <h2 style={{ color: '#2980B9 ' }}>{dataTotalVacinationDose2.total_vaccination_dose_2}</h2>
                        Total Vacination Dose2
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TotalVacinationDose2
