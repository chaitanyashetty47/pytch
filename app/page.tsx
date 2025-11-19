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
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      {/* <NavbarDemo /> */}
      <Navbar onJoinClick={handleOpenDialog} />
      <section id="hero" className="">
        <GridBackgroundDemo className=" relative flex flex-col items-center justify-start pt-24">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-5xl font-semibold leading-tight text-black dark:text-white sm:text-6xl">
              Invest Early, Trade Smart
              <br /> Unlock Liquidity
            </h1>
            <p className="mt-6 max-w-xl text-center text-lg text-zinc-600 dark:text-zinc-400">
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
                className="rounded-full border border-primary bg-white hover:cursor-pointer px-6 py-3 font-bold text-primary-foreground shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover hover:scale-105 active:scale-95 active:shadow-pytch-cta-active"
              >
                Join as Investor
              </button>

              <div className="relative max-w-[90%] w-full md:max-w-5xl mt-12 mx-auto rounded-3xl flex flex-col items-center justify-center">
                <Image 
                  src="/hero-image.png" 
                  alt="hero" 
                  width={700} 
                  height={350} 
                  className="h-auto w-full object-cover shadow-md"
                />
                  {/* Subtle white fade from bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white via-white/50 to-transparent"></div>
            </div>
            </div>
          </div>
          
        </GridBackgroundDemo>
      </section>
      <section id="features" className="flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mt-10 font-semibold text-center">Built for the Future of Startup Investment</h2>
          <p className="text-center text-lg mt-4 text-zinc-600 max-w-lg mx-auto">
          Access verified startups, trade private shares, and manage your portfolio with AI-driven insights all in one place.
          </p>
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            <div className="bg-white relative px-2 py-8  flex flex-col items-center justify-start border-solid border-t-2 border-l-2 border-r-2 border-muted ">
              
              <div className="relative flex items-center justify-center">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-primary/30 "></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-primary/20 "></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-primary/10 "></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-primary p-2">
                  <Image src="/candlestick.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center py-3 md:py-4">Liquidity and Trading</h3>
              <p className="text-center text-base text-zinc-600 text-balance">
              Trading of private startup shares, unlocking liquidity for early investors.
              </p>
            </div>
            <div className="bg-white relative px-2 py-8  flex flex-col items-center justify-start border-solid border-t-2 border-r-2 border-muted ">
              
              <div className="relative flex items-center justify-center">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-primary/30 "></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-primary/20 "></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-primary/10 "></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-primary p-2">
                  <Image src="/protect.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center py-3 md:py-4">Verified Ecosystem</h3>
              <p className="text-center text-base text-zinc-600 text-balance">
              All startups and investors are thoroughly verified to ensure trust, security, and quality connections.
              </p>
            </div>
            
            <div className="bg-white relative px-2 py-8  flex flex-col items-center justify-start border-solid border-t-2 border-r-2 border-muted ">
              
              <div className="relative flex items-center justify-center">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-primary/30 "></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-primary/20 "></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-primary/10 "></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-primary p-2">
                  <Image src="/dashboard.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center py-3 md:py-4">Smart Dashboard</h3>
              <p className="text-center text-base text-zinc-600 text-balance">
              Track all your investments, returns, and liquidity in one unified dashboard with real-time analytics.
              </p>
            </div>
            <div className="bg-white relative px-2 py-8  flex flex-col items-center justify-start border-solid border-t-2 border-r-2 border-muted ">
              
              <div className="relative flex items-center justify-center">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-primary/30 "></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-primary/20 "></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-primary/10 "></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-primary p-2">
                  <Image src="/bot.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center py-3 md:py-4">AI Matchmaking</h3>
              <p className="text-center text-base text-zinc-600 ">
                Our AI-powered matchmaking system connects you with the perfect startup or investor.
              </p>
            </div>
            <div className="bg-white relative px-2 py-8  flex flex-col items-center justify-start border-solid border-t-2 border-r-2 border-muted ">
              
              <div className="relative flex items-center justify-center">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-primary/30 "></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-primary/20 "></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-primary/10 "></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-primary p-2">
                  <Image src="/analytics.svg" alt="Stock Market" width={23} height={23} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center py-3 md:py-4">Smart Analytics</h3>
              <p className="text-center text-base text-zinc-600 text-balance">
              Get real-time insights on investment opportunities, market trends, and portfolio performance.
              </p>
            </div>
            <div className="bg-white relative px-2 py-8  flex flex-col items-center justify-start border-solid border-t-2 border-r-2 border-muted ">
              
              <div className="relative flex items-center justify-center">
                {/* Ripple circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-12 w-12 z-10 rounded-full bg-primary/30 "></div>
                  <div className="absolute h-13 w-13 z-20 rounded-full bg-primary/20 "></div>
                  <div className="absolute h-14 w-14 z-30 rounded-full bg-primary/10 "></div>
                </div>
                {/* Main icon */}
                <div className="relative z-40 flex items-center justify-center rounded-full bg-primary p-2">
                  <Image src="/secure.svg" alt="Stock Market" width={25} height={25} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center py-3 md:py-4">Secure and Reliable</h3>
              <p className="text-center text-base text-zinc-600 text-balance">
              Trade startup shares with complete security, verification, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>

      </section>
      
      {/* Waitlist Banner */}
      <section className="mt-20 w-full bg-black text-primary">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-14 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold">Join The Waitlist</h2>
          <p className="mt-4 text-lg text-primary/80">
            Be among the first to experience the future of startup investing with verified deal flow, AI matchmaking, and exclusive liquidity events delivered straight to your inbox.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenDialog("startup")}
              className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover hover:scale-105 active:scale-95 active:shadow-pytch-cta-active"
            >
              Join as Startup
            </button>
            <button
              onClick={() => handleOpenDialog("investor")}
              className="rounded-full border border-black bg-transparent px-6 py-3 font-bold text-primary shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover hover:scale-105 active:scale-95 active:shadow-pytch-cta-active"
            >
              Join as Investor
            </button>
          </div>
        </div>
      </section>
      
      {/* Join Now Dialog */}
      <JoinNowDialog open={dialogOpen} onOpenChange={setDialogOpen} defaultTab={activeTab} hideTrigger />
      
      {/* Footer Section */}
      <footer className="mt-0 bg-linear-to-br from-primary via-primary/95 to-primary/90 text-black">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column - Logo & Quick Links */}
            <div className="flex flex-col items-start">
              {/* <Image 
                src="/logo.png" 
                alt="PYTCH Logo" 
                width={120} 
                height={40} 
                className="mb-6"
              /> */}
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <a 
                href="#features" 
                className="text-muted-foreground hover:text-black transition-colors duration-200 mb-2"
              >
                Features
              </a>
            </div>

            {/* Second Column - Copyright */}
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-black/90 text-sm">
                © 2025 PYTCH. All rights reserved.
              </p>
            </div>

            {/* Third Column - Contact Us */}
            <div className="flex flex-col items-start md:items-end">
              <h3 className="text-lg text-left font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 text-black/90 hover:text-black transition-colors duration-200">
                <Mail className="text-xl" />
                <a href="mailto:demo@gmail.com" className="text-sm">
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
