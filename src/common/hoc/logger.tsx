import { useEffect } from 'react';

// Define a generic Higher-Order Component type
function withLogger<P>(WrappedComponent: React.ComponentType<P>) {
    // Return a new component that logs props
    const LoggerComponent: React.FC<P & React.PropsWithChildren<P>> = (props) => {
        useEffect(() => {
            console.log(`[Logger]: ${WrappedComponent.name} mounted`);
            console.log(`[Logger]: Initial props:`, props);

            return () => {
                console.log(`[Logger]: ${WrappedComponent.name} unmounted`);
            };
        }, [props]);

        useEffect(() => {
            console.log(`[Logger]: ${WrappedComponent.name} updated with new props:`, props);
        }, [props]);

        return (
            <>
                <div>Logger info: {WrappedComponent.name}</div>
                <WrappedComponent {...props} />
            </>

        );
    };

    return LoggerComponent;
}

export default withLogger