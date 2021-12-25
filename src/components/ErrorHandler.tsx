import { PureComponent } from 'react';

class ErrorHandler extends PureComponent {
  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    const { hasError } = this.state as any;
    const { children } = this.props;

    if (hasError) {
      return <div>Error</div>;
    }

    return children;
  }
}

export default ErrorHandler;
