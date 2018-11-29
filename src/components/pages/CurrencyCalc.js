import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';

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

const CurrencyPage = (props) => {
	return (
			<main className="currency-main">
				<CurrencyPageIntro />
				<CurrencyCalculator baseCurr={props.baseCurr} quoteCurr={props.quoteCurr} onBaseCurrencySelect={props.onBaseCurrencySelect} onQuoteCurrencySelect={props.onQuoteCurrencySelect} onCurrencyInputChange={props.onCurrencyInputChange} convertedValue={props.convertedValue} displayValueBox={props.displayValueBox} rates={props.rates} baseCurrencyValue={props.baseCurrencyValue} rate={props.rate}  />
			</main>
		);
}

const CurrencyPageIntro = () => {
	return (
		<section className="currency-main__intro py-4">
			<div className="container">
				<h2 className="text-center">Currency Calculator</h2>
			</div>
		</section>
	);
};

class CurrencyCalculator extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { baseCurr, quoteCurr, onBaseCurrencySelect, onQuoteCurrencySelect, onCurrencyInputChange, convertedValue, displayValueBox, rates, baseCurrencyValue, rate } = this.props;

		const currency = currencies.map((e, i) => {
			return (
				<option value={e} key={e}>
					{e}
				</option>
			);
		});

		return (
			<div className="currency-main__calculator">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<select
								className="form-control mt-4"
								id="base-currency"
								value={baseCurr}
								onChange={(event) => onBaseCurrencySelect(event.target.value, baseCurrencyValue, rates, quoteCurr, rate)}
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
								onChange={(event) => onQuoteCurrencySelect(event.target.value, baseCurrencyValue, rate, rates)}
							>
								<option value="">Select quote currency</option>
								{currency}
							</select>
						</div>
					</div>
					<CurrencyValues displayValueBox={displayValueBox} rates={rates} baseCurr={baseCurr} quoteCurr={quoteCurr} onCurrencyInputChange={onCurrencyInputChange} convertedValue={convertedValue} baseCurrencyValue={baseCurrencyValue} rate={rate} />
				</div>
			</div>
		);
	}
}

class CurrencyValues extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { displayValueBox, rates, baseCurr, quoteCurr, onCurrencyInputChange, convertedValue, baseCurrencyValue, rate } = this.props;
		console.log("baseCurr", baseCurr, "rates", rates, "baseCurrencyValue", baseCurrencyValue, "rate", rate, "quoteCurr", quoteCurr, "convertedValue", convertedValue)

		if (displayValueBox === 'none' && quoteCurr !== "" && baseCurr !== "" && rates !== [] ) {
			return null;
		} else {
			return (
				<div className="row mt-4" style={{ display: displayValueBox }}>
					<div className="col-8 col-sm-6 mt-2 d-flex align-items-center">
						<div className="input-group">
							<input
								type="number"
								defaultValue={0}
								step="1"
								className="form-control"
								onChange={(event) => onCurrencyInputChange(event.target.value, rate )}
							/>
							<div className="input-group-append">
								<div className="input-group-text">{baseCurr}</div>
							</div>
						</div>
					</div>

					<div className="col-8 col-sm-5 mt-2">
						<p className="h2 text-center">
							{convertedValue} {quoteCurr}
						</p>
					</div>

				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		baseCurr: state.calculator.baseCurrency,
		quoteCurr: state.calculator.quoteCurrency,
		rates: state.calculator.rates,
		convertedValue: state.calculator.convertedValue,
		displayValueBox: state.calculator.displayValueBox,
		baseCurrencyValue: state.calculator.baseCurrencyValue,
		rate: state.calculator.rate
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onBaseCurrencySelect: (baseCurrency, baseValue, rates, quoteCurrency, rate) => dispatch(actionCreators.selectBaseCurrency(baseCurrency, baseValue, rates, quoteCurrency, rate)),
		onQuoteCurrencySelect: (quoteCurrency, baseValue, rate, rates) => dispatch(actionCreators.selectQuoteCurrency(quoteCurrency, baseValue, rate, rates)),
		onCurrencyInputChange: (inputValue, rate) => dispatch(actionCreators.handleInputChange(inputValue, rate))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
