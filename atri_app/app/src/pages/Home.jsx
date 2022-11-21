import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex1Cb, useFlex2Cb, useFlex4Cb, useFlex138Cb, useFlex3Cb, useMenu1Cb, useFlex139Cb, useFlex5Cb, useFlex6Cb, useFlex8Cb, useFlex9Cb, useFlex10Cb, useFlex7Cb, useFlex11Cb, useFlex12Cb, useFlex371Cb, useFlex373Cb, useFlex13Cb, useFlex14Cb, useFlex365Cb, useFlex15Cb, useFlex366Cb, useFlex367Cb, useFlex21Cb, useFlex368Cb, useFlex25Cb, useFlex26Cb, useFlex27Cb, useFlex29Cb, useFlex30Cb, useFlex32Cb, useFlex35Cb, useFlex28Cb, useFlex37Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex297Cb, useProduct_Card_1Cb, useFlex42Cb, useProduct_Card_2Cb, useFlex43Cb, useFlex298Cb, useProduct_Card_3Cb, useFlex45Cb, useProduct_Card_4Cb, useFlex47Cb, useFlex57Cb, useFlex299Cb, useProduct_Card_6Cb, useFlex51Cb, useProduct_Card_5Cb, useFlex52Cb, useFlex300Cb, useProduct_Card_8Cb, useFlex49Cb, useProduct_Card_7Cb, useFlex50Cb, useFlex58Cb, useFlex59Cb, useFlex60Cb, useFlex62Cb, useFlex61Cb, useFlex63Cb, useFlex69Cb, useFlex89Cb, useFlex64Cb, useFlex65Cb, useFlex131Cb, useFlex132Cb, useFlex133Cb, useFlex134Cb, useFlex135Cb, useFlex67Cb, useFlex68Cb, useFlex128Cb, useFlex129Cb, useFlex130Cb, useFlex71Cb, useFlex72Cb, useFlex73Cb, useFlex74Cb, useFlex75Cb, useFlex76Cb, useFlex77Cb, useFlex81Cb, useFlex82Cb, useFlex85Cb, useFlex83Cb, useFlex84Cb, useFlex90Cb, useFlex91Cb, useFlex93Cb, useFlex94Cb, useFlex95Cb, useFlex92Cb, useFlex98Cb, useFlex99Cb, useFlex100Cb, useFlex101Cb, useFlex104Cb, useFlex102Cb, useFlex103Cb, useFlex107Cb, useFlex105Cb, useFlex106Cb, useFlex108Cb, useFlex137Cb, useFlex110Cb, useFlex112Cb, useFlex111Cb, useFlex113Cb, useFlex114Cb, useFlex115Cb, useFlex116Cb, useFlex117Cb, useFlex118Cb, useFlex121Cb, useFlex119Cb, useFlex125Cb, useFlex127Cb, useFlex120Cb, useFlex124Cb, useFlex122Cb, useFlex123Cb, useImage2Cb, useTextBox1Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useTextBox6Cb, useButton1Cb, useButton2Cb, useTextBox146Cb, useTextBox147Cb, useTextBox148Cb, useTextBox149Cb, useTextBox150Cb, useTextBox9Cb, useButton3Cb, useButton4Cb, useTextBox7Cb, useTextBox8Cb, useImage5Cb, useTextBox10Cb, useImage6Cb, useImage10Cb, useImage197Cb, useImage198Cb, useTextBox11Cb, useImage11Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useImage195Cb, useTextBox382Cb, useTextBox383Cb, useTextBox384Cb, useTextBox30Cb, useTextBox31Cb, useTextBox32Cb, useImage17Cb, useImage196Cb, useTextBox385Cb, useTextBox386Cb, useTextBox387Cb, useButton9Cb, useButton10Cb, useImage19Cb, useTextBox36Cb, useImage20Cb, useTextBox38Cb, useTextBox40Cb, useImage22Cb, useTextBox43Cb, useImage25Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useButton11Cb, useButton12Cb, useTextBox47Cb, useTextBox48Cb, useProduct_Image_1Cb, useProduct_Name_1Cb, useProduct_About_1Cb, useProduct_Price_1Cb, useProduct_About_2Cb, useProduct_Name_2Cb, useProduct_Image_2Cb, useProduct_Price_2Cb, useProduct_About_3Cb, useProduct_Name_3Cb, useProduct_Image_3Cb, useProduct_Price_3Cb, useProduct_About_4Cb, useProduct_Name_4Cb, useProduct_Image_4Cb, useProduct_Price_4Cb, useProduct_Image_6Cb, useProduct_Name_6Cb, useProduct_About_6Cb, useProduct_Price_6Cb, useProduct_About_5Cb, useProduct_Name_5Cb, useProduct_Image_5Cb, useProduct_Price_5Cb, useProduct_Image_8Cb, useProduct_Name_8Cb, useProduct_About_8Cb, useProduct_Price_8Cb, useProduct_Image_7Cb, useProduct_Name_7Cb, useProduct_About_7Cb, useProduct_Price_7Cb, useButton13Cb, useButton14Cb, useTextBox73Cb, useTextBox74Cb, useButton15Cb, useButton16Cb, useImage34Cb, useTextBox75Cb, useTextBox76Cb, useCarousel1Cb, useCarousel2Cb, useCarousel3Cb, useButton17Cb, useButton18Cb, useTextBox78Cb, useTextBox79Cb, useImage44Cb, useImage76Cb, useImage77Cb, useImage78Cb, useImage79Cb, useImage40Cb, useTextBox80Cb, useTextBox81Cb, useImage74Cb, useImage75Cb, useTextBox142Cb, useTextBox82Cb, useTextBox83Cb, useImage45Cb, useTextBox84Cb, useTextBox85Cb, useTextBox86Cb, useTextBox96Cb, useTextBox97Cb, useImage49Cb, useImage51Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useTextBox102Cb, useImage52Cb, useImage53Cb, useTextBox103Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useImage54Cb, useTextBox107Cb, useImage55Cb, useTextBox111Cb, useImage56Cb, useTextBox112Cb, useButton21Cb, useTextBox113Cb, useInput1Cb, useInput2Cb, useTextBox114Cb, useTextBox115Cb, useInput3Cb, useInput4Cb, useTextBox116Cb, useTextBox117Cb, useInput5Cb, useInput6Cb, useTextBox118Cb, useTextBox120Cb, useInput9Cb, useTextBox145Cb, useTextBox122Cb, useTextBox121Cb, useImage58Cb, useImage59Cb, useImage60Cb, useImage61Cb, useImage62Cb, useImage63Cb, useImage64Cb, useTextBox123Cb, useImage65Cb, useImage66Cb, useImage67Cb, useImage68Cb, useImage69Cb, useTextBox125Cb, useTextBox126Cb, useTextBox127Cb, useTextBox128Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox133Cb, useTextBox134Cb, useTextBox135Cb, useTextBox136Cb, useTextBox137Cb, useTextBox138Cb, useTextBox139Cb, useTextBox140Cb, useTextBox141Cb, useTextBox124Cb, useImage70Cb, useImage71Cb, useImage72Cb, useImage73Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Menu1Props = useStore((state)=>state["Home"]["Menu1"]);
const Menu1IoProps = useIoStore((state)=>state["Home"]["Menu1"]);
const Menu1Cb = useMenu1Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex371Props = useStore((state)=>state["Home"]["Flex371"]);
const Flex371IoProps = useIoStore((state)=>state["Home"]["Flex371"]);
const Flex371Cb = useFlex371Cb()
const Flex373Props = useStore((state)=>state["Home"]["Flex373"]);
const Flex373IoProps = useIoStore((state)=>state["Home"]["Flex373"]);
const Flex373Cb = useFlex373Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex365Props = useStore((state)=>state["Home"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["Home"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex366Props = useStore((state)=>state["Home"]["Flex366"]);
const Flex366IoProps = useIoStore((state)=>state["Home"]["Flex366"]);
const Flex366Cb = useFlex366Cb()
const Flex367Props = useStore((state)=>state["Home"]["Flex367"]);
const Flex367IoProps = useIoStore((state)=>state["Home"]["Flex367"]);
const Flex367Cb = useFlex367Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex368Props = useStore((state)=>state["Home"]["Flex368"]);
const Flex368IoProps = useIoStore((state)=>state["Home"]["Flex368"]);
const Flex368Cb = useFlex368Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["Home"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["Home"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex32Props = useStore((state)=>state["Home"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["Home"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex28Props = useStore((state)=>state["Home"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Home"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex297Props = useStore((state)=>state["Home"]["Flex297"]);
const Flex297IoProps = useIoStore((state)=>state["Home"]["Flex297"]);
const Flex297Cb = useFlex297Cb()
const Product_Card_1Props = useStore((state)=>state["Home"]["Product_Card_1"]);
const Product_Card_1IoProps = useIoStore((state)=>state["Home"]["Product_Card_1"]);
const Product_Card_1Cb = useProduct_Card_1Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Product_Card_2Props = useStore((state)=>state["Home"]["Product_Card_2"]);
const Product_Card_2IoProps = useIoStore((state)=>state["Home"]["Product_Card_2"]);
const Product_Card_2Cb = useProduct_Card_2Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex298Props = useStore((state)=>state["Home"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["Home"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Product_Card_3Props = useStore((state)=>state["Home"]["Product_Card_3"]);
const Product_Card_3IoProps = useIoStore((state)=>state["Home"]["Product_Card_3"]);
const Product_Card_3Cb = useProduct_Card_3Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Product_Card_4Props = useStore((state)=>state["Home"]["Product_Card_4"]);
const Product_Card_4IoProps = useIoStore((state)=>state["Home"]["Product_Card_4"]);
const Product_Card_4Cb = useProduct_Card_4Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex57Props = useStore((state)=>state["Home"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Home"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex299Props = useStore((state)=>state["Home"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["Home"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Product_Card_6Props = useStore((state)=>state["Home"]["Product_Card_6"]);
const Product_Card_6IoProps = useIoStore((state)=>state["Home"]["Product_Card_6"]);
const Product_Card_6Cb = useProduct_Card_6Cb()
const Flex51Props = useStore((state)=>state["Home"]["Flex51"]);
const Flex51IoProps = useIoStore((state)=>state["Home"]["Flex51"]);
const Flex51Cb = useFlex51Cb()
const Product_Card_5Props = useStore((state)=>state["Home"]["Product_Card_5"]);
const Product_Card_5IoProps = useIoStore((state)=>state["Home"]["Product_Card_5"]);
const Product_Card_5Cb = useProduct_Card_5Cb()
const Flex52Props = useStore((state)=>state["Home"]["Flex52"]);
const Flex52IoProps = useIoStore((state)=>state["Home"]["Flex52"]);
const Flex52Cb = useFlex52Cb()
const Flex300Props = useStore((state)=>state["Home"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["Home"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Product_Card_8Props = useStore((state)=>state["Home"]["Product_Card_8"]);
const Product_Card_8IoProps = useIoStore((state)=>state["Home"]["Product_Card_8"]);
const Product_Card_8Cb = useProduct_Card_8Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Product_Card_7Props = useStore((state)=>state["Home"]["Product_Card_7"]);
const Product_Card_7IoProps = useIoStore((state)=>state["Home"]["Product_Card_7"]);
const Product_Card_7Cb = useProduct_Card_7Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex58Props = useStore((state)=>state["Home"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Home"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex63Props = useStore((state)=>state["Home"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Home"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex67Props = useStore((state)=>state["Home"]["Flex67"]);
const Flex67IoProps = useIoStore((state)=>state["Home"]["Flex67"]);
const Flex67Cb = useFlex67Cb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex128Props = useStore((state)=>state["Home"]["Flex128"]);
const Flex128IoProps = useIoStore((state)=>state["Home"]["Flex128"]);
const Flex128Cb = useFlex128Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex91Props = useStore((state)=>state["Home"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Home"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex104Props = useStore((state)=>state["Home"]["Flex104"]);
const Flex104IoProps = useIoStore((state)=>state["Home"]["Flex104"]);
const Flex104Cb = useFlex104Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Home"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Home"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex107Props = useStore((state)=>state["Home"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Home"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex105Props = useStore((state)=>state["Home"]["Flex105"]);
const Flex105IoProps = useIoStore((state)=>state["Home"]["Flex105"]);
const Flex105Cb = useFlex105Cb()
const Flex106Props = useStore((state)=>state["Home"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Home"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex108Props = useStore((state)=>state["Home"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Home"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex110Props = useStore((state)=>state["Home"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Home"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex112Props = useStore((state)=>state["Home"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Home"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex111Props = useStore((state)=>state["Home"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Home"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex113Props = useStore((state)=>state["Home"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Home"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex114Props = useStore((state)=>state["Home"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Home"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["Home"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Home"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex116Props = useStore((state)=>state["Home"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Home"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex117Props = useStore((state)=>state["Home"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Home"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Flex118Props = useStore((state)=>state["Home"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Home"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex121Props = useStore((state)=>state["Home"]["Flex121"]);
const Flex121IoProps = useIoStore((state)=>state["Home"]["Flex121"]);
const Flex121Cb = useFlex121Cb()
const Flex119Props = useStore((state)=>state["Home"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Home"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex125Props = useStore((state)=>state["Home"]["Flex125"]);
const Flex125IoProps = useIoStore((state)=>state["Home"]["Flex125"]);
const Flex125Cb = useFlex125Cb()
const Flex127Props = useStore((state)=>state["Home"]["Flex127"]);
const Flex127IoProps = useIoStore((state)=>state["Home"]["Flex127"]);
const Flex127Cb = useFlex127Cb()
const Flex120Props = useStore((state)=>state["Home"]["Flex120"]);
const Flex120IoProps = useIoStore((state)=>state["Home"]["Flex120"]);
const Flex120Cb = useFlex120Cb()
const Flex124Props = useStore((state)=>state["Home"]["Flex124"]);
const Flex124IoProps = useIoStore((state)=>state["Home"]["Flex124"]);
const Flex124Cb = useFlex124Cb()
const Flex122Props = useStore((state)=>state["Home"]["Flex122"]);
const Flex122IoProps = useIoStore((state)=>state["Home"]["Flex122"]);
const Flex122Cb = useFlex122Cb()
const Flex123Props = useStore((state)=>state["Home"]["Flex123"]);
const Flex123IoProps = useIoStore((state)=>state["Home"]["Flex123"]);
const Flex123Cb = useFlex123Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Home"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Home"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["Home"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Home"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Home"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Home"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox149Props = useStore((state)=>state["Home"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Home"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Home"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Home"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image197Props = useStore((state)=>state["Home"]["Image197"]);
const Image197IoProps = useIoStore((state)=>state["Home"]["Image197"]);
const Image197Cb = useImage197Cb()
const Image198Props = useStore((state)=>state["Home"]["Image198"]);
const Image198IoProps = useIoStore((state)=>state["Home"]["Image198"]);
const Image198Cb = useImage198Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image195Props = useStore((state)=>state["Home"]["Image195"]);
const Image195IoProps = useIoStore((state)=>state["Home"]["Image195"]);
const Image195Cb = useImage195Cb()
const TextBox382Props = useStore((state)=>state["Home"]["TextBox382"]);
const TextBox382IoProps = useIoStore((state)=>state["Home"]["TextBox382"]);
const TextBox382Cb = useTextBox382Cb()
const TextBox383Props = useStore((state)=>state["Home"]["TextBox383"]);
const TextBox383IoProps = useIoStore((state)=>state["Home"]["TextBox383"]);
const TextBox383Cb = useTextBox383Cb()
const TextBox384Props = useStore((state)=>state["Home"]["TextBox384"]);
const TextBox384IoProps = useIoStore((state)=>state["Home"]["TextBox384"]);
const TextBox384Cb = useTextBox384Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox32Props = useStore((state)=>state["Home"]["TextBox32"]);
const TextBox32IoProps = useIoStore((state)=>state["Home"]["TextBox32"]);
const TextBox32Cb = useTextBox32Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const Image196Props = useStore((state)=>state["Home"]["Image196"]);
const Image196IoProps = useIoStore((state)=>state["Home"]["Image196"]);
const Image196Cb = useImage196Cb()
const TextBox385Props = useStore((state)=>state["Home"]["TextBox385"]);
const TextBox385IoProps = useIoStore((state)=>state["Home"]["TextBox385"]);
const TextBox385Cb = useTextBox385Cb()
const TextBox386Props = useStore((state)=>state["Home"]["TextBox386"]);
const TextBox386IoProps = useIoStore((state)=>state["Home"]["TextBox386"]);
const TextBox386Cb = useTextBox386Cb()
const TextBox387Props = useStore((state)=>state["Home"]["TextBox387"]);
const TextBox387IoProps = useIoStore((state)=>state["Home"]["TextBox387"]);
const TextBox387Cb = useTextBox387Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Image19Props = useStore((state)=>state["Home"]["Image19"]);
const Image19IoProps = useIoStore((state)=>state["Home"]["Image19"]);
const Image19Cb = useImage19Cb()
const TextBox36Props = useStore((state)=>state["Home"]["TextBox36"]);
const TextBox36IoProps = useIoStore((state)=>state["Home"]["TextBox36"]);
const TextBox36Cb = useTextBox36Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Home"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Home"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const Product_Image_1Props = useStore((state)=>state["Home"]["Product_Image_1"]);
const Product_Image_1IoProps = useIoStore((state)=>state["Home"]["Product_Image_1"]);
const Product_Image_1Cb = useProduct_Image_1Cb()
const Product_Name_1Props = useStore((state)=>state["Home"]["Product_Name_1"]);
const Product_Name_1IoProps = useIoStore((state)=>state["Home"]["Product_Name_1"]);
const Product_Name_1Cb = useProduct_Name_1Cb()
const Product_About_1Props = useStore((state)=>state["Home"]["Product_About_1"]);
const Product_About_1IoProps = useIoStore((state)=>state["Home"]["Product_About_1"]);
const Product_About_1Cb = useProduct_About_1Cb()
const Product_Price_1Props = useStore((state)=>state["Home"]["Product_Price_1"]);
const Product_Price_1IoProps = useIoStore((state)=>state["Home"]["Product_Price_1"]);
const Product_Price_1Cb = useProduct_Price_1Cb()
const Product_About_2Props = useStore((state)=>state["Home"]["Product_About_2"]);
const Product_About_2IoProps = useIoStore((state)=>state["Home"]["Product_About_2"]);
const Product_About_2Cb = useProduct_About_2Cb()
const Product_Name_2Props = useStore((state)=>state["Home"]["Product_Name_2"]);
const Product_Name_2IoProps = useIoStore((state)=>state["Home"]["Product_Name_2"]);
const Product_Name_2Cb = useProduct_Name_2Cb()
const Product_Image_2Props = useStore((state)=>state["Home"]["Product_Image_2"]);
const Product_Image_2IoProps = useIoStore((state)=>state["Home"]["Product_Image_2"]);
const Product_Image_2Cb = useProduct_Image_2Cb()
const Product_Price_2Props = useStore((state)=>state["Home"]["Product_Price_2"]);
const Product_Price_2IoProps = useIoStore((state)=>state["Home"]["Product_Price_2"]);
const Product_Price_2Cb = useProduct_Price_2Cb()
const Product_About_3Props = useStore((state)=>state["Home"]["Product_About_3"]);
const Product_About_3IoProps = useIoStore((state)=>state["Home"]["Product_About_3"]);
const Product_About_3Cb = useProduct_About_3Cb()
const Product_Name_3Props = useStore((state)=>state["Home"]["Product_Name_3"]);
const Product_Name_3IoProps = useIoStore((state)=>state["Home"]["Product_Name_3"]);
const Product_Name_3Cb = useProduct_Name_3Cb()
const Product_Image_3Props = useStore((state)=>state["Home"]["Product_Image_3"]);
const Product_Image_3IoProps = useIoStore((state)=>state["Home"]["Product_Image_3"]);
const Product_Image_3Cb = useProduct_Image_3Cb()
const Product_Price_3Props = useStore((state)=>state["Home"]["Product_Price_3"]);
const Product_Price_3IoProps = useIoStore((state)=>state["Home"]["Product_Price_3"]);
const Product_Price_3Cb = useProduct_Price_3Cb()
const Product_About_4Props = useStore((state)=>state["Home"]["Product_About_4"]);
const Product_About_4IoProps = useIoStore((state)=>state["Home"]["Product_About_4"]);
const Product_About_4Cb = useProduct_About_4Cb()
const Product_Name_4Props = useStore((state)=>state["Home"]["Product_Name_4"]);
const Product_Name_4IoProps = useIoStore((state)=>state["Home"]["Product_Name_4"]);
const Product_Name_4Cb = useProduct_Name_4Cb()
const Product_Image_4Props = useStore((state)=>state["Home"]["Product_Image_4"]);
const Product_Image_4IoProps = useIoStore((state)=>state["Home"]["Product_Image_4"]);
const Product_Image_4Cb = useProduct_Image_4Cb()
const Product_Price_4Props = useStore((state)=>state["Home"]["Product_Price_4"]);
const Product_Price_4IoProps = useIoStore((state)=>state["Home"]["Product_Price_4"]);
const Product_Price_4Cb = useProduct_Price_4Cb()
const Product_Image_6Props = useStore((state)=>state["Home"]["Product_Image_6"]);
const Product_Image_6IoProps = useIoStore((state)=>state["Home"]["Product_Image_6"]);
const Product_Image_6Cb = useProduct_Image_6Cb()
const Product_Name_6Props = useStore((state)=>state["Home"]["Product_Name_6"]);
const Product_Name_6IoProps = useIoStore((state)=>state["Home"]["Product_Name_6"]);
const Product_Name_6Cb = useProduct_Name_6Cb()
const Product_About_6Props = useStore((state)=>state["Home"]["Product_About_6"]);
const Product_About_6IoProps = useIoStore((state)=>state["Home"]["Product_About_6"]);
const Product_About_6Cb = useProduct_About_6Cb()
const Product_Price_6Props = useStore((state)=>state["Home"]["Product_Price_6"]);
const Product_Price_6IoProps = useIoStore((state)=>state["Home"]["Product_Price_6"]);
const Product_Price_6Cb = useProduct_Price_6Cb()
const Product_About_5Props = useStore((state)=>state["Home"]["Product_About_5"]);
const Product_About_5IoProps = useIoStore((state)=>state["Home"]["Product_About_5"]);
const Product_About_5Cb = useProduct_About_5Cb()
const Product_Name_5Props = useStore((state)=>state["Home"]["Product_Name_5"]);
const Product_Name_5IoProps = useIoStore((state)=>state["Home"]["Product_Name_5"]);
const Product_Name_5Cb = useProduct_Name_5Cb()
const Product_Image_5Props = useStore((state)=>state["Home"]["Product_Image_5"]);
const Product_Image_5IoProps = useIoStore((state)=>state["Home"]["Product_Image_5"]);
const Product_Image_5Cb = useProduct_Image_5Cb()
const Product_Price_5Props = useStore((state)=>state["Home"]["Product_Price_5"]);
const Product_Price_5IoProps = useIoStore((state)=>state["Home"]["Product_Price_5"]);
const Product_Price_5Cb = useProduct_Price_5Cb()
const Product_Image_8Props = useStore((state)=>state["Home"]["Product_Image_8"]);
const Product_Image_8IoProps = useIoStore((state)=>state["Home"]["Product_Image_8"]);
const Product_Image_8Cb = useProduct_Image_8Cb()
const Product_Name_8Props = useStore((state)=>state["Home"]["Product_Name_8"]);
const Product_Name_8IoProps = useIoStore((state)=>state["Home"]["Product_Name_8"]);
const Product_Name_8Cb = useProduct_Name_8Cb()
const Product_About_8Props = useStore((state)=>state["Home"]["Product_About_8"]);
const Product_About_8IoProps = useIoStore((state)=>state["Home"]["Product_About_8"]);
const Product_About_8Cb = useProduct_About_8Cb()
const Product_Price_8Props = useStore((state)=>state["Home"]["Product_Price_8"]);
const Product_Price_8IoProps = useIoStore((state)=>state["Home"]["Product_Price_8"]);
const Product_Price_8Cb = useProduct_Price_8Cb()
const Product_Image_7Props = useStore((state)=>state["Home"]["Product_Image_7"]);
const Product_Image_7IoProps = useIoStore((state)=>state["Home"]["Product_Image_7"]);
const Product_Image_7Cb = useProduct_Image_7Cb()
const Product_Name_7Props = useStore((state)=>state["Home"]["Product_Name_7"]);
const Product_Name_7IoProps = useIoStore((state)=>state["Home"]["Product_Name_7"]);
const Product_Name_7Cb = useProduct_Name_7Cb()
const Product_About_7Props = useStore((state)=>state["Home"]["Product_About_7"]);
const Product_About_7IoProps = useIoStore((state)=>state["Home"]["Product_About_7"]);
const Product_About_7Cb = useProduct_About_7Cb()
const Product_Price_7Props = useStore((state)=>state["Home"]["Product_Price_7"]);
const Product_Price_7IoProps = useIoStore((state)=>state["Home"]["Product_Price_7"]);
const Product_Price_7Cb = useProduct_Price_7Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const TextBox73Props = useStore((state)=>state["Home"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Home"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Home"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Home"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const Image34Props = useStore((state)=>state["Home"]["Image34"]);
const Image34IoProps = useIoStore((state)=>state["Home"]["Image34"]);
const Image34Cb = useImage34Cb()
const TextBox75Props = useStore((state)=>state["Home"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Home"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox76Props = useStore((state)=>state["Home"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Home"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const Carousel2Props = useStore((state)=>state["Home"]["Carousel2"]);
const Carousel2IoProps = useIoStore((state)=>state["Home"]["Carousel2"]);
const Carousel2Cb = useCarousel2Cb()
const Carousel3Props = useStore((state)=>state["Home"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Home"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Image44Props = useStore((state)=>state["Home"]["Image44"]);
const Image44IoProps = useIoStore((state)=>state["Home"]["Image44"]);
const Image44Cb = useImage44Cb()
const Image76Props = useStore((state)=>state["Home"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Home"]["Image76"]);
const Image76Cb = useImage76Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const Image79Props = useStore((state)=>state["Home"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image40Props = useStore((state)=>state["Home"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["Home"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image74Props = useStore((state)=>state["Home"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Home"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image75Props = useStore((state)=>state["Home"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Home"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Image45Props = useStore((state)=>state["Home"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["Home"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const Image51Props = useStore((state)=>state["Home"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Home"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Image52Props = useStore((state)=>state["Home"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Home"]["Image52"]);
const Image52Cb = useImage52Cb()
const Image53Props = useStore((state)=>state["Home"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Home"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const Image54Props = useStore((state)=>state["Home"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Home"]["Image54"]);
const Image54Cb = useImage54Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Image55Props = useStore((state)=>state["Home"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Home"]["Image55"]);
const Image55Cb = useImage55Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox120Props = useStore((state)=>state["Home"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Home"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const Input9Props = useStore((state)=>state["Home"]["Input9"]);
const Input9IoProps = useIoStore((state)=>state["Home"]["Input9"]);
const Input9Cb = useInput9Cb()
const TextBox145Props = useStore((state)=>state["Home"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const Image68Props = useStore((state)=>state["Home"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["Home"]["Image68"]);
const Image68Cb = useImage68Cb()
const Image69Props = useStore((state)=>state["Home"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["Home"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox133Props = useStore((state)=>state["Home"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Home"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Home"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Home"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const Image70Props = useStore((state)=>state["Home"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Home"]["Image70"]);
const Image70Cb = useImage70Cb()
const Image71Props = useStore((state)=>state["Home"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["Home"]["Image71"]);
const Image71Cb = useImage71Cb()
const Image72Props = useStore((state)=>state["Home"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Home"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image73Props = useStore((state)=>state["Home"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Home"]["Image73"]);
const Image73Cb = useImage73Cb()

  return (<>
  <Flex className="p-Home Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex2 bpt" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Flex className="p-Home Flex4 bpt" {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox className="p-Home TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Home TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
<Menu className="p-Home Menu1 bpt" {...Menu1Props} {...Menu1Cb} {...Menu1IoProps}>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<TextBox className="p-Home TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox className="p-Home TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox className="p-Home TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<TextBox className="p-Home TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex>
</Menu>
</Flex>
<Flex className="p-Home Flex5 bpt" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Flex className="p-Home Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex className="p-Home Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Flex className="p-Home Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Button className="p-Home Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Flex className="p-Home Flex371 bpt" {...Flex371Props} {...Flex371Cb} {...Flex371IoProps}>
<Image className="p-Home Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
<Flex className="p-Home Flex373 bpt" {...Flex373Props} {...Flex373Cb} {...Flex373IoProps}>
<Image className="p-Home Image198 bpt" {...Image198Props} {...Image198Cb} {...Image198IoProps}/>
<Image className="p-Home Image197 bpt" {...Image197Props} {...Image197Cb} {...Image197IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex className="p-Home Flex365 bpt" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex className="p-Home Flex366 bpt" {...Flex366Props} {...Flex366Cb} {...Flex366IoProps}>
<Image className="p-Home Image195 bpt" {...Image195Props} {...Image195Cb} {...Image195IoProps}/>
<TextBox className="p-Home TextBox383 bpt" {...TextBox383Props} {...TextBox383Cb} {...TextBox383IoProps}/>
<TextBox className="p-Home TextBox384 bpt" {...TextBox384Props} {...TextBox384Cb} {...TextBox384IoProps}/>
<TextBox className="p-Home TextBox382 bpt" {...TextBox382Props} {...TextBox382Cb} {...TextBox382IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex367 bpt" {...Flex367Props} {...Flex367Cb} {...Flex367IoProps}>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image className="p-Home Image17 bpt" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox className="p-Home TextBox32 bpt" {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex>
<Flex className="p-Home Flex368 bpt" {...Flex368Props} {...Flex368Cb} {...Flex368IoProps}>
<Image className="p-Home Image196 bpt" {...Image196Props} {...Image196Cb} {...Image196IoProps}/>
<TextBox className="p-Home TextBox386 bpt" {...TextBox386Props} {...TextBox386Cb} {...TextBox386IoProps}/>
<TextBox className="p-Home TextBox387 bpt" {...TextBox387Props} {...TextBox387Cb} {...TextBox387IoProps}/>
<TextBox className="p-Home TextBox385 bpt" {...TextBox385Props} {...TextBox385Cb} {...TextBox385IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Flex className="p-Home Flex27 bpt" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Image className="p-Home Image19 bpt" {...Image19Props} {...Image19Cb} {...Image19IoProps}/>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<TextBox className="p-Home TextBox36 bpt" {...TextBox36Props} {...TextBox36Cb} {...TextBox36IoProps}/>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
<Flex className="p-Home Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox className="p-Home TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox className="p-Home TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Flex className="p-Home Flex297 bpt" {...Flex297Props} {...Flex297Cb} {...Flex297IoProps}>
<Flex className="p-Home Product_Card_1 bpt" {...Product_Card_1Props} {...Product_Card_1Cb} {...Product_Card_1IoProps}>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home Product_Price_1 bpt" {...Product_Price_1Props} {...Product_Price_1Cb} {...Product_Price_1IoProps}/>
</Flex>
<Image className="p-Home Product_Image_1 bpt" {...Product_Image_1Props} {...Product_Image_1Cb} {...Product_Image_1IoProps}/>
<TextBox className="p-Home Product_Name_1 bpt" {...Product_Name_1Props} {...Product_Name_1Cb} {...Product_Name_1IoProps}/>
<TextBox className="p-Home Product_About_1 bpt" {...Product_About_1Props} {...Product_About_1Cb} {...Product_About_1IoProps}/>
</Flex>
<Flex className="p-Home Product_Card_2 bpt" {...Product_Card_2Props} {...Product_Card_2Cb} {...Product_Card_2IoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox className="p-Home Product_Price_2 bpt" {...Product_Price_2Props} {...Product_Price_2Cb} {...Product_Price_2IoProps}/>
</Flex>
<Image className="p-Home Product_Image_2 bpt" {...Product_Image_2Props} {...Product_Image_2Cb} {...Product_Image_2IoProps}/>
<TextBox className="p-Home Product_Name_2 bpt" {...Product_Name_2Props} {...Product_Name_2Cb} {...Product_Name_2IoProps}/>
<TextBox className="p-Home Product_About_2 bpt" {...Product_About_2Props} {...Product_About_2Cb} {...Product_About_2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Flex className="p-Home Product_Card_3 bpt" {...Product_Card_3Props} {...Product_Card_3Cb} {...Product_Card_3IoProps}>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<TextBox className="p-Home Product_Price_3 bpt" {...Product_Price_3Props} {...Product_Price_3Cb} {...Product_Price_3IoProps}/>
</Flex>
<Image className="p-Home Product_Image_3 bpt" {...Product_Image_3Props} {...Product_Image_3Cb} {...Product_Image_3IoProps}/>
<TextBox className="p-Home Product_Name_3 bpt" {...Product_Name_3Props} {...Product_Name_3Cb} {...Product_Name_3IoProps}/>
<TextBox className="p-Home Product_About_3 bpt" {...Product_About_3Props} {...Product_About_3Cb} {...Product_About_3IoProps}/>
</Flex>
<Flex className="p-Home Product_Card_4 bpt" {...Product_Card_4Props} {...Product_Card_4Cb} {...Product_Card_4IoProps}>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home Product_Price_4 bpt" {...Product_Price_4Props} {...Product_Price_4Cb} {...Product_Price_4IoProps}/>
</Flex>
<Image className="p-Home Product_Image_4 bpt" {...Product_Image_4Props} {...Product_Image_4Cb} {...Product_Image_4IoProps}/>
<TextBox className="p-Home Product_Name_4 bpt" {...Product_Name_4Props} {...Product_Name_4Cb} {...Product_Name_4IoProps}/>
<TextBox className="p-Home Product_About_4 bpt" {...Product_About_4Props} {...Product_About_4Cb} {...Product_About_4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<Flex className="p-Home Flex299 bpt" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<Flex className="p-Home Product_Card_5 bpt" {...Product_Card_5Props} {...Product_Card_5Cb} {...Product_Card_5IoProps}>
<Flex className="p-Home Flex52 bpt" {...Flex52Props} {...Flex52Cb} {...Flex52IoProps}>
<TextBox className="p-Home Product_Price_5 bpt" {...Product_Price_5Props} {...Product_Price_5Cb} {...Product_Price_5IoProps}/>
</Flex>
<Image className="p-Home Product_Image_5 bpt" {...Product_Image_5Props} {...Product_Image_5Cb} {...Product_Image_5IoProps}/>
<TextBox className="p-Home Product_Name_5 bpt" {...Product_Name_5Props} {...Product_Name_5Cb} {...Product_Name_5IoProps}/>
<TextBox className="p-Home Product_About_5 bpt" {...Product_About_5Props} {...Product_About_5Cb} {...Product_About_5IoProps}/>
</Flex>
<Flex className="p-Home Product_Card_6 bpt" {...Product_Card_6Props} {...Product_Card_6Cb} {...Product_Card_6IoProps}>
<Flex className="p-Home Flex51 bpt" {...Flex51Props} {...Flex51Cb} {...Flex51IoProps}>
<TextBox className="p-Home Product_Price_6 bpt" {...Product_Price_6Props} {...Product_Price_6Cb} {...Product_Price_6IoProps}/>
</Flex>
<Image className="p-Home Product_Image_6 bpt" {...Product_Image_6Props} {...Product_Image_6Cb} {...Product_Image_6IoProps}/>
<TextBox className="p-Home Product_Name_6 bpt" {...Product_Name_6Props} {...Product_Name_6Cb} {...Product_Name_6IoProps}/>
<TextBox className="p-Home Product_About_6 bpt" {...Product_About_6Props} {...Product_About_6Cb} {...Product_About_6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Flex className="p-Home Product_Card_7 bpt" {...Product_Card_7Props} {...Product_Card_7Cb} {...Product_Card_7IoProps}>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<TextBox className="p-Home Product_Price_7 bpt" {...Product_Price_7Props} {...Product_Price_7Cb} {...Product_Price_7IoProps}/>
</Flex>
<Image className="p-Home Product_Image_7 bpt" {...Product_Image_7Props} {...Product_Image_7Cb} {...Product_Image_7IoProps}/>
<TextBox className="p-Home Product_Name_7 bpt" {...Product_Name_7Props} {...Product_Name_7Cb} {...Product_Name_7IoProps}/>
<TextBox className="p-Home Product_About_7 bpt" {...Product_About_7Props} {...Product_About_7Cb} {...Product_About_7IoProps}/>
</Flex>
<Flex className="p-Home Product_Card_8 bpt" {...Product_Card_8Props} {...Product_Card_8Cb} {...Product_Card_8IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<TextBox className="p-Home Product_Price_8 bpt" {...Product_Price_8Props} {...Product_Price_8Cb} {...Product_Price_8IoProps}/>
</Flex>
<Image className="p-Home Product_Image_8 bpt" {...Product_Image_8Props} {...Product_Image_8Cb} {...Product_Image_8IoProps}/>
<TextBox className="p-Home Product_Name_8 bpt" {...Product_Name_8Props} {...Product_Name_8Cb} {...Product_Name_8IoProps}/>
<TextBox className="p-Home Product_About_8 bpt" {...Product_About_8Props} {...Product_About_8Cb} {...Product_About_8IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<TextBox className="p-Home TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Home TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Image className="p-Home Image34 bpt" {...Image34Props} {...Image34Cb} {...Image34IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
</Flex>
<TextBox className="p-Home TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
<TextBox className="p-Home TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Flex className="p-Home Flex128 bpt" {...Flex128Props} {...Flex128Cb} {...Flex128IoProps}>
<Image className="p-Home Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<Image className="p-Home Image44 bpt" {...Image44Props} {...Image44Cb} {...Image44IoProps}/>
</Flex>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image className="p-Home Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Flex>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Flex>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
</Flex>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<Image className="p-Home Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
</Flex>
</Flex>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<Flex className="p-Home Flex67 bpt" {...Flex67Props} {...Flex67Cb} {...Flex67IoProps}>
<Image className="p-Home Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Image className="p-Home Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Flex>
</Flex>
<Carousel className="p-Home Carousel1 bpt" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Carousel className="p-Home Carousel2 bpt" {...Carousel2Props} {...Carousel2Cb} {...Carousel2IoProps}/>
<Carousel className="p-Home Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Image className="p-Home Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
</Flex>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<Image className="p-Home Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Image className="p-Home Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
<Flex className="p-Home Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<Image className="p-Home Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex className="p-Home Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<Image className="p-Home Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Image className="p-Home Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<Input className="p-Home Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex104 bpt" {...Flex104Props} {...Flex104Cb} {...Flex104IoProps}>
<Flex className="p-Home Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex className="p-Home Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
<Flex className="p-Home Flex105 bpt" {...Flex105Props} {...Flex105Cb} {...Flex105IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<TextBox className="p-Home TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
<Input className="p-Home Input9 bpt" {...Input9Props} {...Input9Cb} {...Input9IoProps}/>
</Flex>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<TextBox className="p-Home TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Flex className="p-Home Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Flex className="p-Home Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
<Flex className="p-Home Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<Flex className="p-Home Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
<Flex className="p-Home Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<Flex className="p-Home Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
<Flex className="p-Home Flex121 bpt" {...Flex121Props} {...Flex121Cb} {...Flex121IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<Image className="p-Home Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<Image className="p-Home Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Flex className="p-Home Flex125 bpt" {...Flex125Props} {...Flex125Cb} {...Flex125IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
<TextBox className="p-Home TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Flex>
<Flex className="p-Home Flex127 bpt" {...Flex127Props} {...Flex127Cb} {...Flex127IoProps}>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<TextBox className="p-Home TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex120 bpt" {...Flex120Props} {...Flex120Cb} {...Flex120IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Flex className="p-Home Flex124 bpt" {...Flex124Props} {...Flex124Cb} {...Flex124IoProps}>
<Flex className="p-Home Flex123 bpt" {...Flex123Props} {...Flex123Cb} {...Flex123IoProps}>
<Image className="p-Home Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<Image className="p-Home Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Flex>
<Flex className="p-Home Flex122 bpt" {...Flex122Props} {...Flex122Cb} {...Flex122IoProps}>
<Image className="p-Home Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<Image className="p-Home Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
