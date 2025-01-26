import React from 'react';

const WithLogging = (WrappedComponent) => {
  class HOC extends React.Component {
    componentDidMount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName = WrappedComponent.name || 'Component';
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.displayName = `WithLogging(${WrappedComponent.name || 'Component'})`;

  return HOC;
};

export default WithLogging;
