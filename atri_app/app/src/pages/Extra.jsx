import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex349Cb, useFlex350Cb, useFlex351Cb, useFlex352Cb, useFlex353Cb, useFlex358Cb, useFlex360Cb, useFlex359Cb, useFlex362Cb, useFlex361Cb, useFlex364Cb, useFlex363Cb, useTextBox368Cb, useTextBox369Cb, useCart_Image_1Cb, useCart_Quant_1Cb, useCart_Name_1Cb, useTextBox371Cb, useCart_Price_1Cb, useCart_Quant_2Cb, useCart_Image_2Cb, useCart_Price_2Cb, useTextBox374Cb, useCart_Name_2Cb, useCart_Quant_3Cb, useCart_Image_3Cb, useCart_Price_3Cb, useTextBox377Cb, useCart_Name_3Cb, useCart_Quant_4Cb, useCart_Image_4Cb, useCart_Price_4Cb, useTextBox380Cb, useCart_Name_4Cb } from "../page-cbs/extra";
import "../page-css/extra.css";
import "../custom/extra";

export default function Extra() {
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

  const Flex349Props = useStore((state)=>state["extra"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["extra"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const Flex350Props = useStore((state)=>state["extra"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["extra"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex351Props = useStore((state)=>state["extra"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["extra"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex352Props = useStore((state)=>state["extra"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["extra"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex353Props = useStore((state)=>state["extra"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["extra"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex358Props = useStore((state)=>state["extra"]["Flex358"]);
const Flex358IoProps = useIoStore((state)=>state["extra"]["Flex358"]);
const Flex358Cb = useFlex358Cb()
const Flex360Props = useStore((state)=>state["extra"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["extra"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex359Props = useStore((state)=>state["extra"]["Flex359"]);
const Flex359IoProps = useIoStore((state)=>state["extra"]["Flex359"]);
const Flex359Cb = useFlex359Cb()
const Flex362Props = useStore((state)=>state["extra"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["extra"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex361Props = useStore((state)=>state["extra"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["extra"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex364Props = useStore((state)=>state["extra"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["extra"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Flex363Props = useStore((state)=>state["extra"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["extra"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const TextBox368Props = useStore((state)=>state["extra"]["TextBox368"]);
const TextBox368IoProps = useIoStore((state)=>state["extra"]["TextBox368"]);
const TextBox368Cb = useTextBox368Cb()
const TextBox369Props = useStore((state)=>state["extra"]["TextBox369"]);
const TextBox369IoProps = useIoStore((state)=>state["extra"]["TextBox369"]);
const TextBox369Cb = useTextBox369Cb()
const Cart_Image_1Props = useStore((state)=>state["extra"]["Cart_Image_1"]);
const Cart_Image_1IoProps = useIoStore((state)=>state["extra"]["Cart_Image_1"]);
const Cart_Image_1Cb = useCart_Image_1Cb()
const Cart_Quant_1Props = useStore((state)=>state["extra"]["Cart_Quant_1"]);
const Cart_Quant_1IoProps = useIoStore((state)=>state["extra"]["Cart_Quant_1"]);
const Cart_Quant_1Cb = useCart_Quant_1Cb()
const Cart_Name_1Props = useStore((state)=>state["extra"]["Cart_Name_1"]);
const Cart_Name_1IoProps = useIoStore((state)=>state["extra"]["Cart_Name_1"]);
const Cart_Name_1Cb = useCart_Name_1Cb()
const TextBox371Props = useStore((state)=>state["extra"]["TextBox371"]);
const TextBox371IoProps = useIoStore((state)=>state["extra"]["TextBox371"]);
const TextBox371Cb = useTextBox371Cb()
const Cart_Price_1Props = useStore((state)=>state["extra"]["Cart_Price_1"]);
const Cart_Price_1IoProps = useIoStore((state)=>state["extra"]["Cart_Price_1"]);
const Cart_Price_1Cb = useCart_Price_1Cb()
const Cart_Quant_2Props = useStore((state)=>state["extra"]["Cart_Quant_2"]);
const Cart_Quant_2IoProps = useIoStore((state)=>state["extra"]["Cart_Quant_2"]);
const Cart_Quant_2Cb = useCart_Quant_2Cb()
const Cart_Image_2Props = useStore((state)=>state["extra"]["Cart_Image_2"]);
const Cart_Image_2IoProps = useIoStore((state)=>state["extra"]["Cart_Image_2"]);
const Cart_Image_2Cb = useCart_Image_2Cb()
const Cart_Price_2Props = useStore((state)=>state["extra"]["Cart_Price_2"]);
const Cart_Price_2IoProps = useIoStore((state)=>state["extra"]["Cart_Price_2"]);
const Cart_Price_2Cb = useCart_Price_2Cb()
const TextBox374Props = useStore((state)=>state["extra"]["TextBox374"]);
const TextBox374IoProps = useIoStore((state)=>state["extra"]["TextBox374"]);
const TextBox374Cb = useTextBox374Cb()
const Cart_Name_2Props = useStore((state)=>state["extra"]["Cart_Name_2"]);
const Cart_Name_2IoProps = useIoStore((state)=>state["extra"]["Cart_Name_2"]);
const Cart_Name_2Cb = useCart_Name_2Cb()
const Cart_Quant_3Props = useStore((state)=>state["extra"]["Cart_Quant_3"]);
const Cart_Quant_3IoProps = useIoStore((state)=>state["extra"]["Cart_Quant_3"]);
const Cart_Quant_3Cb = useCart_Quant_3Cb()
const Cart_Image_3Props = useStore((state)=>state["extra"]["Cart_Image_3"]);
const Cart_Image_3IoProps = useIoStore((state)=>state["extra"]["Cart_Image_3"]);
const Cart_Image_3Cb = useCart_Image_3Cb()
const Cart_Price_3Props = useStore((state)=>state["extra"]["Cart_Price_3"]);
const Cart_Price_3IoProps = useIoStore((state)=>state["extra"]["Cart_Price_3"]);
const Cart_Price_3Cb = useCart_Price_3Cb()
const TextBox377Props = useStore((state)=>state["extra"]["TextBox377"]);
const TextBox377IoProps = useIoStore((state)=>state["extra"]["TextBox377"]);
const TextBox377Cb = useTextBox377Cb()
const Cart_Name_3Props = useStore((state)=>state["extra"]["Cart_Name_3"]);
const Cart_Name_3IoProps = useIoStore((state)=>state["extra"]["Cart_Name_3"]);
const Cart_Name_3Cb = useCart_Name_3Cb()
const Cart_Quant_4Props = useStore((state)=>state["extra"]["Cart_Quant_4"]);
const Cart_Quant_4IoProps = useIoStore((state)=>state["extra"]["Cart_Quant_4"]);
const Cart_Quant_4Cb = useCart_Quant_4Cb()
const Cart_Image_4Props = useStore((state)=>state["extra"]["Cart_Image_4"]);
const Cart_Image_4IoProps = useIoStore((state)=>state["extra"]["Cart_Image_4"]);
const Cart_Image_4Cb = useCart_Image_4Cb()
const Cart_Price_4Props = useStore((state)=>state["extra"]["Cart_Price_4"]);
const Cart_Price_4IoProps = useIoStore((state)=>state["extra"]["Cart_Price_4"]);
const Cart_Price_4Cb = useCart_Price_4Cb()
const TextBox380Props = useStore((state)=>state["extra"]["TextBox380"]);
const TextBox380IoProps = useIoStore((state)=>state["extra"]["TextBox380"]);
const TextBox380Cb = useTextBox380Cb()
const Cart_Name_4Props = useStore((state)=>state["extra"]["Cart_Name_4"]);
const Cart_Name_4IoProps = useIoStore((state)=>state["extra"]["Cart_Name_4"]);
const Cart_Name_4Cb = useCart_Name_4Cb()

  return (<>
  <Flex4 className="p-extra Flex349 bpt" {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<Flex4 className="p-extra Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<Flex4 className="p-extra Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<TextBox4 className="p-extra TextBox368 bpt" {...TextBox368Props} {...TextBox368Cb} {...TextBox368IoProps}/>
<TextBox4 className="p-extra TextBox369 bpt" {...TextBox369Props} {...TextBox369Cb} {...TextBox369IoProps}/>
</Flex4>
<Flex4 className="p-extra Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<Flex4 className="p-extra Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<Image4 className="p-extra Cart_Image_1 bpt" {...Cart_Image_1Props} {...Cart_Image_1Cb} {...Cart_Image_1IoProps}/>
<Flex4 className="p-extra Flex358 bpt" {...Flex358Props} {...Flex358Cb} {...Flex358IoProps}>
<TextBox4 className="p-extra Cart_Name_1 bpt" {...Cart_Name_1Props} {...Cart_Name_1Cb} {...Cart_Name_1IoProps}/>
<TextBox4 className="p-extra Cart_Price_1 bpt" {...Cart_Price_1Props} {...Cart_Price_1Cb} {...Cart_Price_1IoProps}/>
<TextBox4 className="p-extra TextBox371 bpt" {...TextBox371Props} {...TextBox371Cb} {...TextBox371IoProps}/>
</Flex4>
<Input1 className="p-extra Cart_Quant_1 bpt" {...Cart_Quant_1Props} {...Cart_Quant_1Cb} {...Cart_Quant_1IoProps}/>
</Flex4>
<Flex4 className="p-extra Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<Image4 className="p-extra Cart_Image_2 bpt" {...Cart_Image_2Props} {...Cart_Image_2Cb} {...Cart_Image_2IoProps}/>
<Flex4 className="p-extra Flex359 bpt" {...Flex359Props} {...Flex359Cb} {...Flex359IoProps}>
<TextBox4 className="p-extra Cart_Name_2 bpt" {...Cart_Name_2Props} {...Cart_Name_2Cb} {...Cart_Name_2IoProps}/>
<TextBox4 className="p-extra Cart_Price_2 bpt" {...Cart_Price_2Props} {...Cart_Price_2Cb} {...Cart_Price_2IoProps}/>
<TextBox4 className="p-extra TextBox374 bpt" {...TextBox374Props} {...TextBox374Cb} {...TextBox374IoProps}/>
</Flex4>
<Input1 className="p-extra Cart_Quant_2 bpt" {...Cart_Quant_2Props} {...Cart_Quant_2Cb} {...Cart_Quant_2IoProps}/>
</Flex4>
<Flex4 className="p-extra Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<Image4 className="p-extra Cart_Image_3 bpt" {...Cart_Image_3Props} {...Cart_Image_3Cb} {...Cart_Image_3IoProps}/>
<Flex4 className="p-extra Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<TextBox4 className="p-extra Cart_Name_3 bpt" {...Cart_Name_3Props} {...Cart_Name_3Cb} {...Cart_Name_3IoProps}/>
<TextBox4 className="p-extra Cart_Price_3 bpt" {...Cart_Price_3Props} {...Cart_Price_3Cb} {...Cart_Price_3IoProps}/>
<TextBox4 className="p-extra TextBox377 bpt" {...TextBox377Props} {...TextBox377Cb} {...TextBox377IoProps}/>
</Flex4>
<Input1 className="p-extra Cart_Quant_3 bpt" {...Cart_Quant_3Props} {...Cart_Quant_3Cb} {...Cart_Quant_3IoProps}/>
</Flex4>
<Flex4 className="p-extra Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Image4 className="p-extra Cart_Image_4 bpt" {...Cart_Image_4Props} {...Cart_Image_4Cb} {...Cart_Image_4IoProps}/>
<Flex4 className="p-extra Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<TextBox4 className="p-extra Cart_Name_4 bpt" {...Cart_Name_4Props} {...Cart_Name_4Cb} {...Cart_Name_4IoProps}/>
<TextBox4 className="p-extra Cart_Price_4 bpt" {...Cart_Price_4Props} {...Cart_Price_4Cb} {...Cart_Price_4IoProps}/>
<TextBox4 className="p-extra TextBox380 bpt" {...TextBox380Props} {...TextBox380Cb} {...TextBox380IoProps}/>
</Flex4>
<Input1 className="p-extra Cart_Quant_4 bpt" {...Cart_Quant_4Props} {...Cart_Quant_4Cb} {...Cart_Quant_4IoProps}/>
</Flex4>
</Flex4>
</Flex4>
</Flex4>
  </>);
}
