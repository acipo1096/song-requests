import { Html } from "@react-email/html";

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <div>This is a test email! Hello!</div>
    </Html>
  );
}

export default Email;
