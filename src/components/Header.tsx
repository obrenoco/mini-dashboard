export const Header = ({ children }: { children: JSX.Element | string }) => {
  return (
    <header className="flex relative top-0 w-full h-20 text-center p-4 items-center justify-center">
      {children}
    </header>
  );
};
