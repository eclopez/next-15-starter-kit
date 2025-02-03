import Link from 'next/link';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
}

function Header(props: HeaderProps) {
  const { className, text, ...others } = props;
  return (
    <header
      className={`bg-black flex flex-row items-center justify-between pl-4 py-2 pr-8 ${className}`}
      {...others}
    >
      <Link href="/">
        <h1 className="font-medium font-serif text-heading-1 text-white">
          {text}
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link className="text-white" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
