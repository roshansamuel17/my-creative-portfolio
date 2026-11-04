export function Container({ children, ...props }) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" {...props}>
      {children}
    </div>
  );
}
