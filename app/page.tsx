"use client"

import { Navbar } from "@/components/navbar";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useState } from "react";
import { JoinNowDialog } from "@/components/startup-form";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"startup" | "investor">("startup")

  const handleOpenDialog = (tab: "startup" | "investor") => {
    setActiveTab(tab)
    setDialogOpen(true)
  }

  return (
    <div className=" bg-white font-sans">
      {/* <NavbarDemo /> */}
      <Navbar onJoinClick={handleOpenDialog} />
      <section id="hero" className="">
        <GridBackgroundDemo className=" relative flex flex-col items-center justify-start ">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-5xl font-semibold leading-tight mt-24 text-[#121212] sm:text-6xl">
              Invest Early, Trade Smart
              <br /> Unlock Liquidity
            </h1>
            <p className="mt-6 max-w-xl text-center text-lg text-zinc-800">
              PYTCH is an AI-powered platform connecting startups and investors with future trading capabilities.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 ">
              <button 
                onClick={() => handleOpenDialog("startup")}
                className="rounded-full bg-primary px-6 py-3 font-bold hover:cursor-pointer text-primary-foreground shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover hover:scale-105 active:scale-95 active:shadow-pytch-cta-active"
              >
                Join as Startup
              </button>
              <button 
                onClick={() => handleOpenDialog("investor")}
                className="rounded-full border border-primary bg-white hover:cursor-pointer px-6 py-3 font-bold text-black hover:bg-primary/10 shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover hover:scale-105 active:scale-95 active:shadow-pytch-cta-active"
              >
                Join as Investor
              </button>

              <div className="relative max-w-[90%] w-full md:max-w-5xl mt-12 mx-auto rounded-3xl flex flex-col items-center justify-center overflow-hidden">
                <Image 
                  src="/dashboard-dark.png" 
                  alt="hero" 
                  width={700} 
                  height={350} 
                  className="h-auto w-full object-cover shadow-md rounded-3xl"
                />
                  {/* Subtle fade from bottom for light background */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/30 to-transparent"></div>
            </div>
            </div>
          </div>
          
        </GridBackgroundDemo>
      </section>
      <section id="features" className="flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mt-10 font-semibold text-center text-[#121212]">Built for the Future of Startup Investment</h2>
          <p className="text-center text-lg mt-4 text-zinc-600 max-w-lg mx-auto">
          Access verified startups, trade private shares, and manage your portfolio with AI-driven insights all in one place.
          </p>
          <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 min-h-[280px] w-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08),0_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05)] border-2 border-zinc-200/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-4">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-[#20AB73]/30"></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-[#20AB73]/20"></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-[#20AB73]/10"></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-[#20AB73] p-2">
                  <Image src="/candlestick.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-[#1a8f63]">Liquidity and Trading</h3>
              <p className="text-center text-base text-muted-foreground text-balance">
              Trading of private startup shares, unlocking liquidity for early investors.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[280px] w-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08),0_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05)] border-2 border-zinc-200/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-4">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-[#20AB73]/30"></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-[#20AB73]/20"></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-[#20AB73]/10"></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-[#20AB73] p-2">
                  <Image src="/protect.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-[#1a8f63]">Verified Ecosystem</h3>
              <p className="text-center text-base text-muted-foreground text-balance">
              All startups and investors are thoroughly verified to ensure trust, security, and quality connections.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 min-h-[280px] w-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08),0_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05)] border-2 border-zinc-200/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-4">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-[#20AB73]/30"></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-[#20AB73]/20"></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-[#20AB73]/10"></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-[#20AB73] p-2">
                  <Image src="/dashboard.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-[#1a8f63]">Smart Dashboard</h3>
              <p className="text-center text-base text-muted-foreground text-balance">
              Track all your investments, returns, and liquidity in one unified dashboard with real-time analytics.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[280px] w-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08),0_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05)] border-2 border-zinc-200/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-4">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-[#20AB73]/30"></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-[#20AB73]/20"></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-[#20AB73]/10"></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-[#20AB73] p-2">
                  <Image src="/bot.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-[#1a8f63]">AI Matchmaking</h3>
              <p className="text-center text-base text-muted-foreground">
                Our AI-powered matchmaking system connects you with the perfect startup or investor.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[280px] w-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08),0_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05)] border-2 border-zinc-200/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-4">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-[#20AB73]/30"></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-[#20AB73]/20"></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-[#20AB73]/10"></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-[#20AB73] p-2">
                  <Image src="/analytics.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-[#1a8f63]">Smart Analytics</h3>
              <p className="text-center text-base text-muted-foreground text-balance">
              Get real-time insights on investment opportunities, market trends, and portfolio performance.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 min-h-[280px] w-full flex flex-col items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.12),0_4px_8px_rgba(0,0,0,0.08),0_2px_0_rgba(255,255,255,1),inset_0_-1px_1px_rgba(0,0,0,0.05)] border-2 border-zinc-200/50 transition-all duration-500 opacity-0 translate-y-8 animate-fade-in-up hover:shadow-[0_12px_32px_rgba(0,0,0,0.15),0_4px_8px_rgba(0,0,0,0.1),0_2px_0_rgba(255,255,255,1)] hover:-translate-y-1">
              <div className="relative flex items-center justify-center mb-4">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-[#20AB73]/30"></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-[#20AB73]/20"></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-[#20AB73]/10"></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-[#20AB73] p-2">
                  <Image src="/secure.svg" alt="Stock Market" width={25} height={25} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-[#1a8f63]">Secure and Reliable</h3>
              <p className="text-center text-base text-muted-foreground text-balance">
              Trade startup shares with complete security, verification, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>

      </section>
      
      {/* Waitlist Banner */}
      <section className="mt-20 w-full bg-gradient-to-b from-white to-[#1a8f63]">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-16 text-center md:px-8">
          <h2 className="text-3xl font-semibold leading-tight text-[#121212] sm:text-4xl md:text-5xl lg:text-6xl">
            Join The Waitlist
          </h2>
          <p className="mt-4 max-w-3xl text-base text-[#121212]/80 sm:text-lg md:text-xl">
            Be among the first to experience the future of startup investing with verified deal flow, AI matchmaking, and exclusive liquidity events delivered straight to your inbox.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenDialog("startup")}
              className="rounded-full bg-primary px-7 py-3 font-semibold text-[#121212] shadow-[0_4px_12px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-200 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.12)] hover:cursor-pointer hover:scale-105 active:scale-95 active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
            >
              Join as Startup
            </button>
            <button
              onClick={() => handleOpenDialog("investor")}
              className="rounded-full border-2 border-primary bg-white/90 backdrop-blur-sm px-7 py-3 font-semibold text-[#121212] shadow-[0_4px_12px_rgba(26,143,99,0.15),0_2px_4px_rgba(26,143,99,0.1)] transition-all duration-200 hover:cursor-pointer hover:shadow-[0_6px_16px_rgba(0,0,0,0.2),0_2px_4px_rgba(0,0,0,0.12)] hover:scale-105 active:scale-95 active:shadow-[0_2px_6px_rgba(0,0,0,0.2)]"
            >
              Join as Investor
            </button>
          </div>
        </div>
      </section>
      
      {/* Join Now Dialog */}
      <JoinNowDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultTab={activeTab} hideTrigger />
      
      {/* Footer Section */}
      <footer className="mt-0 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* First Column - Logo & Quick Links */}
            <div className="flex flex-col items-start sm:items-start">
              {/* <Image 
                src="/logo.png" 
                alt="PYTCH Logo" 
                width={120} 
                height={40} 
                className="mb-6"
              /> */}
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#121212]">Quick Links</h3>
              <a 
                href="#features" 
                className="text-[#121212]/80 hover:text-[#121212] transition-colors duration-200 mb-2 text-sm sm:text-base"
              >
                Features
              </a>
            </div>

            {/* Second Column - Copyright */}
            <div className="flex flex-col items-center justify-center text-center order-last sm:order-none">
              <p className="text-[#121212]/70 text-xs sm:text-sm">
                © 2025 PYTCH. All rights reserved.
              </p>
            </div>

            {/* Third Column - Contact Us */}
            <div className="flex flex-col items-start sm:items-end">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[#121212]">Contact Us</h3>
              <div className="flex items-center gap-2 text-[#121212]/80 hover:text-[#121212] transition-colors duration-200">
                <Mail className="text-lg sm:text-xl" />
                <a href="mailto:demo@gmail.com" className="text-xs sm:text-sm">
                  demo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
