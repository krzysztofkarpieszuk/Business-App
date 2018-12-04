import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import {currencies, currenciesNames} from '../../currencies';




const CurrencyPage = (props) => {
	return (
			<main className="currency-main">
				<CurrencyPageIntro />
				<CurrencyCalculator {...props}/>
			</main>
		);
}

const CurrencyPageIntro = () => {
	return (
		<section className="currency-main__intro pt-3 pt-md-4">
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
		const { baseCurr, quoteCurr, onBaseCurrencySelect, onQuoteCurrencySelect, onChangeButtonClick, rates, baseCurrencyValue, rate } = this.props;

		const currency = currencies.map((element, index) => {
			return (
				<option value={element} key={`${element}${index}`}>
					{currenciesNames[index]}
				</option>
			);
		});



		return (
			<div className="currency-main__calculator">
				<div className="container">
					<div className="row no-gutters">
						<div className="col-sm-5">
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

						<div className="offset-5 offset-sm-0 col-2 mt-4 d-flex justify-content-center">
							<button className="btn btn-info" onClick={() => onChangeButtonClick(baseCurr, baseCurrencyValue, rates, quoteCurr, rate)}>
								<i className="fas fa-fw fa-exchange-alt" title="Swap currencies"></i>
							</button>
						</div>

						<div className="col-sm-5">
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
					<CurrencyValues {...this.props}/>
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

		const visibleValues = displayValueBox ? "visible" : "";

		if (!displayValueBox && quoteCurr !== "" && baseCurr !== "" && rates !== [] ) {
			return null;
		} else {
			return (
				<div className={`currency-main__calculator-value row mt-4 ${visibleValues}`}>
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
							{convertedValue === "NaN" ? `${baseCurrencyValue}.00` : convertedValue} {quoteCurr}
						</p>
					</div>

					<div className="col-8 col-sm-6 mt-2">
						<p className="lead">
							Exchange rate: <span className="h5">{rate}</span>
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
		onCurrencyInputChange: (inputValue, rate) => dispatch(actionCreators.handleInputChange(inputValue, rate)),
		onChangeButtonClick: (baseCurrency, baseValue, rates, quoteCurrency, rate) => dispatch(actionCreators.swapCurrencies(baseCurrency, baseValue, rates, quoteCurrency, rate))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
