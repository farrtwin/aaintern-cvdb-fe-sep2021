import React, { useEffect, useState } from 'react'
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

const StatusInfor = () => {

    const [dataStatusInfor, setDataStatusInfor] = useState([]);

    const fetchStatusInfor = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/covid_case_province`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataStatusInfor(res);
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchStatusInfor()
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
                                    <th>Total Case</th>
                                    <th>Tested</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Active Ratio</th>
                                    <th>Recovered Ratio</th>
                                    <th>Deaths Ratio</th>


                                </tr>

                            </thead>

                            <tbody>
                                {
                                    dataStatusInfor.map((st, i) => (
                                        <tr key={i + 1}>
                                            <td>{i + 1}</td>
                                            <td>{st.province_name} </td>
                                            <td style={{width:'200px'}}>
                                                {st.total_case}
                                                <AiFillCaretUp color='red' className="mx-2" />
                                                {st.total_case_today}
                                            </td>
                                            <td>
                                                {st.test_case}
                                                <AiFillCaretUp color='red' className="mx-2" />
                                                {st.test_case_today}
                                            </td>
                                            <td>
                                                {st.active_case}
                                                {
                                                    st.active_case_today > 0 ?

                                                        <AiFillCaretUp color='lightgreen' className="mx-2" />
                                                        :
                                                        st.active_case_today < 0 ?

                                                            <AiFillCaretDown color='red' className="mx-2" />
                                                            :
                                                            null
                                                }

                                                {
                                                    st.active_case_today > 0 ?
                                                        st.active_case_today
                                                        :
                                                        st.active_case_today < 0 ?
                                                            st.active_case_today
                                                            :
                                                            null
                                                }

                                            </td>
                                            <td>
                                                {st.recovered_case}
                                                <AiFillCaretUp color='lightgreen' className="mx-2" />
                                                {st.recovered_case_today}
                                            </td>
                                            <td>
                                                {st.death_case}
                                                <AiFillCaretUp color='lightgreen' className="mx-2" />
                                                {st.death_case_today}
                                            </td>
                                            <td>
                                                {st.active_ratio}%
                                            </td>
                                            <td>
                                                {st.recovered_ratio}%
                                            </td>
                                            <td>
                                                {st.death_rato}%
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

export default StatusInfor
