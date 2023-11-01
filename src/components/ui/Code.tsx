"use client";

import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { themes, Highlight } from "prism-react-renderer";


interface CodeProps {
  code: string
  show: boolean
  language: string
  animationDelay?: number
  animated?: boolean
}

const Code: FC<CodeProps> = ({
  code,
  show,
  animated,
  animationDelay,
  language,
}) => {
  // active theme of the app
  const { theme: applicationTheme } = useTheme()
  const { nightOwl, nightOwlLight } = themes;

  const [text, setText] = useState<string>(animated ? '' : code)

  useEffect(() => {
    if (show && animated) {
      let i = 0;

      // this whole logic should run for 150ms
      setTimeout(() => {
        // this makes the code have the typing illusion
        const intervalId = setInterval(() => {
          setText(code.slice(0, i))
          i++

          // if you have exceeded the code character stop the interval
          if (i > code.length) {
            clearInterval(intervalId)
          }
        }, 15);

        // clean up function
        return () => clearInterval(intervalId)
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay])

  // number of lines
  const lines = text.split(/\r\n|\r|\n/).length

  const theme = applicationTheme === 'light' ? nightOwlLight : nightOwl;

  return (
    <Highlight code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'
          }
          style={{
            maxHeight: show ? lines * 24 : 0,
            opacity: show ? 1 : 0,
          }}>
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            // the line above because we don't use the key props
            const { key, ...rest } = getLineProps({ line, key: i })
            return (
              <div key={`line-${i}`} style={{ position: 'relative' }} {...rest}>
                {line.map((token, index) => {
                  // eslint-disable-next-line no-unused-vars
                  const { key, ...props } = getTokenProps({ token, i })
                  return <span key={index} {...props} />
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
