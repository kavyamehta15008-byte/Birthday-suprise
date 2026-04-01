/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PartyPopper, 
  Gift, 
  Camera, 
  Moon, 
  Flame, 
  Heart, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles 
} from 'lucide-react';

// --- Components ---

const Sparkle = ({ top, left, delay }: { top: string; left: string; delay: number }) => (
  <div 
    className="sparkle" 
    style={{ top, left, animationDelay: `${delay}s` }} 
  />
);

const EntryGate = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-inverse-surface flex flex-col items-center justify-center text-center p-8"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkle top="10%" left="10%" delay={0} />
        <Sparkle top="25%" left="80%" delay={0.5} />
        <Sparkle top="66%" left="25%" delay={1} />
        <Sparkle top="50%" left="50%" delay={1.5} />
      </div>
      
      <div className="space-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-headline italic text-primary-fixed text-3xl md:text-5xl tracking-tight"
        >
          Hey Krishi...
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
          className="text-surface-variant font-light text-lg md:text-xl"
        >
          I made something for you ❤️
        </motion.p>
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="mt-8 px-8 py-4 bg-gradient-to-br from-secondary to-secondary-container text-on-secondary-fixed font-semibold rounded-full shadow-lg flex items-center gap-2 mx-auto animate-pulse"
        >
          Tap to Open Your Surprise <Gift className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Header = () => (
  <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/40 backdrop-blur-xl shadow-[0px_20px_40px_rgba(29,27,27,0.05)]">
    <div className="flex items-center gap-2">
      <PartyPopper className="text-primary w-6 h-6" />
      <h1 className="text-2xl font-headline italic tracking-tight text-primary">Krishi Sanghavi</h1>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative text-center space-y-4 py-12">
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/30 rounded-full blur-3xl -z-10"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-headline text-5xl md:text-6xl text-primary leading-tight"
    >
      Happy 20th <br/>
      <span className="italic text-secondary">Birthday, Krishi</span> 💖
    </motion.h2>
    <p className="text-outline uppercase tracking-[0.3em] text-xs font-bold">
      My sweetest sister, always and forever
    </p>
  </section>
);

const BentoTip = ({ number, icon: Icon, text, bgColor, textColor, iconColor }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`${bgColor} backdrop-blur-md p-6 rounded-lg flex flex-col justify-between min-h-[200px]`}
  >
    <div className="flex justify-between items-start">
      <span className={`${textColor} font-bold text-4xl`}>{number}</span>
      <Icon className={`${iconColor} w-10 h-10`} />
    </div>
    <p className={`${textColor} font-semibold mt-4`}>
      {text}
    </p>
  </motion.div>
);

const MessageSection = () => (
  <section className="space-y-12">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-surface-container-low p-8 rounded-lg space-y-6 shadow-sm border-l-4 border-primary/20"
    >
      <p className="font-headline text-2xl italic text-primary">Happiest 18th birthday to my sweetest sisterrr ❤️🥹</p>
      <p className="text-on-surface-variant leading-relaxed">
        (I know tu 20 ki ho rahi hai, but for me tu hamesha meri choti si bacchi hi rahegi 😌)
        Pichle 1–1.5 saal mein humara bond bohot strong ho gaya hai… aur attachment bhi 💖
        And honestly, I love it so much.
      </p>
      <p className="text-on-surface-variant italic">
        Aaj tera 20th birthday hai… aur haan, tu budhi ho rahi hai 😭😂
        Aur jaise-jaise age badh rahi hai, waise hi tera alas bhi badh raha hai… jo mujhe bilkul pasand nahi 😤
      </p>
    </motion.div>

    <div className="grid grid-cols-1 gap-6">
      <BentoTip 
        number="1st" 
        icon={Camera} 
        text="Is birthday pe tujhe photos khichwani hi khichwani hai… kyuki tu har baar delete kar deti hai 😐🥲" 
        bgColor="bg-primary-container/40" 
        textColor="text-on-primary-container" 
        iconColor="text-primary"
      />
      <BentoTip 
        number="2nd" 
        icon={Moon} 
        text="Raat ko sona hai… ullu mat ban 😭 Aur din mein uthna hai. Health pe focus karna hai 💪" 
        bgColor="bg-secondary-container/30" 
        textColor="text-on-secondary-container" 
        iconColor="text-secondary"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-surface-container-highest p-6 rounded-lg border-2 border-primary/10"
      >
        <div className="flex items-center gap-4 mb-4">
          <Flame className="text-primary w-6 h-6" />
          <h3 className="font-headline text-xl">3rd Thing: Fire</h3>
        </div>
        <p className="text-on-surface-variant">
          Apni insecurities ko dur karna hai. Agle birthday tak apni life change karni hai. Andar jo aag hai sab kuch karne ki… usse use kar 💥
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary text-on-primary p-6 rounded-lg shadow-xl relative overflow-hidden"
      >
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <Heart className="w-32 h-32" />
        </div>
        <h3 className="font-headline text-2xl mb-4">4th and most important</h3>
        <p className="text-primary-fixed leading-relaxed">
          Mujhe sab batana hai. Aur meri baat aankh band karke maan leni hai 😌😂
        </p>
      </motion.div>
    </div>

    <div className="space-y-6 py-8">
      <p className="text-on-surface-variant leading-loose italic">
        Anywaysssss… Happiest birthdayyyyy didiii 🎂💖<br/>
        I really hope yeh birthday tere liye special ho ✨<br/>
        Thank you for everything… Tu hamesha mere tough times mein mere saath rahi hai 🥺❤️<br/>
        Aur haan… mujhe thank you bolna mat bhool 😏😂 (Mere birthday pe bol dena 😌)
      </p>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="p-6 bg-error-container rounded-lg"
      >
        <p className="text-on-error-container font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          NO CRYING RULES
        </p>
        <p className="text-on-error-container/80 mt-2">
          Aur please iss birthday pe mat rona 😭❌ Aur next birthday tak thoda kam rona 😤 We’re gonna change your life before 21 💯🔥
        </p>
      </motion.div>
      <p className="text-on-surface-variant text-right italic opacity-60">
        Aur haan… 3–4 saal mein shaadi bhi ho jayegi 😭😂<br/>
        Chal bye 👋 Milte hai aaj daytime mein 😌<br/>
        Once again… Happy Birthday ❤️🎂
      </p>
    </div>
  </section>
);

