import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../../actions/filters'
import moment from 'moment'

test('should create action object with provided value', () => {
    const action = setTextFilter('abc')
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'abc'
    })
})
test('should create action object with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    })
})

test('should create Date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should create Amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should create set start date action object', () => {
    const action = setStartDate(moment(6123154))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(6123154)
    })
})

test('should create set end date action object', () => {
    const action = setEndDate(moment(6549846))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(6549846)
    })
})
