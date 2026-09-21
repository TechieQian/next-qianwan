import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: (token: string | null) => void;
}

export default class Captcha extends React.Component<CaptchaProps> {
  constructor(props: CaptchaProps) {
    super(props);
    this.captcha = React.createRef<ReCAPTCHA>();
  }

  captcha: React.RefObject<ReCAPTCHA | null>;

  render() {
    return (
      <ReCAPTCHA
        ref={this.captcha}
        sitekey="6Led9a8UAAAAAJV5q2v6C_U33C6CiUP_kjwqXSpu"
        onChange={this.props.onVerify}
      />
    );
  }
}
