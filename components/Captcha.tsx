import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: Function;
}

export default class Captcha extends React.Component<CaptchaProps> {
  constructor(props: CaptchaProps) {
    super(props);
    this.captcha = React.createRef();
  }

  captcha;

  render() {
    return (
      // @ts-ignore
      <ReCAPTCHA
        ref={this.captcha}
        sitekey={process.env.SITE_KEY}
        onChange={this.props.onVerify}
      />
    );
  }
}
