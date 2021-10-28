import React from 'react'

const StatusInfor = () => {
    return (
        <div>
            <div className="card" style={{ textAlign: 'center', padding: '0px', overflow: 'auto' }}>
                <div className="card-content">
                    <div className="content">
                        <table className="table">
                            <thead>
                                <tr>
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
                                <tr>
                                    <td>Vientiane </td>
                                    <td>2333</td>
                                    <td>3333</td>
                                    <td>5666</td>
                                    <td>2333</td>
                                    <td>3333</td>
                                    <td>5666</td>
                                    <td>5666</td>
                                    <td>5666</td>

                                </tr>
                                <tr>
                                    <td>Luaang Prabang </td>
                                    <td>2333</td>
                                    <td>3333</td>
                                    <td>5666</td>
                                    <td>2333</td>
                                    <td>3333</td>
                                    <td>5666</td>
                                    <td>5666</td>
                                    <td>5666</td>

                                </tr>
                                <tr>
                                    <td>Savanhnakhet </td>
                                    <td>2333</td>
                                    <td>3333</td>
                                    <td>5666</td>
                                    <td>2333</td>
                                    <td>3333</td>
                                    <td>5666</td>
                                    <td>5666</td>
                                    <td>5666</td>

                                </tr>
                               


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusInfor
