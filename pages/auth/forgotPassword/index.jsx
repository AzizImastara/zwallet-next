import React, { useState } from "react";
import axios from "utils/axios";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
import { getDataCookie } from "middleware/authorizationPage";
import Link from "next/link";

import mail from "assets/img/icon/mail.svg";
import lock from "assets/img/icon/lock.svg";

import Layout from "components/Layout";
import LayoutAuth from "components/LayoutAuth";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);
  if (dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/main/home",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function ForgotPassword() {
  // const router = useRouter();
  // const [form, setForm] = useState({ email: "", password: "" });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("/auth/login", form)
  //     .then((res) => {
  //       console.log(res);
  //       Cookie.set("id", res.data.data.id);
  //       Cookie.set("token", res.data.data.token);
  //       router.push("/main/home");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(form);
  // };

  // const handleChangeText = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  return (
    <Layout title="Forgot Password">
      <div className="row">
        <div className="col-lg-7 col-sm-0 d-none d-md-inline-block">
          <LayoutAuth />
        </div>
        <div className="col-lg-5 col-sm-12 d-flex justify-content-center layout__login--form">
          <h2>
            Did You Forgot Your Password? Don’t Worry, You Can Reset Your
            Password In a Minutes.
          </h2>
          <p>
            To reset your password, you must type your e-mail and we will send a
            link to your email and you will be directed to the reset password
            screens.
          </p>
          <form>
            <input
              img={mail}
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              // onChange={handleChangeText}
            />
            <div className="form__button">
              <button className="btn btn-primary mt-3">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}