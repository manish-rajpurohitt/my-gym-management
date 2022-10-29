import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import { drawChart } from './../../../libraries/chart/chart';
import Member from './../../memberModule/Member/Member';
import HTTPService from '../../../main/services/HTTPService';

const DashBoard = () => {

  const [members, setMembers] = React.useState([]);

  useEffect(() => {
    // Runs ONCE after initial rendering
    drawChart();
    let fetchMembers = async () => {
      let mem = await HTTPService.getAllMembers();
      console.log(mem.data.members)
      setMembers(mem.data.members);
    }
    fetchMembers();
    
  }, []);

  return (
    <div classNameName="content">
      <div classNameName="row">
        <div classNameName="col-md-12">
          <div classNameName="card">
            <div classNameName="card-header">
              <h4 classNameName="card-title"> Dashboard</h4>
            </div>
            <div classNameName="card-body">

              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-globe text-warning"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Members</p>
                            <p className="card-title">{members.length}</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-money-coins text-success"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Subscribed Members</p>
                            <p className="card-title">{(members.filter(mem=>{return mem.isSubscribed === true})).length }</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-vector text-danger"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Current Logins</p>
                            <p className="card-title">23</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-body ">
                      <div className="row">
                        <div className="col-5 col-md-4">
                          <div className="icon-big text-center icon-warning">
                            <i className="nc-icon nc-favourite-28 text-primary"></i>
                          </div>
                        </div>
                        <div className="col-7 col-md-8">
                          <div className="numbers">
                            <p className="card-category">Activities</p>
                            <p className="card-title">4</p><p>
                            </p></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">

                      <h4 className="mb-3">Revenue</h4>
                      <canvas height="225" width="450" className="revenue-chart chartjs-render-monitor"></canvas>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="mb-3">Expenses</h4>
                      <canvas height="225" width="450" className="expense-chart chartjs-render-monitor"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <Member/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
