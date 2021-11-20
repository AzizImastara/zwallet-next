import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "components/module/Header";
import Layout from "components/Layout";
import Sidebar from "components/module/Sidebar";
import Footer from "components/module/Footer";
import Search from "components/Search";
import axios from "utils/axios";
import { getDataCookie } from "middleware/authorizationPage";

import Image from "next/image";

import samuel from "assets/img/samuel.png";

export default function SearchReceiver(props) {
  // Client Side Rendering
  // const [data, setData] = useState(props.data);
  // // useEffect(() => {
  // //   getDataUser();
  // // }, []);
  // const getDataUser = () => {
  //   axios
  //     .get("/user?page=1&limit=2&search=&sort=")
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };
  // ==========================================================

  // Server Side Rendering
  // console.log(props);

  return (
    <Layout title="Search Receiver">
      <div className="hero__bg">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3 my-4">
              <Sidebar />
            </div>
            <div className="col-9 my-4">
              <div className="content__bg">
                <div className="receiver">
                  <h6>Search Receiver</h6>
                </div>
                <Search />
                <div className="receiver__transaction">
                  <div className="profile__user">
                    <Image src={samuel} alt="" />
                    <div className="profile__info">
                      <h6>Samuel Suhi</h6>
                      <p>+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                <div className="receiver__transaction">
                  <div className="profile__user">
                    <Image src={samuel} alt="" />
                    <div className="profile__info">
                      <h6>Samuel Suhi</h6>
                      <p>+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                <div className="receiver__transaction">
                  <div className="profile__user">
                    <Image src={samuel} alt="" />
                    <div className="profile__info">
                      <h6>Samuel Suhi</h6>
                      <p>+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
                <div className="receiver__transaction">
                  <div className="profile__user">
                    <Image src={samuel} alt="" />
                    <div className="profile__info">
                      <h6>Samuel Suhi</h6>
                      <p>+62 813-8492-9994</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        {/* {props.data.map((item) => (
        <div key={item.id}>
          <h3>{item.firstName}</h3>
        </div>
      ))} */}
      </div>
    </Layout>
  );
}
