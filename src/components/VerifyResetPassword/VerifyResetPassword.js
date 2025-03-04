import React, { useEffect, useState } from "react";
import "../Signin/Signin.css";

import Axios from "axios";

import { useNavigate } from "react-router-dom";

import img_back1 from "../../image/hero-shape-2.svg";

import login_img from "../../image/login.svg";
import sign_img from "../../image/sign.svg";

export default function VerifyResetPassword() {


  const [verify, setverify] = useState("");
  const [email, setemail] = useState("");
  const [verifyerr, setverifyerr] = useState("");

  const Navigate = useNavigate();

  const code = () => {
    console.log("Verification code sent:", verify); // طباعة الرمز للتأكد من صحته

    Axios.post(
      `http://${process.env.REACT_APP_BASE_URL}/api/v2/auth/verifyResetPassword`,
      {
        verificationCode: verify,
        email,
      }
    )
      .then((res) => {
        console.log(res);
        setverifyerr("");
        Navigate("/resetPassword");
      })
      .catch((error) => {
        console.error(error);

        if (error.response?.data?.message) {
          setverifyerr(error.response.data.message); // عرض رسالة الخطأ المناسبة
        } else {
          setverifyerr("An unknown error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="signin">
      <img className="back1" src={img_back1} />
      <div className="forms-container">
        <div className="signin-signup">
          <div className="sign-in-form form">
            <h2 className="title">ضع بريدك اللكتروني والرمز المرسل اليه</h2>
            <p style={{top: "50px"}}>{verifyerr}</p>
            <div className="input-field">
              <span className="material-symbols-outlined">person</span>
              <input
                type="email"
                placeholder="بريد الكتروني"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <span className="material-symbols-outlined">code</span>
              <input
                type="text"
                placeholder="ضع الرمز"
                value={verify}
                onChange={(e) => setverify(e.target.value)}
              />
            </div>
            <input
              onClick={code}
              type="submit"
              value="ارسال الرمز"
              className="btn solid"
            />
          </div>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>مرحباً بكم في B2U</h3>
            <p>
              مرحبًا بك في B2U، دليل الأعمال المثالي الخاص بك! تواصل مع أفضل
              الشركات واكتشف خدمات لا مثيل لها. ليس لديك حساب؟ أنشئ حسابًا وافتح
              فرصًا لا حصر لها.
            </p>
            
          </div>
          <img src={login_img} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>مرحباً بكم في B2U</h3>
            <p>
              احصل على إمكانية الوصول إلى رؤى تجارية حصرية وتواصل مع شركات من
              الدرجة الأولى. سواء كنت تتطلع إلى توسيع شبكتك أو استكشاف فرص
              جديدة، فإن منصتنا مصممة لمساعدتك على النجاح. سجّل الدخول الآن لبدء
              رحلتك مع B2U.
            </p>
          </div>
          <img src={sign_img} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
