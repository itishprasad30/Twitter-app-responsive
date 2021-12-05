import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      // Itish prasasd sahoo -> itishprasadsahoo this method dooooo......
      session.user.uid = token.sub;
      //  token .sub google uid that gives back

      return session;
    },
  },

  // Jwt secret value

  secret: process.env.JWT_SECRET,
});
