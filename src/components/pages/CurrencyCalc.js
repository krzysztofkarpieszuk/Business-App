import React from 'react';
import axios from 'axios';

const currencies = [
	'PLN',
	'EUR',
	'USD',
	'GBP',
	'CHF',
	'JPY',
	'DKK',
	'BGN',
	'CAD',
	'BRL',
	'HUF',
	'NOK',
	'AUD',
	'ZAR',
	'CNY',
	'RUB',
	'SEK',
	'PHP',
	'NZD',
	'SGD',
	'HRK',
	'CZK',
	'INR',
	'RON',
	'MYR',
	'ISK',
	'ILS',
	'MXN',
	'IDR',
	'HKD',
	'THB'
];

class CurrencyPage extends React.Component {
	render() {
		return (
			<main className="currency-main">
				<CurrencyPageIntro />
			</main>
		);
	}
}

const CurrencyPageIntro = () => {
	return (
		<section className="currency-main__intro py-4">
			<div className="container">
				<h2 className="text-center">Currency Calculator</h2>
				<CurrencyCalculator />
			</div>
		</section>
	);
};

class CurrencyCalculator extends React.Component {
	constructor() {
		super();

		this.state = {
			baseCurr: '',
			quoteCurr: '',
			rates: [],
			showValues: 'none'
		};
	}

	onBaseCurrencyChange = (e) => {
		const url = `https://api.exchangeratesapi.io/latest?base=${e.target.value}`;

		axios.get(url).then((res) => {
			console.log(res.data);
			this.setState({
				rates: res.data.rates
			});
		});
		this.setState({
			baseCurr: e.target.value
		});
	};

	onQuoteCurrencyChange = (e) => {
		this.setState({
			quoteCurr: e.target.value,
			showValues: 'flex'
		});
	};

	render() {
		const { baseCurr, quoteCurr, rates, showValues } = this.state;

		const currency = currencies.map((e, i) => {
			return (
				<option value={e} key={e}>
					{e}
				</option>
			);
		});

		return (
			<div className="currency-main__calculator">
				<div className="row">
					<div className="col-sm-6">
						<select
							className="form-control mt-4"
							id="base-currency"
							value={baseCurr}
							onChange={this.onBaseCurrencyChange}
						>
							<option value="">Select base currency</option>
							{currency}
						</select>
					</div>
					<div className="col-sm-6">
						<select
							className="form-control mt-4"
							id="quote-currency"
							value={quoteCurr}
							onChange={this.onQuoteCurrencyChange}
						>
							<option value="">Select quote currency</option>
							{currency}
						</select>
					</div>
				</div>
				<CurrencyValues showValues={showValues} baseCurr={baseCurr} rates={rates} quoteCurr={quoteCurr} />
			</div>
		);
	}
}

class CurrencyValues extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            convertedValue: 0,
            baseValue: 0
		};
	}

	calculateCurrency = (e) => {
        let value =  (e.target.value * this.props.rates[this.props.quoteCurr]).toFixed(2)

		this.setState({
            baseValue: e.target.value,
            convertedValue: value
        })
    };

    onUpdateBtnClick = () => {
        let value =  (this.state.baseValue * this.props.rates[this.props.quoteCurr]).toFixed(2)

        this.setState({
            convertedValue: value
        })
    }

	render() {
		const { showValues, rates, baseCurr, quoteCurr } = this.props;

		if (showValues === 'none') {
			return null;
		} else {
			return (
				<div className="row mt-4" style={{ display: showValues }}>
					<div className="col-8 col-sm-6 mt-2 d-flex align-items-center">
						<div className="input-group">
							<input
								type="number"
								defaultValue={0}
								step="1"
								className="form-control"
								onChange={this.calculateCurrency}
							/>
							<div className="input-group-append">
								<div className="input-group-text">{baseCurr}</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-sm-5 mt-2">
						<p className="h2 text-center">{this.state.convertedValue} {quoteCurr}</p>
					</div>

					<div className="col-8 col-sm-6 mt-2">
						<p className="lead">
							Exchange rate: <span className="h5">{rates[quoteCurr]}</span>{' '}
						</p>
					</div>

					<div className="col-8 col-sm-6 mt-2">
						<button className="btn btn-primary"  onClick={this.onUpdateBtnClick}>
							Update
						</button>
					</div>
				</div>
			);
		}
	}
}

export default CurrencyPage;
