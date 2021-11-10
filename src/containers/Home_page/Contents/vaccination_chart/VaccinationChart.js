import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const VaccinationChart = () => {

    const [dataVaccinationChart, setDataVaccinationChart] = useState([]);

    const fetchVaccinationChart = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/vaccine_charts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                //set data to state
                setDataVaccinationChart(res);


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
                <header className="card-header title" style={{ boxShadow: '0px 0px 0px 0px' }}>

                    VACCINATION

                </header>
                <div className="card-content">

                    <div className="content">


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
                                <Legend />

                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VaccinationChart
