export const Heading = ({ children, isCenter }) => {
  return (
    <p className={`text-orange-500 text-xl ${isCenter && "md:text-center"}`}>
      {children}
    </p>
  );
};
