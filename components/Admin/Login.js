import { signIn, useSession } from "next-auth/react";
import Router from "next/router";
import { useRef, useState } from "react";

import style from "../../styles/components/Admin/LoginPage.module.scss";

export default function Login() {
  const { status } = useSession();
  const [error, setError] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginHandler = async (e) => {
    e.preventDefault();
    const { error } = await signIn("credentials", {
      redirect: false,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      callbackUrl: "/",
    });
    if (error) setError(error);
  };

  if (status === "authenticated") {
    Router.push("admin/dashboard", undefined, { shallow: true });
  }

  return (
    <div className={style.login}>
      {status === "unauthenticated" && (
        <div>
          <h3>Log in</h3>
          {error}
          <form onSubmit={(e) => loginHandler(e)}>
            <input placeholder="Email" name="email" ref={emailRef} />
            <input
              type="password"
              placeholder="Pasword"
              name="password"
              ref={passwordRef}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}
