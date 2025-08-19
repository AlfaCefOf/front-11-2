import { useTranslation } from "react-i18next";
import "./i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./header";
import Section from "./section";
import Remain from "./Components/remain";
import remain1 from "./img/remain1.png";
import remain2 from "./img/remain2.png";
import remain3 from "./img/remain3.png";
import remain4 from "./img/remain4.png";
import Working from "./Components/working";
import work1 from "./img/work1.png";
import work2 from "./img/work2.png";
import work3 from "./img/work3.png";
import work4 from "./img/work4.png";
import Item from "./Components/item";
import pitem1 from "./img/pitem1.png";
import pitem2 from "./img/pitem2.png";
import pitem3 from "./img/pitem3.png";
import pitem4 from "./img/pitem4.png";
import pitem5 from "./img/pitem5.png";
import Food from "./Components/food";
import food1 from "./img/food1.png";
import food2 from "./img/food2.png";
import food3 from "./img/food3.png";
import food4 from "./img/food4.png";
import food5 from "./img/food5.png";
import food6 from "./img/food6.png";
import Deadline from "./Components/deadline";
import Result from "./Components/result";
import result1 from "./img/result1.png";
import result2 from "./img/result2.png";
import Footer from "./Components/footer";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Section />
      <div className="remainLine">
        <Remain
          imgRem={remain1}
          nameRem={t("nameRemain")}
          dayRem="6 Days Remaining"
        />
        <Remain
          imgRem={remain2}
          nameRem={t("nameRemain")}
          dayRem="6 Days Remaining"
        />
        <Remain
          imgRem={remain3}
          nameRem={t("nameRemain")}
          dayRem="7 Days Remaining"
        />
        <Remain
          imgRem={remain4}
          nameRem={t("nameRemain")}
          dayRem="8 Days Remaining"
        />
      </div>
      <h2 className="workingHow">{t("howWork")}</h2>
      <div className="workLine">
        <Working
          imgWork={work1}
          nameWork={t("workName1")}
          descWork={t("workDesc1")}
        />
        <Working
          imgWork={work2}
          nameWork={t("workName2")}
          descWork={t("workDesc2")}
        />
        <Working
          imgWork={work3}
          nameWork={t("workName3")}
          descWork={t("workDesc3")}
        />
        <Working
          imgWork={work4}
          nameWork={t("workName4")}
          descWork={t("workDesc4")}
        />
      </div>
      <h2 className="itemsPop">{t("itemsPopular")}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="itemsLine"
      >
        <SwiperSlide>
          <Item
            imgItem={pitem1}
            nameItem="Cheese Burger"
            locItem="Burger Arena"
            costItem="$3.88"
            btnItem={t("itemBtn")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            imgItem={pitem2}
            nameItem="Toffe’s Cake"
            locItem="Top Sticks"
            costItem="$4.00"
            btnItem={t("itemBtn")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            imgItem={pitem3}
            nameItem="Dancake"
            locItem="Cake World"
            costItem="$1.99"
            btnItem={t("itemBtn")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            imgItem={pitem4}
            nameItem="Crispy Sandwitch"
            locItem="Fastfood Dine"
            costItem="$3.00"
            btnItem={t("itemBtn")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            imgItem={pitem5}
            nameItem="Thai Soup"
            locItem="Foody man"
            costItem="$2.79"
            btnItem={t("itemBtn")}
          />
        </SwiperSlide>
      </Swiper>
      <Toaster position="top-right" />
      <h2 className="foodSearch">{t("textFood")}</h2>
      <div className="foodLine">
        <Food imgFood={food1} foodName="Pizza" />
        <Food imgFood={food2} foodName="Burger" />
        <Food imgFood={food3} foodName="Noodles" />
        <Food imgFood={food4} foodName="Sub-sandiwch" />
        <Food imgFood={food5} foodName="Chowmein" />
        <Food imgFood={food6} foodName="Steak" />
      </div>
      <Deadline />
      <Result
        articleResult={t("resultArticle")}
        infoResult={t("resultInfo")}
        btnResult={t("resultBtn")}
        imgResult={result1}
      />

      <Result
        articleResult={t("resultArticle2")}
        infoResult={t("resultInfo2")}
        btnResult={t("resultBtn")}
        imgResult={result2}
        className="reverse"
      />
      <Footer />
    </>
  );
}

export default App;
