export { default as Google } from "next-auth/providers/google";
import Google from "next-auth/providers/google";

export default function GoogleProvider() {
  return Google({
    authorization: {
      params: {
        scope: [
          "openid",
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  });
}
