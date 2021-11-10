import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const PeopleCase = () => {

    const [dataPeopleCase, setDataPeopleCase] = useState([]);

    const fetchPeopleCase = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/case_charts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
               
                setDataPeopleCase(res);

            })
            .catch((err) => { });
    };

    useEffect(() => {
        fetchPeopleCase()
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
               
                <div className="card-content">

                    <div className="content">


                        <ResponsiveContainer height={380} width="100%">

                            <BarChart
                                width={500}
                                height={250}
                                data={dataPeopleCase}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="case_date"
                                    tickLine={false}
                                    axisLine={false}
                                    xAxisId={0}
                                />
                                <XAxis dataKey="case_date" xAxisId={1} hide />
                                <XAxis dataKey="case_date" xAxisId={2} hide />
                                <XAxis dataKey="case_date" xAxisId={3} hide />
                                <XAxis dataKey="case_date" xAxisId={4} hide />
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
                                    dataKey="total_case"
                                    name="Total Case"
                                    xAxisId={2}
                                    stackId="2"
                                    fill="#FAF2E5"
                                />
                                <Bar
                                    dataKey="tested_case"
                                    name="Tested Case"
                                    xAxisId={3}
                                    stackId="3"
                                    fill="#79C7E0"
                                />
                                <Bar
                                    dataKey="active_case"
                                    name="Active Case"
                                    xAxisId={4}
                                    stackId="4"
                                    fill="#D3A70F"
                                />
                                <Bar
                                    dataKey="recovered_case"
                                    name="Recovered Case"
                                    xAxisId={1}
                                    fill="#B1EF8D"
                                />
                                <Bar
                                    dataKey="death_case"
                                    name="Death Case"
                                    xAxisId={0}
                                    stackId="1"
                                    fill="#FE8683"
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

export default PeopleCase
