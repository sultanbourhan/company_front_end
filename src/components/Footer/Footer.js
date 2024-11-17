import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope, // استيراد faEnvelope من مكتبة solid
} from "@fortawesome/free-solid-svg-icons";  // استيراد الأيقونات من مكتبة solid

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";  // استيراد الأيقونات من مكتبة brands

import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;BEST TO YOU&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;BEST TO YOU&nbsp;
          </span>
        </button>
        <nav>
          <Link>الصفحة الرئيسية</Link>
          <Link>الشركات</Link>
          <Link>من نحن</Link>
        </nav>
        {/* <span>© 2025 BEST TO YOU. All rights reserved.</span> */}
      </div>
      <div>
        <p>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Damascus, Syria</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          <span>0964873645</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>b2u2424@gmail.com</span>
        </p>
        <p className="icon">
          {/* إضافة أيقونات التواصل الاجتماعي مباشرة بدون روابط */}
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faYoutube} />
        </p>
      </div>
      <div>
        <h3>من نحن</h3>
        <p>
        شركتي هي دليل أعمال موثوق به يوفر حلولاً مبتكرة لربط الشركات والعملاء من خلال نظام شامل
        </p>
      </div>
    </div>
  );
}
