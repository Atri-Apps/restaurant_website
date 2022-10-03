import { useLayoutEffect, useEffect } from "react";
import useStore, { setEffectivePropsForPage, updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex1Cb, useFlex2Cb, useFlex3Cb, useButton1Cb, useButton2Cb, useTextBox1Cb, useTextBox2Cb, useTextBox3Cb, useTextBox4Cb, useFlex4Cb, useImage2Cb, useTextBox6Cb, useFlex5Cb, useFlex6Cb, useFlex7Cb, useTextBox7Cb, useTextBox8Cb, useTextBox9Cb, useFlex8Cb, useButton3Cb, useButton4Cb, useFlex9Cb, useFlex10Cb, useImage5Cb, useFlex11Cb, useTextBox10Cb, useFlex12Cb, useImage6Cb, useImage8Cb, useImage9Cb, useImage10Cb, useFlex13Cb, useTextBox11Cb, useFlex14Cb, useFlex15Cb, useImage11Cb, useTextBox12Cb, useTextBox13Cb, useTextBox14Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useImage16Cb, useFlex20Cb, useTextBox30Cb, useTextBox31Cb, useTextBox32Cb, useImage17Cb, useFlex21Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useImage18Cb, useFlex22Cb, useButton9Cb, useButton10Cb, useFlex25Cb } from "../page-cbs/Home";

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

  useLayoutEffect(()=>{
    setEffectivePropsForPage("Home")
  }, [])

  useEffect(()=>{
    const onResize = ()=>{
      setEffectivePropsForPage("Home")
    };
    window.addEventListener("resize", onResize);
    return ()=>{
      window.removeEventListener("resize", onResize);
    }
  }, [])

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const Flex3Props = useStore((state)=>state["Home"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Home"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
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
const Flex4Props = useStore((state)=>state["Home"]["Flex4"]);
const Flex4IoProps = useIoStore((state)=>state["Home"]["Flex4"]);
const Flex4Cb = useFlex4Cb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const TextBox6Props = useStore((state)=>state["Home"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["Home"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["Home"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Home"]["Button4"]);
const Button4Cb = useButton4Cb()
const Flex9Props = useStore((state)=>state["Home"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["Home"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Flex11Props = useStore((state)=>state["Home"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Home"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
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
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
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
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()

  return (<>
  <Flex {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Flex {...Flex4Props} {...Flex4Cb} {...Flex4IoProps}>
<Image {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<TextBox {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<TextBox {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex>
<Flex {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Button {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
<Button {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
<Flex {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Flex {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<TextBox {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<Flex {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<Flex {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Button {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Button {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Flex>
</Flex>
<Flex {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<Flex {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Image {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
<Image {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<Image {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Flex>
</Flex>
<Flex {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Flex {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Image {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
<TextBox {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<TextBox {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Image {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
<Flex {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Image {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
<TextBox {...TextBox32Props} {...TextBox32Cb} {...TextBox32IoProps}/>
</Flex>
<Flex {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<Image {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
</Flex>
</Flex>
<Flex {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Button {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex>
</Flex>
  </>);
}
