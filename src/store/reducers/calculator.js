import * as actionTypes from '../actions';

const initialState = {
    rates: [],
    rate: 0,
    baseCurrencyValue: 0,
    baseCurrency: "",
    quoteCurrency: "",
    convertedValue: 0,
    displayValueBox: "none"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SELECT_BASE_CURRENCY:
            return {
                ...state,
                baseCurrency: action.baseCurrency,
            }

        case actionTypes.SELECT_QUOTE_CURRENCY:
            return {
                ...state,
                quoteCurrency: action.quoteCurrency,
                rate: action.rate,
                displayValueBox: "flex"
            }

        case actionTypes.RECEIVE_RATES: {
            return {
                ...state,
                rates: action.rates,
                baseCurrency: action.baseCurrency
            }
        }

        case actionTypes.CALCULATE_CURRENCY: {
            return {
                ...state,
                convertedValue: action.convertedValue
            }
        }

        case actionTypes.SET_BASE_CURRENCY_VALUE: {
            return {
                ...state,
                baseCurrencyValue: action.baseCurrencyValue
            }
        }

        case actionTypes.SET_RATE: {
            return {
                ...state,
                rate: action.rate
            }
        }

    }
    return state;
}

export default reducer;