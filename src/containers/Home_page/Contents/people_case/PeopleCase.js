import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
   
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
    {
        name: 'Page E',
        death: 1000,
        recovered: 2000,
        active: 3181,
        tested: 4014,
        total: 5050,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2700,
        active: 3981,
        tested: 4814,
        total: 5950,
        
    },
    {
        name: 'Page E',
        death: 1880,
        recovered: 2210,
        active: 3981,
        tested: 4784,
        total: 5550,
        
    },
    {
        name: 'Page E',
        death: 1300,
        recovered: 2560,
        active: 3451,
        tested: 4954,
        total: 5999,
        
    },
    {
        name: 'Page E',
        death: 1210,
        recovered: 2240,
        active: 3671,
        tested: 4897,
        total: 5889,
        
    },
   
];

const PeopleCase = () => {
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
                                <XAxis dataKey="name" xAxisId={3} hide />
                                <XAxis dataKey="name" xAxisId={4} hide />
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
                                    dataKey="total"
                                    name="Total Case"
                                    xAxisId={2}
                                    stackId="2"
                                    fill="#CCCCFF"
                                />
                                <Bar
                                    dataKey="tested"
                                    name="Tested Case"
                                    xAxisId={3}
                                    stackId="3"
                                    fill="#DC7633 "
                                />
                                <Bar
                                    dataKey="active"
                                    name="Active Case"
                                    xAxisId={4}
                                    stackId="4"
                                    fill="#2ECC71"
                                />
                                <Bar
                                    dataKey="recovered"
                                    name="Recovered Case"
                                    xAxisId={1}
                                    fill="#40E0D0"
                                />
                                <Bar
                                    dataKey="death"
                                    name="Death Case"
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

export default PeopleCase
