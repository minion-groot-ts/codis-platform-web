// import type { OAuthConfig, OAuthUserConfig } from "@auth/core/providers"

// export interface CodisProfile extends Record<string, any> {
//   aud: string
//   azp: string
//   email: string
//   email_verified: boolean
//   exp: number
//   family_name?: string
//   given_name: string
//   hd?: string
//   iat: number
//   iss: string
//   jti?: string
//   locale?: string
//   name: string
//   nbf?: number
//   picture: string
//   sub: string
// }

// export default function Codis<P extends CodisProfile>(
//   options: OAuthUserConfig<P>
// ): OAuthConfig<P> {
//   return {
//     id: "codis",
//     name: "Codis Platform Provider",
//     type: "oidc",
//     issuer: "http://localhost:3000/oidc",
//     wellKnown: "http://localhost:3000/oidc/.well-known/openid-configuration",
//     authorization: 'http://localhost:3000/oidc/auth',
//     // authorization: {
//     //   params: {
//     //     authorization_endpoint: "http://localhost:3000/oidc/auth",
//     //     response_mode: "query"
//     //   },
//     // },
//     checks: ['pkce']
//   }
// }


// // http://localhost:3000/oidc/auth
// // ?client_id=W6geb4napbE3LgvKbW8gThj56sXexFa6
// // &redirect_uri=https://oidcdebugger.com/debug
// // &scope=openid
// // &response_type=code
// // &response_mode=query
// // &code_challenge_method=S256
// // &code_challenge=F5x25k9WmkF-gQvP3FQNYIeChqPBuvy6T3V6yYakYvg
// // &state=f8qezz2xw4
// // &nonce=5cen4ucr5fj