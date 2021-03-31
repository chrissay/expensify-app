import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expenseCount from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
        <p>
            Viewing {props.expenses.length} expenses totalling {numeral(props.expenseTotal / 100).format('$0,0.00')}
        </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: expenseCount(state.expenses, state.filters),
        expenseTotal: expensesTotal(state.expenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);