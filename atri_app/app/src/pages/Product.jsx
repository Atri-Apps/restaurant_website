import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu3 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button3 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex265Cb, useMenu4Cb, useFlex260Cb, useFlex263Cb, useFlex264Cb, useFlex261Cb, useFlex262Cb, useFlex266Cb, useFlex267Cb, useFlex269Cb, useFlex270Cb, useFlex272Cb, useFlex271Cb, useFlex286Cb, useFlex285Cb, useFlex283Cb, useFlex275Cb, useFlex276Cb, useFlex277Cb, useFlex278Cb, useFlex284Cb, useFlex279Cb, useFlex280Cb, useFlex281Cb, useFlex282Cb, useFlex296Cb, useFlex293Cb, useFlex289Cb, useFlex294Cb, useFlex290Cb, useFlex291Cb, useFlex295Cb, useFlex292Cb, useFlex287Cb, useFlex288Cb, useTextBox276Cb, useTextBox277Cb, useTextBox278Cb, useTextBox279Cb, useTextBox280Cb, useButton37Cb, useButton38Cb, useTextBox281Cb, useTextBox282Cb, useTextBox283Cb, useTextBox284Cb, useTextBox285Cb, useImage153Cb, useProduct_ImageCb, useProduct_NameCb, useProduct_AboutCb, useProduct_PriceCb, useProduct_Add_To_CartCb, useTextBox289Cb, useTextBox290Cb, useButton40Cb, useImage155Cb, useTextBox291Cb, useTextBox292Cb, useTextBox293Cb, useTextBox296Cb, useTextBox297Cb, useTextBox298Cb, useTextBox299Cb, useTextBox300Cb, useTextBox301Cb, useImage156Cb, useImage157Cb, useImage158Cb, useImage159Cb, useImage160Cb, useImage161Cb, useImage162Cb, useImage163Cb, useImage173Cb, useTextBox318Cb, useImage168Cb, useImage169Cb, useImage170Cb, useImage171Cb, useImage172Cb, useTextBox302Cb, useTextBox303Cb, useTextBox304Cb, useTextBox305Cb, useTextBox306Cb, useTextBox307Cb, useTextBox308Cb, useTextBox309Cb, useTextBox310Cb, useTextBox311Cb, useTextBox312Cb, useTextBox313Cb, useTextBox314Cb, useTextBox315Cb, useTextBox316Cb, useTextBox317Cb, useTextBox319Cb, useImage164Cb, useImage165Cb, useImage166Cb, useImage167Cb } from "../page-cbs/product";
import "../page-css/product.css";
import "../custom/product";

