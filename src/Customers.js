import React, {Component} from 'react';
import { 
  Panel,
  Image
} from 'react-bootstrap/lib'

import axios from 'axios'

import CustomerDetail from './CustomerDetail'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  async componentDidMount() {
    await this.getCustomerData();
  }

  //Function to get the Customer Data from json
  async getCustomerData() {
    const response = await axios.get('https://wi-recruitment.herokuapp.com/strategies')
    this.setState({ customerList: response.data })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="card card-centeralign">
        {

          this.state.customerList.map(customer => <Panel bsStyle="info" key={customer.name} className="centeralign card-body">
            <Panel.Heading>
              <Image src={customer.image_url} className="image-size" />
              <Panel.Title componentClass="h3">{customer.name}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <CustomerDetail 
                oneMonthReturn={customer.one_month_return}
                meanReturn={customer.mean_return}
                minInvestment={customer.min_investment}
                eligibility={customer.eligibility}
              />
              <Panel.Footer className="text-muted" color="red" onClick={() => this.setState({selectedCustomer: customer.id})}>Explore Investment Data</Panel.Footer>
            </Panel.Body>
          </Panel>)
        }
      </div>
      
    </div>)
  }

}