const MemoryCard = ({ src, caption, rotation }: { src: string; caption: string; rotation: string }) => (
  <div className="flex-none w-64 snap-center">
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 0 }}
      className={`bg-surface-container-highest rounded-lg overflow-hidden shadow-lg transform ${rotation}`}
    >
      <img 
        alt={caption} 
        className="w-full h-80 object-cover" 
        src={src} 
        referrerPolicy="no-referrer"
      />
      <p className="p-4 font-headline italic text-primary">{caption}</p>
    </motion.div>
  </div>
);

const MemoriesCarousel = () => (
  <section className="space-y-8">
    <h3 className="font-headline text-3xl text-center">Memories 🎞️</h3>
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-8 px-4">
      <MemoryCard 
        src="https://lh3.googleusercontent.com/aida/ADBb0ugviZ3y1iLRuGMAb5pVLOCjhcAtOp4If9l15fexB8DkdVArJvgHFB4CtQusbbmPFdzdVoBtLK3i_XuxrqWbnexq7_qr8Hm9C-aLP5Huws9lgNWGuNdbn72AUVkL5rPazGTfpKra2U60NVl_DtveR6A7mmcJpE98yQUp37krA_GyVA_yxthkN9g35NAKhXhJu2ZAsKpHi3O5gA8bHdU7ciSY-4HutHi3iJIuYFLa8YclYWc0sTNTebDVKhZ9_bI1gJC2EyPBFrBxCWE" 
        caption="Best memories ❤️" 
        rotation="-rotate-2"
      />
      <MemoryCard 
        src="https://lh3.googleusercontent.com/aida/ADBb0uh66b7hzied_pzfEEz74oDdsUPjMaanfgUxGx9gJeI_J2nZRaVRUC9B3_59KL2gM3hMQKZ6ysPVcv8nV_RQ5rzjdWiK2BgrS9_cBQufDRG8wf4AVbVv3bdfP3vZlbcIpvLcKXIQU_rzf4YHOSSFFuHsPgyVsyL8Y1Enr9IR8JDCJX02YDgyTJ0ckfhZSTZDss8M8f5kbc3wTtPreaqV4m-GQF07wyQTJxACVLplmLzQV61xiy4utM1Geq-lQvlY9Gf2xNwUWd4EphU" 
        caption="Nature vibes 🌿" 
        rotation="rotate-3"
      />
      <MemoryCard 
        src="https://lh3.googleusercontent.com/aida/ADBb0uibxx3wFhk9YFhN3BsgcP00Jh3t4Ec542Yey0xzx3WZB2RrOp20KsgKhMlfgLB8vAhXkcuoo6Gg_XvLwqkktLbAOroRbmsuDTUKqKzNqhMSIieEaGL83FDOGF785b9Uy_ypMkDzgLbI2Upw7AVQUmf2GCdb4NUhWXXwGqK7YbyVpDwPPqYILf2-0rkAcsD1BqDRsQM9445rIj0PjH7B5YOk60uyhoYGthSl6qeXO8jmPTCp7LE-_dXyVg-kb-mqH-58Qp9fGk1GYDA" 
        caption="Garba nights! ✨" 
        rotation="-rotate-1"
      />
      <MemoryCard 
        src="https://lh3.googleusercontent.com/aida/ADBb0ujz6__IDavVK2JOfUfm0K6aJb-p6u7zsF8y567ZyB_UyiPk45iibEXb1X8lgaykDaVyC6ysd2SM2zY_ZiQSBnhULEtkXyQ9V68Xi6oQTkDrrpUf1jEFm-1KVKhs8J5dE7unl8_rAb5MVl3VLm7AQ7l2j4vIzP6DrpX75-VLgP5KgJA71MmZJME-F37eTwA8Y2cf0Y0NNPZme7Sw3eRlcc3jYWxaY-Fs0M4zizbgrq259n1ViLS6-3WoibIdJlTNP9uF8ZFeS1PuXso" 
        caption="Marine Drive 🌊" 
        rotation="rotate-2"
      />
      <MemoryCard 
        src="https://lh3.googleusercontent.com/aida/ADBb0uj5x0cs-lgs-vyTwktM8ZLof_dh1ZqdXtkOzH-Q-wTOBY6RQMSoAD2am9YXjtfEpu23iIFjwYflIMfevbCgdMw9sbcBUtdSlKjh7jq_pMBiWef5dXX9uj_ZjqYEj5woMOkWdm8ZpmVbEt1UfYMKiseLFfHiE9KWE-IP2j0SiZbgKoJhF6YX1Vh1CsghcpJtor2YciQCtvfrZC0iht07A7rzyJ-K_Tt6uVeruiBM4BjdTjyn-cZdkRtdB38AY3GWWVI_Rw3mwtiH86s" 
        caption="Sleepyhead 😴" 
        rotation="-rotate-2"
      />
    </div>
  </section>
);