export default function Product() {
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

  const Flex265Props = useStore((state)=>state["product"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["product"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Menu4Props = useStore((state)=>state["product"]["Menu4"]);
const Menu4IoProps = useIoStore((state)=>state["product"]["Menu4"]);
const Menu4Cb = useMenu4Cb()
const Flex260Props = useStore((state)=>state["product"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["product"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex263Props = useStore((state)=>state["product"]["Flex263"]);
const Flex263IoProps = useIoStore((state)=>state["product"]["Flex263"]);
const Flex263Cb = useFlex263Cb()
const Flex264Props = useStore((state)=>state["product"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["product"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex261Props = useStore((state)=>state["product"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["product"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex262Props = useStore((state)=>state["product"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["product"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex266Props = useStore((state)=>state["product"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["product"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex267Props = useStore((state)=>state["product"]["Flex267"]);
const Flex267IoProps = useIoStore((state)=>state["product"]["Flex267"]);
const Flex267Cb = useFlex267Cb()
const Flex269Props = useStore((state)=>state["product"]["Flex269"]);
const Flex269IoProps = useIoStore((state)=>state["product"]["Flex269"]);
const Flex269Cb = useFlex269Cb()
const Flex270Props = useStore((state)=>state["product"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["product"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex272Props = useStore((state)=>state["product"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["product"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex271Props = useStore((state)=>state["product"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["product"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex286Props = useStore((state)=>state["product"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["product"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex285Props = useStore((state)=>state["product"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["product"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex283Props = useStore((state)=>state["product"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["product"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex275Props = useStore((state)=>state["product"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["product"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex276Props = useStore((state)=>state["product"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["product"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex277Props = useStore((state)=>state["product"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["product"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex278Props = useStore((state)=>state["product"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["product"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex284Props = useStore((state)=>state["product"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["product"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex279Props = useStore((state)=>state["product"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["product"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex280Props = useStore((state)=>state["product"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["product"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex281Props = useStore((state)=>state["product"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["product"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex282Props = useStore((state)=>state["product"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["product"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex296Props = useStore((state)=>state["product"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["product"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex293Props = useStore((state)=>state["product"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["product"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex289Props = useStore((state)=>state["product"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["product"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex294Props = useStore((state)=>state["product"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["product"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex290Props = useStore((state)=>state["product"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["product"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex291Props = useStore((state)=>state["product"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["product"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex295Props = useStore((state)=>state["product"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["product"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex292Props = useStore((state)=>state["product"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["product"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex287Props = useStore((state)=>state["product"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["product"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex288Props = useStore((state)=>state["product"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["product"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const TextBox276Props = useStore((state)=>state["product"]["TextBox276"]);
const TextBox276IoProps = useIoStore((state)=>state["product"]["TextBox276"]);
const TextBox276Cb = useTextBox276Cb()
const TextBox277Props = useStore((state)=>state["product"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["product"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const TextBox278Props = useStore((state)=>state["product"]["TextBox278"]);
const TextBox278IoProps = useIoStore((state)=>state["product"]["TextBox278"]);
const TextBox278Cb = useTextBox278Cb()
const TextBox279Props = useStore((state)=>state["product"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["product"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["product"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["product"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const Button37Props = useStore((state)=>state["product"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["product"]["Button37"]);
const Button37Cb = useButton37Cb()
const Button38Props = useStore((state)=>state["product"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["product"]["Button38"]);
const Button38Cb = useButton38Cb()
const TextBox281Props = useStore((state)=>state["product"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["product"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const TextBox282Props = useStore((state)=>state["product"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["product"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const TextBox283Props = useStore((state)=>state["product"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["product"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const TextBox284Props = useStore((state)=>state["product"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["product"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const TextBox285Props = useStore((state)=>state["product"]["TextBox285"]);
const TextBox285IoProps = useIoStore((state)=>state["product"]["TextBox285"]);
const TextBox285Cb = useTextBox285Cb()
const Image153Props = useStore((state)=>state["product"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["product"]["Image153"]);
const Image153Cb = useImage153Cb()
const Product_ImageProps = useStore((state)=>state["product"]["Product_Image"]);
const Product_ImageIoProps = useIoStore((state)=>state["product"]["Product_Image"]);
const Product_ImageCb = useProduct_ImageCb()
const Product_NameProps = useStore((state)=>state["product"]["Product_Name"]);
const Product_NameIoProps = useIoStore((state)=>state["product"]["Product_Name"]);
const Product_NameCb = useProduct_NameCb()
const Product_AboutProps = useStore((state)=>state["product"]["Product_About"]);
const Product_AboutIoProps = useIoStore((state)=>state["product"]["Product_About"]);
const Product_AboutCb = useProduct_AboutCb()
const Product_PriceProps = useStore((state)=>state["product"]["Product_Price"]);
const Product_PriceIoProps = useIoStore((state)=>state["product"]["Product_Price"]);
const Product_PriceCb = useProduct_PriceCb()
const Product_Add_To_CartProps = useStore((state)=>state["product"]["Product_Add_To_Cart"]);
const Product_Add_To_CartIoProps = useIoStore((state)=>state["product"]["Product_Add_To_Cart"]);
const Product_Add_To_CartCb = useProduct_Add_To_CartCb()
const TextBox289Props = useStore((state)=>state["product"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["product"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox290Props = useStore((state)=>state["product"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["product"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const Button40Props = useStore((state)=>state["product"]["Button40"]);
const Button40IoProps = useIoStore((state)=>state["product"]["Button40"]);
const Button40Cb = useButton40Cb()
const Image155Props = useStore((state)=>state["product"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["product"]["Image155"]);
const Image155Cb = useImage155Cb()
const TextBox291Props = useStore((state)=>state["product"]["TextBox291"]);
const TextBox291IoProps = useIoStore((state)=>state["product"]["TextBox291"]);
const TextBox291Cb = useTextBox291Cb()
const TextBox292Props = useStore((state)=>state["product"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["product"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const TextBox293Props = useStore((state)=>state["product"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["product"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const TextBox296Props = useStore((state)=>state["product"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["product"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox297Props = useStore((state)=>state["product"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["product"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const TextBox298Props = useStore((state)=>state["product"]["TextBox298"]);
const TextBox298IoProps = useIoStore((state)=>state["product"]["TextBox298"]);
const TextBox298Cb = useTextBox298Cb()
const TextBox299Props = useStore((state)=>state["product"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["product"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const TextBox300Props = useStore((state)=>state["product"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["product"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox301Props = useStore((state)=>state["product"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["product"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const Image156Props = useStore((state)=>state["product"]["Image156"]);
const Image156IoProps = useIoStore((state)=>state["product"]["Image156"]);
const Image156Cb = useImage156Cb()
const Image157Props = useStore((state)=>state["product"]["Image157"]);
const Image157IoProps = useIoStore((state)=>state["product"]["Image157"]);
const Image157Cb = useImage157Cb()
const Image158Props = useStore((state)=>state["product"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["product"]["Image158"]);
const Image158Cb = useImage158Cb()
const Image159Props = useStore((state)=>state["product"]["Image159"]);
const Image159IoProps = useIoStore((state)=>state["product"]["Image159"]);
const Image159Cb = useImage159Cb()
const Image160Props = useStore((state)=>state["product"]["Image160"]);
const Image160IoProps = useIoStore((state)=>state["product"]["Image160"]);
const Image160Cb = useImage160Cb()
const Image161Props = useStore((state)=>state["product"]["Image161"]);
const Image161IoProps = useIoStore((state)=>state["product"]["Image161"]);
const Image161Cb = useImage161Cb()
const Image162Props = useStore((state)=>state["product"]["Image162"]);
const Image162IoProps = useIoStore((state)=>state["product"]["Image162"]);
const Image162Cb = useImage162Cb()
const Image163Props = useStore((state)=>state["product"]["Image163"]);
const Image163IoProps = useIoStore((state)=>state["product"]["Image163"]);
const Image163Cb = useImage163Cb()
const Image173Props = useStore((state)=>state["product"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["product"]["Image173"]);
const Image173Cb = useImage173Cb()
const TextBox318Props = useStore((state)=>state["product"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["product"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const Image168Props = useStore((state)=>state["product"]["Image168"]);
const Image168IoProps = useIoStore((state)=>state["product"]["Image168"]);
const Image168Cb = useImage168Cb()
const Image169Props = useStore((state)=>state["product"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["product"]["Image169"]);
const Image169Cb = useImage169Cb()
const Image170Props = useStore((state)=>state["product"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["product"]["Image170"]);
const Image170Cb = useImage170Cb()
const Image171Props = useStore((state)=>state["product"]["Image171"]);
const Image171IoProps = useIoStore((state)=>state["product"]["Image171"]);
const Image171Cb = useImage171Cb()
const Image172Props = useStore((state)=>state["product"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["product"]["Image172"]);
const Image172Cb = useImage172Cb()
const TextBox302Props = useStore((state)=>state["product"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["product"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const TextBox303Props = useStore((state)=>state["product"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["product"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["product"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["product"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox305Props = useStore((state)=>state["product"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["product"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox306Props = useStore((state)=>state["product"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["product"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()
const TextBox307Props = useStore((state)=>state["product"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["product"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["product"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["product"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const TextBox309Props = useStore((state)=>state["product"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["product"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox310Props = useStore((state)=>state["product"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["product"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["product"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["product"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["product"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["product"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox313Props = useStore((state)=>state["product"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["product"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const TextBox314Props = useStore((state)=>state["product"]["TextBox314"]);
const TextBox314IoProps = useIoStore((state)=>state["product"]["TextBox314"]);
const TextBox314Cb = useTextBox314Cb()
const TextBox315Props = useStore((state)=>state["product"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["product"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const TextBox316Props = useStore((state)=>state["product"]["TextBox316"]);
const TextBox316IoProps = useIoStore((state)=>state["product"]["TextBox316"]);
const TextBox316Cb = useTextBox316Cb()
const TextBox317Props = useStore((state)=>state["product"]["TextBox317"]);
const TextBox317IoProps = useIoStore((state)=>state["product"]["TextBox317"]);
const TextBox317Cb = useTextBox317Cb()
const TextBox319Props = useStore((state)=>state["product"]["TextBox319"]);
const TextBox319IoProps = useIoStore((state)=>state["product"]["TextBox319"]);
const TextBox319Cb = useTextBox319Cb()
const Image164Props = useStore((state)=>state["product"]["Image164"]);
const Image164IoProps = useIoStore((state)=>state["product"]["Image164"]);
const Image164Cb = useImage164Cb()
const Image165Props = useStore((state)=>state["product"]["Image165"]);
const Image165IoProps = useIoStore((state)=>state["product"]["Image165"]);
const Image165Cb = useImage165Cb()
const Image166Props = useStore((state)=>state["product"]["Image166"]);
const Image166IoProps = useIoStore((state)=>state["product"]["Image166"]);
const Image166Cb = useImage166Cb()
const Image167Props = useStore((state)=>state["product"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["product"]["Image167"]);
const Image167Cb = useImage167Cb()

  return (<>
  <Flex3 className="p-product Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Flex3 className="p-product Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Flex3 className="p-product Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Image3 className="p-product Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
</Flex3>
<Flex3 className="p-product Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<TextBox3 className="p-product TextBox285 bpt" {...TextBox285Props} {...TextBox285Cb} {...TextBox285IoProps}/>
<TextBox3 className="p-product TextBox284 bpt" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
<TextBox3 className="p-product TextBox283 bpt" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
<TextBox3 className="p-product TextBox282 bpt" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<TextBox3 className="p-product TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex263 bpt" {...Flex263Props} {...Flex263Cb} {...Flex263IoProps}>
<Button3 className="p-product Button38 bpt" {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
<Button3 className="p-product Button37 bpt" {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
</Flex3>
<Menu3 className="p-product Menu4 bpt" {...Menu4Props} {...Menu4Cb} {...Menu4IoProps}>
<Flex3 className="p-product Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<TextBox3 className="p-product TextBox276 bpt" {...TextBox276Props} {...TextBox276Cb} {...TextBox276IoProps}/>
<TextBox3 className="p-product TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
<TextBox3 className="p-product TextBox278 bpt" {...TextBox278Props} {...TextBox278Cb} {...TextBox278IoProps}/>
<TextBox3 className="p-product TextBox279 bpt" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
<TextBox3 className="p-product TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
</Flex3>
</Menu3>
</Flex3>
<Flex3 className="p-product Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<Image3 className="p-product Product_Image bpt" {...Product_ImageProps} {...Product_ImageCb} {...Product_ImageIoProps}/>
<Flex3 className="p-product Flex267 bpt" {...Flex267Props} {...Flex267Cb} {...Flex267IoProps}>
<TextBox3 className="p-product Product_Name bpt" {...Product_NameProps} {...Product_NameCb} {...Product_NameIoProps}/>
<TextBox3 className="p-product Product_About bpt" {...Product_AboutProps} {...Product_AboutCb} {...Product_AboutIoProps}/>
<TextBox3 className="p-product Product_Price bpt" {...Product_PriceProps} {...Product_PriceCb} {...Product_PriceIoProps}/>
<Button3 className="p-product Product_Add_To_Cart bpt" {...Product_Add_To_CartProps} {...Product_Add_To_CartCb} {...Product_Add_To_CartIoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex269 bpt" {...Flex269Props} {...Flex269Cb} {...Flex269IoProps}>
<Flex3 className="p-product Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox3 className="p-product TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
<TextBox3 className="p-product TextBox289 bpt" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
<Flex3 className="p-product Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Image3 className="p-product Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<TextBox3 className="p-product TextBox291 bpt" {...TextBox291Props} {...TextBox291Cb} {...TextBox291IoProps}/>
</Flex3>
<Button3 className="p-product Button40 bpt" {...Button40Props} {...Button40Cb} {...Button40IoProps}/>
</Flex3>
<Flex3 className="p-product Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<TextBox3 className="p-product TextBox293 bpt" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
<TextBox3 className="p-product TextBox292 bpt" {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
<TextBox3 className="p-product TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
<TextBox3 className="p-product TextBox298 bpt" {...TextBox298Props} {...TextBox298Cb} {...TextBox298IoProps}/>
<TextBox3 className="p-product TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<TextBox3 className="p-product TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox3 className="p-product TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<TextBox3 className="p-product TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
<Flex3 className="p-product Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Flex3 className="p-product Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex3 className="p-product Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Image3 className="p-product Image163 bpt" {...Image163Props} {...Image163Cb} {...Image163IoProps}/>
</Flex3>
<Flex3 className="p-product Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Image3 className="p-product Image162 bpt" {...Image162Props} {...Image162Cb} {...Image162IoProps}/>
</Flex3>
<Flex3 className="p-product Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Image3 className="p-product Image161 bpt" {...Image161Props} {...Image161Cb} {...Image161IoProps}/>
</Flex3>
<Flex3 className="p-product Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Image3 className="p-product Image160 bpt" {...Image160Props} {...Image160Cb} {...Image160IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex3 className="p-product Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<Image3 className="p-product Image156 bpt" {...Image156Props} {...Image156Cb} {...Image156IoProps}/>
</Flex3>
<Flex3 className="p-product Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Image3 className="p-product Image157 bpt" {...Image157Props} {...Image157Cb} {...Image157IoProps}/>
</Flex3>
<Flex3 className="p-product Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<Image3 className="p-product Image158 bpt" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
</Flex3>
<Flex3 className="p-product Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Image3 className="p-product Image159 bpt" {...Image159Props} {...Image159Cb} {...Image159IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<Flex3 className="p-product Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Image3 className="p-product Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
<TextBox3 className="p-product TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
<Flex3 className="p-product Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<Image3 className="p-product Image168 bpt" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
<Image3 className="p-product Image169 bpt" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
<Image3 className="p-product Image170 bpt" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
<Image3 className="p-product Image171 bpt" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
<Image3 className="p-product Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Flex3 className="p-product Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<TextBox3 className="p-product TextBox302 bpt" {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
<TextBox3 className="p-product TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox3 className="p-product TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<TextBox3 className="p-product TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
<TextBox3 className="p-product TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
<TextBox3 className="p-product TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<TextBox3 className="p-product TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
<TextBox3 className="p-product TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
</Flex3>
<Flex3 className="p-product Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<TextBox3 className="p-product TextBox317 bpt" {...TextBox317Props} {...TextBox317Cb} {...TextBox317IoProps}/>
<TextBox3 className="p-product TextBox316 bpt" {...TextBox316Props} {...TextBox316Cb} {...TextBox316IoProps}/>
<TextBox3 className="p-product TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
<TextBox3 className="p-product TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox3 className="p-product TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
<TextBox3 className="p-product TextBox314 bpt" {...TextBox314Props} {...TextBox314Cb} {...TextBox314IoProps}/>
<TextBox3 className="p-product TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<TextBox3 className="p-product TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-product Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<TextBox3 className="p-product TextBox319 bpt" {...TextBox319Props} {...TextBox319Cb} {...TextBox319IoProps}/>
<Flex3 className="p-product Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<Flex3 className="p-product Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<Image3 className="p-product Image166 bpt" {...Image166Props} {...Image166Cb} {...Image166IoProps}/>
<Image3 className="p-product Image167 bpt" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
</Flex3>
<Flex3 className="p-product Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Image3 className="p-product Image165 bpt" {...Image165Props} {...Image165Cb} {...Image165IoProps}/>
<Image3 className="p-product Image164 bpt" {...Image164Props} {...Image164Cb} {...Image164IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
  </>);
}
