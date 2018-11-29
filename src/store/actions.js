import axios from 'axios';

export const CALCULATE_CURRENCY = 'CALCULATE_CURRENCY';
export const REQUEST_CURRENCY_RATES = 'REQUEST_CURRENCY_RATES';
export const RECEIVE_RATES = 'RECEIVE_RATES';
export const SELECT_BASE_CURRENCY = 'SELECT_BASE_CURRENCY';
export const SELECT_QUOTE_CURRENCY = 'SELECT_QUOTE_CURRENCY';
export const SET_BASE_CURRENCY_VALUE = 'SET_BASE_CURRENCY_VALUE';
export const SET_RATE = 'SET_RATE';



export const selectBaseCurrency = (baseCurrency, baseValue, rates, quoteCurrency, rate) => {
    return (dispatch, getState) => {
        dispatch(fetchRates(baseCurrency));
        const firstStateUpdate = getState()
        dispatch(setRate(firstStateUpdate.calculator.rates, quoteCurrency));

        const updatedState = getState()
        console.log("updatedState",updatedState.calculator.rate)
        dispatch(calculateCurrency(baseValue, updatedState.calculator.rate))
    }
}

const setQuoteCurrency = (quote, rates) => {
    return {
        type: SELECT_QUOTE_CURRENCY,
        quoteCurrency: quote
        // rate: rates[quote]
    }
}

export const selectQuoteCurrency = (quoteCurrency, baseValue, rate, rates) => {
    return (dispatch, getState) => {
        dispatch(setQuoteCurrency(quoteCurrency, rates));
        dispatch(setRate(rates, quoteCurrency))

        const updatedState = getState();
        console.log("updatedState",updatedState.calculator.rate)
        dispatch(calculateCurrency(baseValue, updatedState.calculator.rate))
    }
}

export const receiveRates = (response, baseCurrency) => {
    return {
        type: RECEIVE_RATES,
        rates: response.data.rates,
        baseCurrency: baseCurrency
    }
}

const setRate = (rates, quoteCurrency) => {
    return {
        type: SET_RATE,
        rate: rates[quoteCurrency]
    }
}

const fetchRates = baseCurrency => {
    return dispatch => {
        return axios.get(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`).then( response => dispatch(receiveRates(response, baseCurrency)))
    }
}

export const handleInputChange = (inputValue, rate) => {
    return dispatch => {
        dispatch(setBaseCurrencyValue(inputValue));
        dispatch(calculateCurrency(inputValue, rate))
    }
}

const calculateCurrency = (baseValue, rate) => {
    return {
        type: CALCULATE_CURRENCY,
        convertedValue: (baseValue * rate).toFixed(2)
    }
}

const setBaseCurrencyValue = value => {
    return {
        type: SET_BASE_CURRENCY_VALUE,
        baseCurrencyValue: value
    }
}
