import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { PageIndex } from "pakagelogin-nhanqt";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { logInFb } from "../redux/slices/loginSlices";
import { IUserFb } from "../type/tpye";
const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userLg = useAppSelector((state) => state.addToken.userFb);
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onClickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const acc: IUserFb = {
      token: userName,
      name: userName,
      avatar: "",
      email: userName + "@gmail.com",
      userID: userName + "userID",
      note: "Đăng nhập bằng tài khoảng!",
    };
    console.log(acc);
    dispatch(logInFb(acc));
  };
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (userLg.name === "" && session === undefined) {
      router.push("/");
    } else if (session?.user?.name !== undefined) {
      router.push("/dashboard/dashboard");
    } else if (userLg.token !== "") {
      router.push("/dashboard/dashboard");
    }
  }, [session, userLg]);
  console.log(session?.user?.image);
  return (
    <>
      <PageIndex
        paddingTitle="0 0 49px"
        onSubmit={onClickLogin}
        onChangePassword={changePassword}
        onChangeUserName={changeUsername}
        LoginFb={signIn}
        LoginGg={signIn}
        sizeButton="large"
        textButton="LOGIN"
        typeButton="button"
      />
    </>
  );
};
export default Home;
