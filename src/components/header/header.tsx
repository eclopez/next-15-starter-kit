interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
}

function Header(props: HeaderProps) {
  const { className, text, ...others } = props;
  return (
    <header className={`bg-black ${className}`} {...others}>
      <h1 className="font-medium font-serif text-heading-1 text-white">
        {text}
      </h1>
    </header>
  );
}

export { Header };
