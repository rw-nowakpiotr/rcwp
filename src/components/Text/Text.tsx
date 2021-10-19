type TextProps = {
  // bez prymitywów <span>Hej!</span>
  // nie wejdzie 1,2,4, "hello", itp.
  // children: JsxElements

  children: React.ReactNode // to przyjmuje wszystko :)
}

// React.FC

function Text({ children }: TextProps) {
  return <p>{children}</p>
}

export { Text };
