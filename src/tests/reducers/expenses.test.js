import uuid from 'uuid'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense', () => {
    const expenseNew = {
        id: uuid(),
        description: 'Something new',
        note: '',
        amount: 2000,
        createdAt: 100
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseNew
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expenseNew])
})

test('should edit expense', () => {
    const updates = {
        description: 'After update',
        note: 'after update',
        amount: 2000,
        createdAt: 100
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[0]).toEqual({ id: 1, ...updates})
})

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})