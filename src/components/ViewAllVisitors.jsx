import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllVisitors = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("http://172.16.12.153:4000/getvistors").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        ()=>{fetchData()},[]
    )
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Purpose</th>
                                    <th scope="col">Whom To Meet</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.purpose}</td>
                                            <td>{value.whomToMeet}</td>
                                            <td>{value.date}</td>
                                        </tr>
                                        }
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllVisitors