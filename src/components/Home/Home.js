import React, { useState, useEffect ,useContext } from "react";
import Axios from "axios";
import "./Home.css";

import { MyContext } from '../Context';

import { useNavigate } from "react-router-dom";

import img_hero1 from "../../image/hero1.jpg";
import img_hero2 from "../../image/hero2.jpg";
import img_hero3 from "../../image/hero3.jpg";
import img_back1 from "../../image/hero-shape-2.svg";
import img_back2 from "../../image/timeline.svg";
import img_plan from "../../image/ssssss.jpg";
import img_plan1 from "../../image/sssss.jpg";

import Loading from "../Loading/Loading";
export default function Home() {

  const { id_C, setid_C } = useContext(MyContext);


  const Navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get(
      `http://${process.env.REACT_APP_BASE_URL}/api/v2/company/get_Categorey`
    )
      .then((res) => {
        setCategory(res.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  // useEffect(() => {
  //   const logosSlides = document.querySelectorAll(".logos-slide");
  //   logosSlides.forEach((slide) => {
  //     const copy = slide.cloneNode(true);
  //     document.querySelector(".logos").appendChild(copy);
  //   });
  // }, []); // يتم التنفيذ مرة واحدة بعد تحميل المكون

  const logosSlides = document.querySelectorAll(".logos-slide");
  logosSlides.forEach((slide) => {
    const copy = slide.cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  });

  // ==============================================================

  const [company, setcompany] = useState([]);

  useEffect(() => {
    Axios.get(`http://${process.env.REACT_APP_BASE_URL}/api/v2/company`)
      .then((res) => {
        setcompany(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  // =====================================================


     const id_category = (id)=>{
      setid_C(id) 
       Navigate("/companys")
     }

  // ========================================

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="Home">
      <div className="bac">
        <img src={img_back2} alt="" />
        <img src={img_back1} alt="" />
        <div className="container">
          <div className="hero">
            <div className="about">
              <h1>
                BEST <br />
                <span>TO YOU</span>
              </h1>
              <p>
                شركة رائدة ملتزمة بتقديم حلول مبتكرة وفعالة لعملائنا. نسعى
                دائمًا إلى التميز من خلال تقديم خدمات ومنتجات عالية الجودة تلبي
                احتياجات السوق المتطورة. يعمل فريقنا المتخصص بشغف وإبداع لضمان
                رضا العملاء وتحقيق النجاح المستدام.
              </p>
              <button>جميع الشركات</button>
            </div>
            <div className="camp">
              <div className="minecamp">
                <img src={img_hero1} alt="" />
                <div className="contentcard">
                  <h2>افضل الشركات</h2>
                  <p>
                    تتميز هذه الشركات بسمعتها الممتازة في تقديم منتجات وخدمات
                    عالية الجودة، والابتكار المستمر، وإرضاء العملاء. وهي تمثل
                    قمة التميز في مجالاتها وتعمل كنموذج للأداء والنجاح.
                  </p>
                  <button>زيارة</button>
                </div>
              </div>
              <div className="minecamp">
                <img src={img_hero2} alt="" />
                <div className="contentcard">
                  <h2>أفضل الشركات في سوريا</h2>
                  <p>
                    تعد هذه الشركات من أفضل الشركات في سورية، وتتميز بقدرتها على
                    تقديم منتجات وخدمات عالية الجودة، والابتكار المستمر، وإرضاء
                    العملاء. وتمثل قمة التميز في مجالاتها، وتشكل نموذجًا للأداء
                    والنجاح.
                  </p>
                  <button>زيارة</button>
                </div>
              </div>
              <div className="minecamp">
                <img src={img_hero3} alt="" />
                <div className="contentcard">
                  <h2>افضل الشركات في دبي</h2>
                  <p>
                    تعد هذه الشركات من أفضل الشركات في دبي، وتتميز بقدرتها على
                    تقديم منتجات وخدمات عالية الجودة، والابتكار المستمر، وإرضاء
                    العملاء. وتمثل قمة التميز في مجالاتها المختلفة وتعمل كنموذج
                    للأداء والنجاح.
                  </p>
                  <button>زيارة</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="container">
          <h1>جميع الفئات</h1>
          <div className="cats">
            {category.map((cat) => (
              <div className="cat" key={cat.id}>
                <img className="img1" src={img_back1} alt="" />
                <div className="contantcat">
                  <img
                    className="img2"
                    src={`http://${cat.Categoreyimage}`}
                    alt=""
                  />
                  <div className="namecat">
                    <h2>{cat.name}</h2>
                    <button onClick={()=>id_category(cat._id)}>زيارة الفئة</button>
                  </div>
                </div>
                <p>{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="container">
          <div className="logos">
            {company
              ? company.map((com) => {
                  return (
                    <div className="logos-slide">
                      <img src={`http://${com.logoImage}`} alt="Logo 1" />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>

      <div className="plans">
        <div className="container">
          <div class="container__right">
            <div class="images">
              <img src={img_plan} alt="tent-1" class="tent-1" />
              <img src={img_plan1} alt="tent-2" class="tent-2" />
            </div>
            <div class="content">
              <h2> انضم اليوم</h2>
              <h3>ابدأ رحلتك التجارية معنا الآن</h3>
              <p>
                انضم إلى مجتمع الأعمال الخاص بنا اليوم واستمتع بفوائد الاشتراك في
                منصتنا. أنشئ حسابًا لشركتك وعرض خدماتك لمجموعة واسعة من العملاء.
                وسّع نطاق عملك وتفاعل مع شركاء جدد في الصناعة. اختر خطة الاشتراك
                التي تناسب احتياجاتك بشكل أفضل وابدأ في تعزيز حضورك عبر الإنترنت
                بدعم كامل من فريقنا.
              </p>
              <button onClick={() => Navigate("/company_requests")}>
                اشتراك
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
