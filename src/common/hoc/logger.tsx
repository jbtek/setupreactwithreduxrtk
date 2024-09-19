import React, { useEffect } from 'react';

// Define a generic Higher-Order Component type
function withLogger<P>(WrappedComponent: React.ComponentType<P>) {
    // Return a new component that logs props
    const LoggerComponent: React.FC<P & React.PropsWithChildren<P>> = (props) => {
        useEffect(() => {
            console.log(`[Logger]: ${WrappedComponent.name} mounted`);
            console.log(`[Logger]: Initial props:`, props.children);

            return () => {
                console.log(`[Logger]: ${WrappedComponent.name} unmounted`);
            };
        }, []);

        useEffect(() => {
            console.log(`[Logger]: ${WrappedComponent.name} updated with new props:`, props);
        }, [props]);

        return (
            <React.Fragment>
                <div>Logger info: {WrappedComponent.name}</div>
                <WrappedComponent {...props} />
            </React.Fragment>

        );
    };

    return LoggerComponent;
}

export default withLogger