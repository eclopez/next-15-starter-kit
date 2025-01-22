interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
}

function Header(props: HeaderProps) {
  const { text, ...others } = props;
  return (
    <header {...others}>
      <h1>{text}</h1>
    </header>
  );
}

export { Header };
