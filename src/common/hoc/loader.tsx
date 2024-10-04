import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface LoadinPropsInterface {
    loading:boolean,
    err:FetchBaseQueryError | SerializedError | undefined
}

// Define a generic Higher-Order Component type
function withLoaderAndErrorHandling<P>(WrappedComponent: React.ComponentType<P>) {
    // Return a new component that logs props
    const LoaderComponent: React.FC<P & LoadinPropsInterface> = (props) => {
        const {loading, err} = props;
        if(loading){
            return <div>Loading component show...</div>
        }
        if(err){
            return <div>Error in showing view...</div>
        }
        return <WrappedComponent {...props} />
    };

    return LoaderComponent;
}

export default withLoaderAndErrorHandling