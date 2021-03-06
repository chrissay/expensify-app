import authReducer from '../../reducers/auth';

test('should set uid at login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('should clear uid at logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({})
});