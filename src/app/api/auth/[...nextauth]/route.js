import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: "Email not working", type: "text", required: true, placeholder: "Your Name" },
                password: { label: "Password", type: "password", required: true, placeholder: "Enter Password" }
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