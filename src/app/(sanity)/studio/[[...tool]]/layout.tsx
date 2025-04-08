function RootLayout(props: React.PropsWithChildren<object>) {
  const { children } = props;

  return (
    <html lang="en">
      <body style={{ margin: '0' }}>{children}</body>
    </html>
  );
}

export default RootLayout;
