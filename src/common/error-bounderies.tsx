import React from "react";
interface ErrorState {
    hasError:boolean,
    
}
/**
 * Error boundary doest not catch API call, event listener and Server side rendering
 */
export default class ErrorBoundary extends React.Component<any, ErrorState> {
    constructor(props: {}) {
      super(props);
      this.state = { hasError: false } ;
    }
  
    static getDerivedStateFromError(error:Error) {
      // Update state to show fallback UI on the next render
      return { hasError: true };
    }
  
    componentDidCatch(error:Error, info:any) {
      // Log error information
      console.error('Error caught:', error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // Render fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }