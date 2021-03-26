// Higher Order Component (HOC) - A regular ol' React component that renders another component
// Point of a HOC is to 1) reuse code; 2) render hijacking; 3) prop manipulation; 4) abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to see info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthoInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthoInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'))