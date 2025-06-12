'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ClientErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Filter out hydration errors
    if (
      error.message.includes('Hydration failed') ||
      error.message.includes('hydration') ||
      error.message.includes('Hydration')
    ) {
      // Suppress hydration errors in production
      console.log('Hydration error suppressed:', error.message);
      this.setState({ hasError: false });
      return;
    }
    
    // Log other errors
    console.error('Error caught by ClientErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 text-center">
          <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
          <p>Please try refreshing the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ClientErrorBoundary; 