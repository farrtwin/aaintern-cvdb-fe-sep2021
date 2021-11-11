import React, { useEffect, useState } from 'react'
import { AiFillCaretUp } from "react-icons/ai";

const VaccineInfo = () => {

    const [dataVaccineInfo, setDataVaccineInfo] = useState([]);

    const fetchVaccineInfo = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_PRODUCTION}/vaccine_province`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataVaccineInfo(res.data);
            })
            .catch((err) => { });
    };
    useEffect(() => {
        fetchVaccineInfo()
    }, [])

    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px', overflow: 'auto' }}>
                <div className="card-content">
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Province</th>
                                    <th>Dose 1</th>
                                    <th>Dose 2</th>
                                    <th>Total</th>

                                </tr>

                            </thead>

                            <tbody>
                                {
                                    dataVaccineInfo.map((vc, i) => (
                                        <tr key={i + 1}>
                                            <td>{i + 1}</td>
                                            <td>{vc.province_name} </td>
                                            <td>
                                                {vc.vaccin_dose_one} 
                                                {/* <HiChevronDoubleUp color='green' className="mx-2" />  */}
                                                <AiFillCaretUp color='lightgreen' className="mx-2" /> 
                                                {vc.vaccine_dose_one_today}
                                            </td>

                                            <td>
                                                {vc.vaccin_dose_two}
                                                <AiFillCaretUp color='lightgreen' className="mx-2" /> 
                                                {vc.vaccin_dose_two_today}
                                            </td>
                                            <td>
                                                {vc.vaccine_total}
                                                <AiFillCaretUp color='lightgreen' className="mx-2" /> 
                                                {vc.vaccin_total_today}

                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VaccineInfo
