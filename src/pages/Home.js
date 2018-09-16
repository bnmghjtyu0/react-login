import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div class="main-panel">
            <div class="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>User</th>
                              <th>First name</th>
                              <th>Progress</th>
                              <th>Amount</th>
                              <th>Deadline</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="py-1">1</td>
                              <td>Herman Beck</td>
                              <td>
                                <div class="progress">
                                  <div class="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                              </td>
                              <td>$ 77.99</td>
                              <td>May 15, 2015</td>
                            </tr>
                            <tr>
                              <td class="py-1">2</td>
                              <td>Messsy Adam</td>
                              <td>
                                <div class="progress">
                                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                              </td>
                              <td>$245.30</td>
                              <td>July 1, 2015</td>
                            </tr>
                            <tr>
                              <td class="py-1">3</td>
                              <td>John Richards</td>
                              <td>
                                <div class="progress">
                                  <div class="progress-bar bg-warning" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                              </td>
                              <td>$138.00</td>
                              <td>Apr 12, 2015</td>
                            </tr>
                            <tr>
                              <td class="py-1">4</td>
                              <td>Peter Meggik</td>
                              <td>
                                <div class="progress">
                                  <div class="progress-bar bg-primary" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                              </td>
                              <td>$ 77.99</td>
                              <td>May 15, 2015</td>
                            </tr>
                            <tr>
                              <td class="py-1">5</td>
                              <td>Edward</td>
                              <td>
                                <div class="progress">
                                  <div class="progress-bar bg-danger" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                                </div>
                              </td>
                              <td>$ 160.25</td>
                              <td>May 03, 2015</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
