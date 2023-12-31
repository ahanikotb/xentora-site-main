import useScript from "@/components/useScript";
import IframeResizer from "iframe-resizer-react";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CalendarCheck, CircleDollarSign, Target } from "lucide-react";
import weightedRandom from "ts-weighted-random";
import { logEvent } from "firebase/analytics";
import useGoogleAnalytics from "@/components/useGoogleAnalytics";
import PricingTable from "@/components/PricingTable";
import Timeline from "@/components/Timeline";
import CTAButton from "@/components/CtaButton";
import Testimonials from "@/components/Testimonials";
import Statement from "@/components/Statement";
import ImageWithCaption from "@/components/ImageWithCaption";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const Lead = `
You're about to discover how to  **add $30,000 Of additonal monthly reccuring revenue** every 90 days without hiring sdrs, or paying for more ads.

if you want to increase your agency's **enterprise value** then this is for you.

if you want a client acquistion system that acts as **a moat around your business** and that your competitors can't copy then this is for you.

if you want to be able to predictably  **generate sales calls** with your ideal clients with a predictable channel then this is for you.

if you plan to do a **8 figure exit** then this is for you.

if you suspect that your sales team is not performing at their best and they are blaming lead quality then this is for you.

if you suspect that your competitors are trying to  **steal your clients** then continue reading.

if you  **fear loosing a key account** and want to have a system that can replace that revenue in 30 days then this is for you.

`;
const Mechanism = `
- Really easy to find emails at scale online.
- Highly Scalable with automation.
- low time and effort investment.
- higher profit margins due to low customer acquisition costs

`;
function SalesPage() {
  const copy = new Map([
    [
      {
        preheadline: "<span class='text-red-500'>Agency Owners And CEOs<span/>",
        headline:
          "Add <span class='font-bold text-green-600'>$30,000</span> Of Additonal <span class='font-bold text-green-600'>Monthly Reccuring Revenue</span> Every 90 Days <span class='font-bold text-red-600'>Without</span> Paying For Ads or Hiring SDRS",
        // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
        //= subtitle: "100% DONE FOR YOU.",
        subtitle:
          "<span class='text-red-500'>Keep Reading Or Watch This Video To Find Out How</span> ",
        video: "https://ahanikotb.wistia.com/medias/fhi8p923ml",
        CTA: "Free Growth Strategy Call",
      },
      1,
    ],
    // [
    //   {
    //     preheadline: "<span class='text-red-500'>Recruiters Only<span/>",
    //     headline:
    //       "<span class='font-bold'>Add $40,000 Of Additonal Monthly Reccuring Revenue in 30 Days Without Cold Calling Or Manual Outreach</span>",
    //     // '10<span class="text-red-500" >  Sales Calls </span>Per Month With <span class="text-red-500" > Ready-To-Buy </span>Leads  That<span class="text-yellow-400" >  Understand  </span>And <span class="text-yellow-400" >Need </span>Your Service',
    //     // subtitle: "100% DONE FOR YOU.",
    //     subtitle:
    //       "Business To Business Digital Marketing and Sales System. <br/><span class='text-red-500'>100% Done For You ",
    //     video: "https://ahanikotb.wistia.com/medias/fhi8p923ml",
    //     CTA: "Get Started",
    //   },
    //   1,
    // ],
  ]);
  const analytics = useGoogleAnalytics();
  useEffect(() => {
    //@ts-ignore
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "/",
        page_path: "/",
      });
    }
  }, [analytics]);
  const copyRef = useRef<any>(weightedRandom(copy));
  const timePageLoaded = useRef(Date.now());
  // <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/2f077f2388144573b18aac23d82bf5c2?sid=8e4ae21d-9f4a-40e7-8ec8-9ace78e8a3e8" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
  useScript("https://fast.wistia.net/assets/external/E-v1.js");

  const logClick = () => {
    if (analytics) {
      logEvent(analytics, "recpageconversion", {
        headline: copyRef.current.headline,
        page_structure: "vsl",
        videoLink: copyRef.current.video,
        timeSpentOnPage: Date.now() - timePageLoaded.current,
      });
    }
  };
  return (
    <div className="overflow-hidden ">
      <section className="xl:mt-5 xl:flex xl:w-[90vw] xl:content-center xl:justify-center xl:mx-auto">
        <div className="xl:flex-col xl:justify-center xl:content-center xl:my-auto xl:flex-1">
          {" "}
          <h3
            dangerouslySetInnerHTML={{
              __html: copyRef.current.preheadline,
            }}
            className="xl:my-0 mt-3 font-black leading-[1.2] text-xl  text-black text-center xl:text-start w-[90%] lg:leading-[1.3] mx-auto xl:mx-0  lg:text-2xl md:w-4/5 md:text-2xl xl:w-3/4 xl:text-xl 2xl:text-xl"
          >
            {/* {copyRef.current.headline} */}
          </h3>
          <h1
            dangerouslySetInnerHTML={{
              __html: copyRef.current.headline,
            }}
            className="xl:my-0  mt-0  leading-[1.2] text-3xl xl:text-start text-black text-center w-[90%] lg:leading-[1.3] mx-auto xl:mx-0  lg:text-5xl md:w-4/5 md:text-5xl xl:w-3/4 xl:text-4xl 2xl:text-5xl"
          >
            {/* {copyRef.current.headline} */}
          </h1>
          <h3
            dangerouslySetInnerHTML={{
              __html: copyRef.current.subtitle,
            }}
            className=" mt-3 font-black leading-[1.2] text-sm xl:text-start text-black text-center w-[90%] lg:leading-[1.3] mx-auto xl:mx-0  lg:text-sm md:w-4/5 md:text-sm xl:w-3/4"
          ></h3>
          <CTAButton
            additionalClasses={"mt-5 hidden mx-0  xl:flex xl:p-0"}
            onClick={logClick}
            CTA={copyRef.current.CTA}
            href="/apply?disableFirstBlock
"
          />
        </div>
        <div className="mt-3 sm:mt-10  w-[90vw] sm:w-[60vw] mx-auto mb-10 xl:flex-1">
          <div className="wistia_responsive_padding ">
            <div
              className="wistia_responsive_wrapper mx-auto xl:w-[35vw]"
              style={{
                height: "100%",
              }}
            >
              <IframeResizer
                src="https://fast.wistia.net/embed/iframe/fhi8p923ml?videoFoam=true"
                title="VSL_CTA Video"
                allow="autoplay; fullscreen"
                allowTransparency={true}
                frameBorder={0}
                scrolling={false}
                className="wistia_embed"
                name="wistia_embed"
                allowFullScreen={true}
                width="100%"
                height="100%"
              ></IframeResizer>
            </div>
          </div>
        </div>
        <CTAButton
          additionalClasses={"mb-5 xl:hidden"}
          onClick={logClick}
          CTA={copyRef.current.CTA}
          href="/apply?disableFirstBlock
"
        />
      </section>

      <section className="mt-5 p-4 rounded-xl sm:p-10  mb-10  w-[90%] sm:w-[90%] mx-auto">
        <h1 className="text-black font-black text-center  sm:text-2xl">
          Clients We've Worked With
        </h1>
        <div className=" mx-auto mt-2 sm:mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center ">
              <img
                src="/clients/3.png"
                className="sm:max-h-20 sm:max-w-20 max-h-full max-w-full"
                alt="Client 1"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/clients/4.png"
                className="sm:max-h-20 sm:max-w-20 max-h-full max-w-full"
                alt="Client 2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90vw] mx-auto">
        <ImageWithCaption
          caption="Figure 1: Cold Email Campaign That Generated 6 Meetings In the first Week."
          src="proof/email-1.png"
        ></ImageWithCaption>
        {/* <img src="proof/email-1.png"></img> */}
        <div className="grid grid-cols-1 sm:grid-cols-2  mt-10 w-[80vw]  ">
          <ImageWithCaption
            caption="Figure 2: Positive Replies On Outreach Efforts."
            src="proof/email-2.png"
            className="p-10"
          ></ImageWithCaption>
          {/* <img className="p-10" src="proof/email-2.png"></img> */}

          {/* <img
            className="py-10 px-1 overflow-hidden"
            src="proof/email-3.png"
          ></img> */}
          <ImageWithCaption
            caption="Figure 3: Another Interested Prospect When you write a good message."
            src="proof/email-3.png"
            className="py-10 px-1 overflow-hidden"
          ></ImageWithCaption>
          <ImageWithCaption
            caption="Figure 4: My fully booked calendar on april 2023 all using cold email."
            src="proof/calendar.png"
            className="py-10 px-1 overflow-hidden"
          ></ImageWithCaption>
          <ImageWithCaption
            caption="Figure 5: My Crm packed with discovery calls."
            src="proof/ghl.png"
            className="py-10 px-1 overflow-hidden"
          ></ImageWithCaption>
        </div>
        {/* <img
          className="py-10 px-1 overflow-hidden"
          src="proof/calendar.png"
        ></img> */}

        {/* <img className="py-10 px-1 overflow-hidden" src="proof/ghl.png"></img> */}
        {/* <img src="proof/email.png"></img> */}
        {/* <img src="proof/email.png"></img> */}
        {/* <img src="proof/linkedin.png"></img> */}
      </section>
      <section className="my-10  sm:my-20  rounded-lg w-[90%] mx-auto ">
        <div className="w-[90vw]  mx-auto  flex flex-col items-center justify-center">
          <div className="flex flex-col py-5  items-center justify-center">
            <h1 className="sm:m-10  text-4xl sm:text-7xl font-bold text-black text-center ">
              Agency Owners Pay Attention:
            </h1>
          </div>
        </div>
        <div className="flex flex-row-reverse 2xl:px-40 2xl:pt-10  ">
          <div className="w-[40vw] px-20 pb-40   hidden 2xl:flex ">
            <div className="flex flex-1  flex-col">
              <div className=" bg-white rounded-lg sm:p-3 flex justify-center items-center flex-col">
                <img src={"/painpoint/referrals.jpg"} />
              </div>
              <div className=" bg-white rounded-lg sm:p-3 flex justify-center items-center flex-col">
                <img src={"/painpoint/insecurity.jpg"} />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className=" bg-white rounded-lg sm:p-3 flex  justify-center items-center flex-col">
                <img src={"/painpoint/fillingcalendar.jpg"} />
              </div>
              <div className=" bg-white rounded-lg sm:p-3 flex  justify-center items-center flex-col">
                <img src={"/painpoint/paidads.jpg"} />
              </div>
            </div>
          </div>
          <ReactMarkdown
            children={Lead}
            remarkPlugins={[]}
            rehypePlugins={[rehypeRaw]}
            className=" prose-strong:font-bold  sm:leading-[2rem] font-sans prose sm:prose-2xl  mx-auto mb-10 text-black 2xl:w-[30vw] w-[80vw] "
          />
        </div>
      </section>
      <section className="my-10 py-10 sm:my-20 rounded-lg w-[90%] mx-auto ">
        <div className="w-[90vw] mx-auto  flex flex-col items-center justify-center">
          <div className="flex flex-col py-5  items-center justify-center">
            <h1 className="sm:m-10  text-4xl sm:text-7xl font-bold text-black text-center ">
              Why Automated Cold Email
            </h1>
          </div>
        </div>
        <ReactMarkdown
          children={Mechanism}
          remarkPlugins={[]}
          rehypePlugins={[rehypeRaw]}
          className=" prose-strong:font-bold sm:leading-[2rem] font-sans prose sm:prose-2xl   mx-auto mb-10 text-black w-[80vw] "
        />
      </section>
      {/* <Statement /> */}
      <section className=" mx-auto">
        <div className="w-[90vw] mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold text-black text-center mt-10 mb-10">
              A{" "}
              <span className="underline decoration-green-700">Consistent</span>{" "}
              & Repeatable System For Closing Deals
            </h1>
            <div className="bg-gray-200 rounded-xl py-10 w-[80vw] sm:w-[50vw]">
              <Image
                className="mx-auto"
                src={"/leadgen_for_marketing_agencies.drawio.png"}
                width={400}
                height={200}
                alt={""}
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <CTAButton
        additionalClasses={"my-10 "}
        CTA={copyRef.current.CTA}
        // onClick={logClick}
        // CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      />
      <section
        style={
          {
            // backgroundImage: "url(/xentora_print.png)",
            // objectFit: "contain",
            // background: "rgba(0, 0,30, 1)", //"rgba(0, 0,0, 0.2)",
          }
        }
        className="my-10 w-[90vw] sm:w-[80%] sm:p-20 p-5  justify-center  mx-auto rounded-lg"
      >
        <h1 className="text-4xl sm:text-7xl font-bold text-black text-center sm:my-20 my-10">
          Who We Are
        </h1>
        <div className="lg:flex lg:flex-row">
          <div className="flex lg:flex-1 sm:m-10 items-center justify-center">
            <img
              className="w-[250px] sm:w-full"
              src="/xentora_logo_black.png"
            ></img>
          </div>

          <h3 className="text-start  lg:flex-1 text-2xl text-black mt-2">
            <br />
            Founded in 2023 with a mission to make lead generation for b2b
            companies a problem of the past.
            <br />
            In the last 3 months we’ve booked over 50 meetings and generated
            over $200k in pipeline for our clients using cold email alone.
          </h3>
        </div>
      </section>
      {/* <Timeline /> */}
      {/* <CTAButton
        additionalClasses={"mb-5 xl:hidden"}
        onClick={logClick}
        CTA={copyRef.current.CTA}
        href="/apply?disableFirstBlock
"
      /> */}
      {/* <PricingTable CTA={copyRef.current.CTA} /> */}
      <Testimonials />
      <section
        style={{
          backgroundImage:
            "url(http://www.transparenttextures.com/patterns/textured-paper.png)",
          // background: "rgba(0, 0,30, 1)", //"rgba(0, 0,0, 0.2)",
        }}
        className="my-10 w-[95%] sm:w-[70%] p-2 py-6 mx-auto rounded-lg"
      >
        <h1 className="font-black text-4xl sm:text-5xl text-black text-center">
          WANT TO TALK TO SOMEONE ?
        </h1>
        <h3 className="text-center text-2xl text-black mt-2">
          Our lead generation specialists are available to answer your questions
          💬
        </h3>
        <CTAButton
          additionalClasses={"mt-5"}
          onClick={logClick}
          CTA={copyRef.current.CTA}
          href="/apply?disableFirstBlock
"
        />
      </section>
    </div>
  );
}

export default SalesPage;
