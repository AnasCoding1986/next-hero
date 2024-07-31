import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Email", type: "text", required: true, placeholder: "email" },
                password: { label: "Password", required: true, type: "password", placeholder: "password" }
              },
              async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
                return true;
              }
        })
    ]

})

export { handler as GET, handler as POST }