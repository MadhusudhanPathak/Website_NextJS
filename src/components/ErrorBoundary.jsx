"use client";

import { Component } from "react";

const SHOW_DETAILS = process.env.NODE_ENV !== "production";

/**
 * Catches render errors anywhere below it and shows a fallback.
 * Error details are only rendered outside production.
 */
export default class ErrorBoundary extends Component {
  state = { error: null, componentStack: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ componentStack: errorInfo?.componentStack ?? null });
  }

  render() {
    const { error, componentStack } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (
      <div role="alert">
        <h2>Something went wrong.</h2>
        {SHOW_DETAILS && (
          <details style={{ whiteSpace: "pre-wrap" }}>
            {error.toString()}
            <br />
            {componentStack}
          </details>
        )}
      </div>
    );
  }
}
