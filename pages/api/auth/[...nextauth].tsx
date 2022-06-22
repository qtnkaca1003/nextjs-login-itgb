import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
export default nextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "887683151777-vt4ba252u7sqbah02veebpl32dpu5nab.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: "575100697553277",
      clientSecret: "bb0d4b5068684568131ac6c735d0e604",
    }),
  ],
  secret: "secret",
});
