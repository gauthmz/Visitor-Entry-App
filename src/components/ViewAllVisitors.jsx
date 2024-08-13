import React from 'react'

const ViewAllVisitors = () => {
    return (
        <div>
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
                                <tr>
                                    <td>Gautham</td>
                                    <td>Babu</td>
                                    <td>Enquiry</td>
                                    <td>David</td>
                                    <td>13.08.24</td>
                                </tr>
                                <tr>
                                    <td>Saira</td>
                                    <td>Sajan</td>
                                    <td>Enquiry</td>
                                    <td>Sreela</td>
                                    <td>12.08.24</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllVisitors