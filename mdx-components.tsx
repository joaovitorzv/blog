import type { MDXComponents } from "mdx/types";
import { useState } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "28px",
          color: "white",
          fontWeight: "900",
        }}
      >
        {children}
      </h1>
    ),
    img: (props) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <img
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "auto",
              borderRadius: "7px",
              cursor: "pointer",
            }}
            onClick={() => setIsOpen(true)}
            {...props}
          />
          {isOpen && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => setIsOpen(false)}
            >
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "80%",
                  borderRadius: "7px",
                }}
                {...props}
              />
            </div>
          )}
        </>
      );
    },
    code: (props) => {
      const isCodeBlock = props.className?.includes("hljs");
      return (
        <code
          style={{
            fontSize: "13px",
            backgroundColor: "#1c1c1c",
            color: "#a7d8fc",
            borderRadius: "7px",
            padding: isCodeBlock ? "12px 12px" : "2px 6px",
            border: "1px solid #2e2e2e",
            fontFamily: "monospace",
            fontWeight: "normal",
          }}
          {...props}
        />
      );
    },
    a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
    ...components,
  };
}
