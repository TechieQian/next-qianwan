import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaProps {
  onVerify: (token: string) => void;
}

export default function Captcha({ onVerify }: CaptchaProps) {
  return (
    <ReCAPTCHA
      sitekey="6Led9a8UAAAAAJV5q2v6C_U33C6CiUP_kjwqXSpu"
      onChange={(token) => onVerify(token ?? "")}
      onExpired={() => onVerify("")}
      onErrored={() => onVerify("")}
    />
  );
}
