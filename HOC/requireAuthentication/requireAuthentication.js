import { GetServerSideProps, GetServerSidePropsContext } from "next";
export function requireAuthentication(gssp) {
  return async (ctx) => {
    const { req } = ctx;
    const Token = req.cookies.access_token;
    if (!Token) {
      return {
        redirect: {
          parmanent: false,
          destination: "/Login",
        },
      };
    }
    // console.log("ffhkfsdahkf", Token);
    return await gssp(ctx);
  };
}
