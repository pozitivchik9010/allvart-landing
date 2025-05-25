export default function FlexContainer({ children, className }) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