const FloatingBubble = ({ text, top, left, color, delay }: any) => (
  <motion.div 
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute ${top} ${left} bg-white/60 backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-xs font-bold ${color} border border-current/10 pointer-events-none z-20`}
  >
    {text}
  </motion.div>
);

const Footer = () => (
  <footer className="pb-32 pt-12 text-center space-y-6">
    <div className="flex justify-center gap-4">
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1 }}>❤️</motion.div>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>✨</motion.div>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>💖</motion.div>
    </div>
    <p className="font-headline text-lg italic text-on-surface-variant">Made with love for didi</p>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-outline uppercase tracking-widest text-[10px] font-bold hover:text-primary transition-colors flex items-center gap-2 mx-auto"
    >
      <RotateCcw className="w-3 h-3" /> Replay the Magic
    </button>
  </footer>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center pb-safe bg-primary-container/60 backdrop-blur-2xl rounded-full mb-6 mx-auto w-[90%] max-w-md ring-1 ring-secondary/20 shadow-[0px_20px_40px_rgba(29,27,27,0.06)]">
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-gradient-to-br from-primary to-primary-container text-white rounded-full p-4 scale-110 shadow-lg animate-pulse"
    >
      <Sparkles className="w-6 h-6" />
    </button>
    <button className="text-primary p-4 opacity-70 hover:scale-105 transition-all">
      <Heart className="w-6 h-6" />
    </button>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="text-primary p-4 opacity-70 hover:scale-105 transition-all"
    >
      <RotateCcw className="w-6 h-6" />
    </button>
  </nav>
);

// --- Main App ---

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body">
      <AnimatePresence>
        {!isOpen && <EntryGate onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && (
        <motion.main 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pt-24 pb-32 px-6 max-w-lg mx-auto space-y-24"
        >
          <Header />
          
          <Hero />

          <MessageSection />

          <MemoriesCarousel />

          {/* Floating Popups */}
          <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
            <FloatingBubble text="Stop being lazy 😤" top="top-[20%]" left="right-[5%]" color="text-primary" delay={0} />
            <FloatingBubble text="Take more photos 📸" top="top-[60%]" left="left-[2%]" color="text-secondary" delay={-2} />
            <FloatingBubble text="No more crying 😭❌" top="bottom-[20%]" left="right-[10%]" color="text-error" delay={-4} />
          </div>

          <Footer />

          <BottomNav />
        </motion.main>
      )}
    </div>
  );
}
