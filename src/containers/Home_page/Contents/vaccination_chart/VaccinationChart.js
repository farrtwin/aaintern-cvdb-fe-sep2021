import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 12400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 12210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 12290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 12000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 12181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 12500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 12100,
    },
];

const VaccinationChart = () => {
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
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    axisLine={false}
                                    xAxisId={0}
                                />
                                <XAxis dataKey="name" xAxisId={1} hide />
                                <XAxis dataKey="name" xAxisId={2} hide />
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
                                <Legend />
                                <Bar
                                    dataKey="amt"
                                    name="Total Vaccine"
                                    xAxisId={2}
                                    stackId="2"
                                    fill="#CCCCFF"
                                />
                                <Bar
                                    dataKey="pv"
                                    name="Dose 2"
                                    xAxisId={1}
                                    fill="#40E0D0"
                                />
                                <Bar
                                    dataKey="uv"
                                    name="Dose 1"
                                    xAxisId={0}
                                    stackId="1"
                                    fill="#85C1E9 "
                                />

                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VaccinationChart
