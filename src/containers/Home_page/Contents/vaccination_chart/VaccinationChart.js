import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BsFillCircleFill } from "react-icons/bs";



const VaccinationChart = () => {

    const [dataVaccinationChart, setDataVaccinationChart] = useState([]);
    const [VaccineDoseOne, setVaccineDoseOne] = useState();
    const [VaccineDoseTwo, setVaccineDoseTwo] = useState();

    const fetchVaccinationChart = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_PRODUCTION}/vaccine_charts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataVaccinationChart(res.data);
                let count_dost_1 = res.data.reduce((a, { vaccine_dose_one }) => a + vaccine_dose_one, 0)
                setVaccineDoseOne(count_dost_1)

                let count_dost_2 = res.data.reduce((a, { vaccine_dose_two }) => a + vaccine_dose_two, 0)
                setVaccineDoseTwo(count_dost_2)


                // console.log(res[0].graph[3].confirmed) //bg infor
            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchVaccinationChart()
    }, [])


    const DataFormater = number => {
        if (number > 1000000000) {
            return (number / 1000000000).toString() + ' B'
        } else if (number > 1000000) {
            return (number / 1000000).toString() + ' M'
        } else if (number > 1000) {
            return (number / 1000).toString() + ' K'
        } else {
            return number.toString()
        }
    }
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '24px', overflow: 'auto' }}>
                <header className="card-header title" style={{ boxShadow: '0px 0px 0px 0px', color: '#1D50B1' }}>

                    VACCINATION

                </header>
                <div className="card-content">

                    <div className="content">

                        <div className="columns ">
                            <div className="column is-2-tablet is-2-desktop">
                                <div className="" style={{ padding: '2px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: 'green' }}>


                                        {VaccineDoseOne}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                DOSE 1
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#9BE89C' />
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                <br />

                                <div className="" style={{ padding: '6px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: 'darkblue' }}>

                                        {VaccineDoseTwo}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                DOSE 2
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#A5C9FD' />
                                            </span>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="column is-10-tablet is-10-desktop">
                                <ResponsiveContainer height={380} width="100%">

                                    <BarChart
                                        width={500}
                                        height={250}
                                        data={dataVaccinationChart}
                                        margin={{
                                            top: 20,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="vaccine_date"
                                            tickLine={false}
                                            axisLine={false}
                                            xAxisId={0}
                                        />
                                        <XAxis dataKey="vaccine_date" xAxisId={1} hide />
                                        <XAxis dataKey="vaccine_date" xAxisId={2} hide />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            orientation="right"
                                            tickFormatter={DataFormater}
                                            tickCount={6}
                                        />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Tooltip
                                            itemStyle={{ color: 'black' }}
                                            cursor={false}
                                            formatter={value =>
                                                new Intl.NumberFormat('en').format(value)
                                            }
                                        />

                                        <Bar
                                            dataKey="vaccine_dose_one"
                                            name="Dose 1"
                                            xAxisId={1}
                                            fill="#9BE89C"
                                        />
                                        <Bar
                                            dataKey="vaccine_dose_two"
                                            name="Dose 2"
                                            xAxisId={0}
                                            stackId="1"
                                            fill="#A5C9FD"
                                        />


                                    </BarChart>

                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VaccinationChart
