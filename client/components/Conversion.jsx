import React from 'react'
//import Price from 'react-forex-price'
import {getConversion} from '../api.js'
import Logic from './Logic'

export default class Conversion extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            rates: []
        }
        this.updateRates = this.updateRates.bind(this)
    }

   componentDidMount(){
       getConversion(this.updateRates)
   }


   updateRates(err, res, number) {
    let newRates = {
        NZD: res.rates.NZD,
        IDR: res.rates.IDR,
        RUB: res.rates.RUB
    }
    this.setState({
        rates: newRates
    })
    console.log('halo', newRates)
}   


// Try to use .map to render currencies
// make sure storing from the API. make sure that what I wanted in state look like what it looks like
    render() {
        console.log('hey', this.state)
        return (
            <div>
                <div>
                {this.state.rates.RUB * <Conversion />} <Conversion />
                </div>
                <p>Today's Russian Rubel is {this.state.rates.RUB} and it is equal to 1 USD</p>
                <p>Today's Indonesian Rupiah is {this.state.rates.IDR} and it is equal to 1 USD</p>
                <p>Today's New Zealand Dollar is {this.state.rates.NZD} and it is equal to 1 USD</p>
            </div>
        
        )
    }
} 