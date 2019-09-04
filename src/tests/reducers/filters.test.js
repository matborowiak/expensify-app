import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
   expect(state).toEqual({
       text: '',
       sortBy: 'date',
       startDate: moment().startOf('month'),
       endDate: moment().endOf('month')
   })
})

test('Text filter state', () => {
    const defaultState = {
        text: 'aaaa',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'TEXT_FILTER',
        text: 'e'
    }
    const result = filtersReducer(defaultState, action)
    expect(result).toEqual({
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set startDate filter', () => {
    const state = filtersReducer( undefined, {type: 'SET_START_DATE', date: 654684})
    expect(state.startDate).toBe(654684)
})

test('should set endDate filter', () => {
    const state = filtersReducer( undefined, {type: 'SET_END_DATE', date: 9876543})
    expect(state.endDate).toBe(9876543)
})