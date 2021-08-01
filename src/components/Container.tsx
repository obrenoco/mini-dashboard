export const Container = ({ children }: { children: JSX.Element | string }) => {
  return <section className="p-4">{children}</section>;
};
