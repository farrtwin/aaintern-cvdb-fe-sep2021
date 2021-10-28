import React from 'react'
import PeopleCase from './people_case/PeopleCase'
import StatusInfor from './status_info/Status_infor'
import ActiveCase from './total_cases/Active_cases'
import Deaths from './total_cases/Deaths'
import Recovered from './total_cases/Recovered'
import TotalCases from './total_cases/Total_cases'
import TotalVaccination from './vaccinated_today/Total_vaccination'
import TotalVacinationDose1 from './vaccinated_today/Total_vacinationDose1'
import TotalVacinationDose2 from './vaccinated_today/Total_vacinationDose2'
import VaccinatedToday from './vaccinated_today/Vaccinated_today'
import HotlineNumber from './vaccination/HotlineNumber'
import Vaccination from './vaccination/Vaccination'
import VaccinationChart from './vaccination_chart/VaccinationChart'
import VaccineInfo from './vacine_info/Vaccine_info'

const Content = () => {
    return (
        <div className="container">
            {/* product info */}
            <section className="section" style={{ padding: '6px' }}>
                <div className="container">
                    <div className="columns ">
                        {/* column 1 */}
                        <div className="column is-12-tablet is-6-desktop">

                            <HotlineNumber />

                        </div>

                        {/* column 2 */}
                        <div className="column is-12-tablet is-6-desktop">

                            <Vaccination />

                        </div>



                    </div>

                    <p style={{ padding: '12px' }}>As on: 13 Oct 2021, 8: 00 IST (GMT+5: 30)</p>

                    <div className="columns ">
                        {/* column 3 */}
                        <div className="column is-12-tablet is-6-desktop">

                            <div className="card">
                                <div className="card-content" style={{ padding: '12px' }}>
                                    <div className="content" >
                                        Vaccination Dose Status

                                        <div className="columns ">

                                            <div className="column is-12-tablet is-12-desktop" style={{ textAlign: "center" }}>

                                                <VaccinatedToday />

                                            </div>


                                        </div>
                                        <div className="columns ">


                                            <div className="column is-4-tablet is-4-desktop" style={{ textAlign: "center" }}>

                                                <TotalVaccination />

                                            </div>
                                            <div className="column is-4-tablet is-4-desktop" style={{ textAlign: "center" }}>

                                                <TotalVacinationDose1 />

                                            </div>
                                            <div className="column is-4-tablet is-4-desktop" style={{ textAlign: "center" }}>

                                                <TotalVacinationDose2 />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column is-12-tablet is-6-desktop">

                            <div className="card">
                                <div className="card-content" style={{ padding: '12px' }}>
                                    <div className="content" >
                                        Vaccination Dose Status

                                        <div className="columns ">

                                            <div className="column is-12-tablet is-12-desktop" style={{ textAlign: "center" }}>

                                                <TotalCases />

                                            </div>


                                        </div>
                                        <div className="columns ">


                                            <div className="column is-4-tablet is-4-desktop" style={{ textAlign: "center" }}>

                                                <ActiveCase />

                                            </div>
                                            <div className="column is-4-tablet is-4-desktop" style={{ textAlign: "center" }}>

                                                <Recovered />

                                            </div>
                                            <div className="column is-4-tablet is-4-desktop" style={{ textAlign: "center" }}>

                                                <Deaths />

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <h1 style={{ padding: '12px' }}>ຂໍ້ມູນການສັກວັກຊີນ Covid-19</h1>
                    <div className="columns ">

                        <div className="column is-12-tablet is-12-desktop">
                            <VaccineInfo />
                        </div>
                    </div>

                    <h1 style={{ padding: '12px' }}>ຂໍ້ມູນສະຖານະການ Covid-19 ທົ່ວປະເທດລາວ</h1>
                    <div className="columns ">

                        <div className="column is-12-tablet is-12-desktop">
                            <StatusInfor />
                        </div>
                    </div>
                    <div style={{ padding: '12px' }}>
                        <h1 className="title" style={{ margin: '0px' }} >Laos</h1>
                        <p >As on: 13 Oct 2021, 8: 00 IST (GMT+5: 30)</p>
                    </div>

                    <div className="columns ">

                        <div className="column is-12-tablet is-12-desktop">
                            <PeopleCase/>
                        </div>
                    </div>

                    <div className="columns ">

                        <div className="column is-12-tablet is-12-desktop">
                            <VaccinationChart />
                        </div>
                    </div>



                </div>
            </section>


        </div>
    )
}

export default Content