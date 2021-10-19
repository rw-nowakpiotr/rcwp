// import { JsxElement } from "typescript";

type TextProps = {
  // bez prymitywów <span>Hej!</span>
  // nie wejdzie 1,2,4, "hello", itp.
  // children: JsxElement

  children: React.ReactNode // to przyjmuje wszystko :)
}

function Text({ children }: TextProps) {
  return <p>{children}</p>
}

export { Text };
