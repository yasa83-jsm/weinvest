import React, {Component} from 'react';
import {
  Table
} from 'react-bootstrap/lib'

export default class CustomerDetail extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  	const { 
  	oneMonthReturn,
  	meanReturn,
  	minInvestment,
  	eligibility
  	} = this.props

  	return (<Table strip borderless className="customer-detail">
                <tr>
                  <td className="align-left">1 Month return</td>
                  <td className="align-right">{oneMonthReturn}</td>
                </tr>
                <tr>
                  <td className="align-left">Mean Return</td>
                  <td className="align-right">{meanReturn}</td>
                </tr>
                <tr>
                  <td className="align-left">Minimum Investment</td>
                  <td className="align-right">{minInvestment}</td>
                </tr>
                <tr>
                  <td className="align-left">Eligibility</td>
                  <td className="align-right">{eligibility}</td>
                </tr>
              </Table>)
  }
}