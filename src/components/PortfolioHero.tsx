"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function PortfolioHero(){
  const ref=useRef<HTMLDivElement>(null); const px=useMotionValue(0); const py=useMotionValue(0);
  const sx=useSpring(px,{stiffness:110,damping:22}); const sy=useSpring(py,{stiffness:110,damping:22});
  const rotateY=useTransform(sx,[-1,1],[-9,9]); const rotateX=useTransform(sy,[-1,1],[7,-7]);
  const move=(e:React.PointerEvent)=>{if(e.pointerType==="touch")return;const r=ref.current?.getBoundingClientRect();if(!r)return;px.set(((e.clientX-r.left)/r.width-.5)*2);py.set(((e.clientY-r.top)/r.height-.5)*2)};
  const reset=()=>{px.set(0);py.set(0)};
  return <section id="top" ref={ref} onPointerMove={move} onPointerLeave={reset} className="relative min-h-[100svh] overflow-hidden border-b border-white/10 hero-grid">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_43%,rgba(215,255,101,.09),transparent_25%),radial-gradient(circle_at_12%_80%,rgba(255,255,255,.05),transparent_25%)]"/>
    <div className="container relative z-10 flex min-h-[100svh] flex-col py-5 md:py-7">
      <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.08fr_.92fr] lg:py-10">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.22,1,.36,1]}}>
          <p className="eyebrow">Full-stack developer · IT solutions</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(3.5rem,9vw,8.7rem)] font-semibold leading-[.84]">I BUILD<br/><span className="text-white/72">USEFUL</span><br/><span className="text-white/22">DIGITAL SYSTEMS.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/52 md:text-lg">I&apos;m Magati Joel. I build modern websites, business systems, mobile applications, automation tools, and AI-powered experiences that solve practical problems.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-[#f1f2ed] px-5 py-3 text-sm font-medium text-[#111] transition hover:-translate-y-0.5">Explore selected work <span className="transition-transform group-hover:translate-x-1">↗</span></a><a href="mailto:magatijoel@gmail.com" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white/75 transition hover:border-white/30 hover:text-white">Start a conversation ↗</a></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/35"><span><i className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"/>Available for work</span><span>Based in Kenya</span><span className="mono">01—25</span></div>
        </motion.div>

        <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center [perspective:1400px]">
          <motion.div style={{rotateX,rotateY}} className="relative aspect-[.92] w-full max-w-[440px] transition-transform [transform-style:preserve-3d]">
            <div className="absolute inset-[7%_8%] overflow-hidden rounded-[2.3rem] border border-white/12 bg-[#111315] shadow-2xl shadow-black/50" style={{transform:"translateZ(20px)"}}>
              <Image src="/profile.png" alt="Magati Joel" fill priority sizes="(max-width:1024px) 88vw, 46vw" className="object-cover object-top grayscale-[.18]"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/5"/>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between"><div><p className="mono text-[9px] uppercase tracking-[.25em] text-white/40">Magati Joel</p><p className="mt-1 text-sm font-medium">Digital systems / product engineering</p></div><span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/30 text-xs">MJ</span></div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center gap-3 pb-2 text-[10px] uppercase tracking-[.28em] text-white/25"><span className="h-px w-10 bg-white/15"/>Scroll to explore</div>
    </div>
  </section>
}
