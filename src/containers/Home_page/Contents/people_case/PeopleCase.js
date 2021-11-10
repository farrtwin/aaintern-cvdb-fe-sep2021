import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BsFillCircleFill } from "react-icons/bs";


const PeopleCase = () => {

    const [dataPeopleCase, setDataPeopleCase] = useState([]);
    const [dataTotalCase, setDataTotalCase] = useState('');
    const [dataActiveCase, setDataActiveCase] = useState('');
    const [dataRecoveredCase, setDataRecoveredCase] = useState('');
    const [dataDeathCase, setDataDeathCase] = useState('');
    const [dataTestedCase, setDataTestedCase] = useState('');


    const fetchPeopleCase = () => {
        //fetch API
        fetch(`${process.env.REACT_APP_DOMAIN_KEY}/case_charts`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {

                setDataPeopleCase(res);

                let count_total = res.reduce((a, { total_case }) => a + total_case, 0)
                setDataTotalCase(count_total)

                let count_active = res.reduce((a, { active_case }) => a + active_case, 0)
                setDataActiveCase(count_active)

                let count_recovered = res.reduce((a, { recovered_case }) => a + recovered_case, 0)
                setDataRecoveredCase(count_recovered)

                let count_death = res.reduce((a, { death_case }) => a + death_case, 0)
                setDataDeathCase(count_death)

                let count_tested = res.reduce((a, { tested_case }) => a + tested_case, 0)
                setDataTestedCase(count_tested)



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

                        <div className="columns ">
                            <div className="column is-2-tablet is-2-desktop">
                                <div className="" style={{ padding: '2px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: '#AF7AC5' }}>


                                        {dataTotalCase}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                TOTAL
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#D7BDE2' />
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                <br />

                                <div className="" style={{ padding: '6px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: '#935116' }}>

                                        {dataActiveCase}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                ACTIVE
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#D3A70F' />
                                            </span>


                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="" style={{ padding: '2px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: 'darkgreen' }}>

                                        {dataRecoveredCase}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                RECOVERED
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#9BE89C' />
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="" style={{ padding: '2px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: 'darkred' }}>


                                        {dataDeathCase}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                DEATH
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#FE8683' />
                                            </span>

                                        </div>
                                    </div>
                                </div>

                                <br />

                                <div className="" style={{ padding: '2px' }}>
                                    <header className="card-header" style={{ boxShadow: '0px 0px 0px 0px', fontSize: '24px', color: 'darkblue' }}>


                                        {dataTestedCase}

                                    </header>
                                    <div className="card-content" style={{ padding: '0px' }}  >

                                        <div className="content" style={{ textAlign: 'start', paddingTop: '2px' }} >

                                            <span style={{ display: 'inline', color: 'black' }}>
                                                TESTED
                                            </span>

                                            <span style={{ display: 'inline', marginLeft: '8px' }}>

                                                <BsFillCircleFill size={16} color='#79C7E0' />
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
                                            fill="#D7BDE2"
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

export default PeopleCase
