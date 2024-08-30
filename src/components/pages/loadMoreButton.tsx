import CaretDownIcon from "../../assets/icons/caretDownIcon";

type LoadMoreButtonProps = {
  onClick: () => void;
  text?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const LoadMoreButton = ({
  onClick,
  text = "Load More",
  className = "",
  ...rest
}: LoadMoreButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center font-sans font-medium ${className}`}
    {...rest}
  >
    {text}
    <CaretDownIcon className='-rotate-90 scale-75' />
  </button>
);

export default LoadMoreButton;
