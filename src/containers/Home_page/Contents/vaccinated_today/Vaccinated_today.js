import React, { useEffect, useState } from 'react'

const VaccinatedToday = () => {
    const [dataVaccinatedToday, setDataVaccinatedToday] = useState({});

    const fetchVaccinatedToday = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_PRODUCTION}/vaccinated_today`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataVaccinatedToday(res.data[0]);
              
               
                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchVaccinatedToday()
    }, [])
    return (
        <div style={{ color: '#2E86C1' }}>
            <h2 style={{ color: '#2E86C1' }}>{dataVaccinatedToday.VACCINATED_TODAY}</h2>
            <hr style={{ margin: '12px 25% 12px 25% ', borderTop: '1px solid #2E86C1' }} />
            Vaccinated Today

        </div>

    )
}

export default VaccinatedToday
