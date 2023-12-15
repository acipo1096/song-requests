import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/components";

export function Email(props) {
  const { url } = props;

  return (
    <>
      <Button href={url} style={{ color: "#61dafb", padding: "10px 20px" }}>
        Click me
      </Button>
    </>
  );
}

export default Email;
