"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-[#F9F6EF] text-[#100C06] overflow-hidden" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header with badge & social icons */}
          <div className="flex justify-between items-center mb-8 w-[88%] absolute lg:top-4 md:top-2 sm:top-0 -top-2 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-amber-600 animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-sm font-black text-amber-900 tracking-[3px] uppercase"
              >
                WHO WE ARE
              </TimelineContent>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="md:w-9 md:h-9 sm:w-7 w-6 sm:h-7 h-6 border border-amber-200/80 bg-white/90 shadow-2xs rounded-xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              >
                <img src="https://pro-section.ui-layouts.com/facebook.svg" alt="Facebook" className="w-4 h-4" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="md:w-9 md:h-9 sm:w-7 w-6 sm:h-7 h-6 border border-amber-200/80 bg-white/90 shadow-2xs rounded-xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              >
                <img src="https://pro-section.ui-layouts.com/instagram.svg" alt="Instagram" className="w-4 h-4" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="md:w-9 md:h-9 sm:w-7 w-6 sm:h-7 h-6 border border-amber-200/80 bg-white/90 shadow-2xs rounded-xl flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              >
                <img src="https://pro-section.ui-layouts.com/youtube.svg" alt="YouTube" className="w-4 h-4" />
              </TimelineContent>
            </div>
          </div>

          {/* Banner Figure with Cut SVG Clip Path */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group rounded-3xl overflow-hidden shadow-2xl border border-amber-900/10 mb-8"
          >
            <svg
              className="w-full h-auto min-h-[260px] md:min-h-[420px]"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1400&auto=format&fit=crop"
              />
            </svg>
          </TimelineContent>

          {/* Stats Bar */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-4 px-2 text-sm border-b border-amber-900/10 mb-10">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap gap-4 md:gap-8"
            >
              <div className="flex items-center gap-2 sm:text-base text-xs font-semibold">
                <span className="text-amber-700 font-extrabold text-lg">10+</span>
                <span className="text-gray-700">years of farm legacy</span>
                <span className="text-gray-300 hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-2 sm:text-base text-xs font-semibold">
                <span className="text-amber-700 font-extrabold text-lg">100%</span>
                <span className="text-gray-700">pure A2 Bilona ghee</span>
                <span className="text-gray-300 hidden sm:inline">|</span>
              </div>
              <div className="flex items-center gap-2 sm:text-base text-xs font-semibold">
                <span className="text-amber-700 font-extrabold text-lg">50,000+</span>
                <span className="text-gray-700">happy families</span>
              </div>
            </TimelineContent>

            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4 mt-4 lg:mt-0">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-3xl sm:text-2xl text-xl items-center gap-2 mb-1"
              >
                <span className="text-amber-700 font-extrabold">70+</span>
                <span className="text-gray-800 uppercase font-black text-sm sm:text-base tracking-wider">Quality Checks</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-sm text-xs font-medium"
              >
                <span className="text-emerald-700 font-bold">100%</span>
                <span className="text-gray-600">NABL Lab Certified</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="md:col-span-2">
            <h1 className="sm:text-3xl md:text-5xl text-2xl !leading-[120%] font-black text-gray-900 mb-8 tracking-tight">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.08}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.2,
                }}
              >
                Crafting Pure Farm Goods That Make A Difference.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-6 text-gray-700"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm md:text-base leading-relaxed bg-white/60 p-6 rounded-2xl border border-amber-900/10 shadow-2xs"
              >
                <p className="leading-relaxed">
                  Our journey began on the fertile lands of Gujarat with a mission to revive authentic, unadulterated farm goods. We specialize in traditional Bilona method A2 Gir Cow Ghee, cold-pressed seed oils, and natural superfoods.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm md:text-base leading-relaxed bg-white/60 p-6 rounded-2xl border border-amber-900/10 shadow-2xs"
              >
                <p className="leading-relaxed">
                  Every jar carries the soul of ancient Indian farming. By blending time-tested Vedic churning methods with strict NABL lab testing, we deliver nutrient-dense, chemical-free goodness directly from our pastures to your dining table.
                </p>
              </TimelineContent>
            </TimelineContent>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Vedic Bilona Method",
                "Pure Gir Cow A2 Milk",
                "Wood-Fired Melting",
                "Zero Preservatives"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-extrabold text-amber-900 bg-amber-100/60 py-2.5 px-3 rounded-xl border border-amber-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar / Brand Info */}
          <div className="md:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-xl text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-amber-800 text-2xl font-black tracking-wider mb-1"
              >
                VIVAAN FARMS
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-6"
              >
                Pure A2 Ghee | Organic Farm Goods
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-8"
              >
                <p className="text-gray-800 text-sm font-semibold leading-relaxed mb-2">
                  Ready to experience unadulterated farm purity for your family?
                </p>
                <span className="text-xs text-amber-700 font-medium">Direct farm delivery across India with 100% guarantee.</span>
              </TimelineContent>

              <TimelineContent
                as="a"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="/"
                className="inline-flex items-center justify-end gap-2 hover:gap-4 bg-amber-900 hover:bg-amber-950 text-white px-6 py-3.5 rounded-2xl cursor-pointer font-bold text-xs uppercase tracking-widest shadow-lg transition-all duration-300 ease-in-out w-full justify-center"
              >
                <span>EXPLORE OUR GOODS</span> <ArrowRight className="w-4 h-4" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

