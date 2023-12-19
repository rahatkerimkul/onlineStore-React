import React, { useEffect, useState } from "react";
import Body from "../../components/body/Body";
import PostService from "../../API/PostService";
import Loader from "../../Loader/Loader";

function Posts({ addItem }) {
  const [products, setProducts] = useState([
    //   {
    //     id: 1,
    //     name: "Apple Iphone 13 128Gb Midnight",
    //     price: 320000,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    //   },
    //   {
    //     id: 2,
    //     name: "Apple Airpods with Charging Case white",
    //     price: 60000,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/hbc/h5a/63761265426462.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000",
    //   },
    //   {
    //     id: 3,
    //     name: "Ноутбук Apple MacBook Air 13 MGN63 серый",
    //     price: 430000,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000",
    //   },
    //   {
    //     id: 4,
    //     name: "Подставка для ноутбука Creative Bracket UN-60",
    //     price: 1625,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h0a/ha5/64119036379166.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/creative-bracket-un-60-101298013/?c=750000000",
    //   },
    //   {
    //     id: 5,
    //     name: "USB Flash карта Kingston DTX/32GB 32 Гб",
    //     price: 1890,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/hc0/hbc/64229720358942.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/kingston-dtx-32gb-32-gb-101056212/?c=750000000",
    //   },
    //   {
    //     id: 6,
    //     name: "Письменный стол Арапбек 114x40x140 см stolpis002",
    //     price: 14200,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/hdb/h6f/64379432665118.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/arapbek-114x40x140-sm-stolpis002-106541589/?c=750000000",
    //   },
    //   {
    //     id: 7,
    //     name: "Стилус Apple Pencil 2nd Generation",
    //     price: 59500,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/he0/h71/63829302345758.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/apple-pencil-2nd-generation-60900001/?c=750000000",
    //   },
    //   {
    //     id: 8,
    //     name: "детские YokoSun, упаковка 64 шт",
    //     price: 779,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h90/h10/84709353652254.png?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/detskie-yokosun-upakovka-64-sht-100623547/?c=750000000",
    //   },
    //   {
    //     id: 9,
    //     name: "Bella ватные палочки Cotton 160 шт",
    //     price: 349,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h73/hf8/84637755080734.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/bella-vatnye-palochki-cotton-160-sht-100224758/?c=750000000",
    //   },
    //   {
    //     id: 10,
    //     name: "Colgate зубная паста Тройное Действие Натуральная мята 219 г",
    //     price: 855,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/hf3/h24/80773595627550.png?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/colgate-zubnaja-pasta-troinoe-deistvie-natural-naja-mjata-219-g-101004574/?c=750000000",
    //   },
    //   {
    //     id: 11,
    //     name: "T-VITEK триммер универсальное VT-822",
    //     price: 998,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h32/hf7/63990737633310.jpg?format=gallery-large",
    //     url: "https://kaspi.kz/shop/p/t-vitek-trimmer-universal-noe-vt-822-103487709/?c=750000000",
    //   },
    //   {
    //     id: 12,
    //     name: "Naturella прокладки ежедневные Normal 20 шт",
    //     price: 614,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h9f/h62/63974203031582.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/naturella-prokladki-ezhednevnye-normal-20-sht-101973034/?c=750000000",
    //   },
    //   {
    //     id: 13,
    //     name: "Игровая приставка Sony PlayStation 5 белый",
    //     price: 264690,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000",
    //   },
    //   {
    //     id: 14,
    //     name: "Стул N-12, 81x50x25 см, белый",
    //     price: 6960,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
    //   {
    //     id: 15,
    //     name: "Пылесос Karcher VC 3 Premium белый",
    //     price: 49990,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/hcb/h48/63767046193182.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/karcher-vc-3-premium-belyi-3700709/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
    //   {
    //     id: 16,
    //     name: "Отпариватель Xiaomi Mijia Handheld Ironing Machine белый",
    //     price: 9885,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/had/h44/63992917622814.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/xiaomi-mijia-handheld-ironing-machine-belyi-101803335/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
    //   {
    //     id: 17,
    //     name: "Вафельница SOKANY SK-907 черный",
    //     price: 12959,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h4f/hce/64177858183198.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/vafel-nitsa-sokany-sk-907-chernyi-102604838/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
    //   {
    //     id: 18,
    //     name: "Телевизор Samsung UE43T5300AUXCE 109 см черный",
    //     price: 168832,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
    //   {
    //     id: 19,
    //     name: "Mizam 8902061 диван, обивка ткань, 50x220x130, серый",
    //     price: 64995,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-50x220x130-seryi-104172973/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
    //   {
    //     id: 20,
    //     name: "Планшет Apple iPad 2021 Wi-Fi 10.2 дюйм 3 Гб/64 Гб серый",
    //     price: 166020,
    //     urlimage:
    //       "https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium",
    //     url: "https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=Cj0KCQiA67CrBhC1ARIsACKAa8RRA7b_TVK-K91osxQHTRV6U2RvvuHo0S8XHMRe3VxMwy5OVePTYG4aAmZlEALw_wcB",
    //   },
  ]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const onAdditem = (Item) => {
    addItem(Item);
  };
  async function fetchPosts() {
    try {
      setIsPostLoading(true);
      setTimeout(async () => {
        const posts = await PostService.getAll();
        setProducts(posts);
        setIsPostLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {isPostLoading ? (
        <Loader />
      ) : (
        <Body products={products} onAdditem={onAdditem} />
      )}
    </div>
  );
}

export default Posts;
