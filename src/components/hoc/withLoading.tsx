import React, { useState, ComponentType } from 'react';

// Define the props that the HOC will inject
interface WithLoadingProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

// Define the props that the wrapped component expects
type WrappedComponentProps = {
  onClick: () => void;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// The HOC function
function withLoading<P extends WrappedComponentProps>(
  WrappedComponent: ComponentType<P>
) {
  // Define a named function component
  function WithLoadingComponent(props: Omit<P, keyof WithLoadingProps>) {
    // State to manage loading
    const [isLoading, setIsLoading] = useState(false);

    // Handler that wraps the original onClick
    const handleClick = async () => {
      setIsLoading(true);
      if (props.onClick) {
        await props.onClick();
      }
      setIsLoading(false);
    };

    // Render the wrapped component with additional props
    return (
      <WrappedComponent
        {...(props as P)}
        onClick={handleClick}
        disabled={isLoading || props.disabled}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    );
  }

  // Set a display name for the component
  WithLoadingComponent.displayName = `WithLoading(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithLoadingComponent;
}

export default withLoading;
