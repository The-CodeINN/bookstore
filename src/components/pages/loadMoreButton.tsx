import CaretDownIcon from '../../assets/icons/caretDownIcon';

type LoadMoreButtonProps = {
  onClick: () => void;
  text?: string;
  className?: string;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const LoadMoreButton = ({
  onClick,
  text = 'Load More',
  className = '',
  isLoading = false,
  ...rest
}: LoadMoreButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center font-sans font-medium ${className}`}
    disabled={isLoading || rest.disabled}
    {...rest}
  >
    {isLoading ? 'Loading...' : text}
    <CaretDownIcon className='-rotate-90 scale-75' />
  </button>
);

export default LoadMoreButton;
