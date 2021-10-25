type ContainerProps = {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div style={{ marginTop: 20 }}>
      {children}
    </div>
  );
}

export { Container };
