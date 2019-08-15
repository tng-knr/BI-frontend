import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { NavLink } from 'react-router-dom';

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Progress,
  Row,
  Table
} from 'reactstrap';
import ProgressBarCard from '../../components/progressBarCard';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import kenya from '../../assets/img/brand/kenya.svg';
import { SvgLoader, SvgProxy } from 'react-svgmt';

// eslint-disable-next-line no-unused-vars
const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandDanger = getStyle('--danger');

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

const bar = {
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [100, 59, 80]
    }
  ]
};

const pie = {
  labels: ['Business', 'Legal', 'HR', 'Finance'],
  datasets: [
    {
      data: [300, 50, 100, 400],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#20c997'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#20c997']
    }
  ]
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const Mdata = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Parking',
      fill: false,
      lineTension: 0.3,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [100, 59, 80, 81, 56, 55, 40, 79, 85, 120, 150, 155]
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: true
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 5,
      hoverRadius: 4,
      hoverBorderWidth: 1
    }
  }
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  determineCardColor(value) {
    let className = '';
    if (value <= 20) {
      className = 'bg-danger';
    } else if (value <= 40) {
      className = 'bg-warning';
    } else if (value <= 50) {
      className = 'bg-info';
    } else if (value > 79) {
      className = 'bg-primary';
    }
    return className;
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <NavLink to="county-system" className="nav-link">
              <ProgressBarCard
                metric={'Parking'}
                value={50.987}
                percentage={50}
                target={100}
                className={this.determineCardColor(50)}
              />
            </NavLink>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <NavLink to="#" className="nav-link">
              <ProgressBarCard
                metric={'Land rates'}
                value={30.987}
                percentage={30}
                target={100}
                className={this.determineCardColor(30)}
              />
            </NavLink>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <NavLink to="#" className="nav-link">
              <ProgressBarCard
                metric={'Cess'}
                value={80.987}
                percentage={80}
                target={100}
                className={this.determineCardColor(80)}
              />
            </NavLink>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <NavLink to="#" className="nav-link">
              <ProgressBarCard
                metric={'Bills'}
                value={30.987}
                percentage={30}
                target={100}
                className={this.determineCardColor(10)}
              />
            </NavLink>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Product Perfomance</CardTitle>
                    <div className="small text-muted">Yearly</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <ButtonGroup className="float-right">
                      <ButtonDropdown
                        id="card1"
                        isOpen={this.state.card1}
                        toggle={() => {
                          this.setState({ card1: !this.state.card1 });
                        }}
                      >
                        <DropdownToggle
                          caret
                          className="p-0"
                          color="transparent"
                        />
                        <DropdownMenu right>
                          <DropdownItem>Select Period</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </ButtonGroup>
                  </Col>
                </Row>
                <div
                  className="chart-wrapper"
                  style={{ height: 460 + 'px', marginTop: 40 + 'px' }}
                >
                  <Line data={Mdata} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                Transactions
                <ButtonGroup className="float-right">
                  <ButtonDropdown
                    id="card4"
                    isOpen={this.state.card4}
                    toggle={() => {
                      this.setState({ card4: !this.state.card4 });
                    }}
                  >
                    <DropdownToggle caret className="p-0" color="transparent" />
                    <DropdownMenu right>
                      <DropdownItem>Select Period</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
              </CardHeader>
              <CardBody>
                <br />
                <Table
                  hover
                  responsive
                  className="table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th>Product</th>
                      <th>Perfomance</th>
                      <th className="text-center">Income Generated</th>
                      <th>Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>Product a</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 12,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>10 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Product f</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>24%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="24"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 1,000,050 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>10 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Product a</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="success"
                          value="50"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 12,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>10 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Product d</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>35%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="warning"
                          value="35"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 1,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>5 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Product b</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="danger"
                          value="10"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 1,000,456 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>5 Years</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Product c</div>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>46%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Target: 6666</small>
                          </div>
                        </div>
                        <Progress
                          className="progress-xs"
                          color="info"
                          value="46"
                        />
                      </td>
                      <td className="text-center">
                        <strong>Ksh: 2,000,000 million</strong>
                      </td>
                      <td>
                        <div className="small text-muted">
                          Duration of Operation
                        </div>
                        <strong>5 Years</strong>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;