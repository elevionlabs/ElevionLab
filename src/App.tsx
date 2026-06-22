/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Workflow, 
  Cpu, 
  Layers, 
  Phone, 
  Mail, 
  Instagram, 
  CheckCircle2,
  Quote,
  Eye,
  Rocket,
  Zap,
  ShieldCheck,
  Code,
  Film,
  PenTool
} from 'lucide-react';
import { useState, useRef, FormEvent } from 'react';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass mt-4 mx-4 md:mx-12 rounded-full"
    >
      <div className="flex items-center">
        <div className="text-xl font-black tracking-tighter font-sans">
          ELEVION<span className="text-[#f59e0b]">LABS</span>
        </div>
      </div>
      
      <div className="hidden space-x-8 text-xs font-medium tracking-widest uppercase md:flex text-zinc-500">
        <a href="#services" className="transition-colors hover:text-white">Soluções</a>
        <a href="#about" className="transition-colors hover:text-white">DNA</a>
        <a href="#process" className="transition-colors hover:text-white">Método</a>
        <a href="#marketing" className="transition-colors hover:text-white">Marketing</a>
        <a href="#results" className="transition-colors hover:text-white">Resultados</a>
      </div>

      <a 
        href="https://wa.me/5511978724985" 
        target="_blank" 
        rel="noreferrer"
        className="px-5 py-2 text-[11px] font-bold tracking-widest uppercase transition-all bg-white rounded-full text-black hover:bg-zinc-200"
      >
        Falar com Consultor
      </a>
    </motion.nav>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 bg-[#000000]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Atmospheric Global Vision" 
          className="object-cover w-full h-full opacity-50 scale-110"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start text-left pt-20">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="pill mb-8 tracking-[0.5em] uppercase text-eagle-glow animate-pulse">
            Visão Absoluta
          </div>
          <h1 className="mb-8 text-5xl font-bold tracking-tighter md:text-7xl lg:text-9xl font-display text-gradient leading-[0.9] text-eagle-glow">
            Onde Comuns veem o <br /> Presente, Nós <br /> Dominamos o Futuro.
          </h1>
          <p className="max-w-xl mb-12 text-sm leading-relaxed md:text-lg text-zinc-400 font-light tracking-wide border-l border-[#f59e0b]/30 pl-6">
            Na <span className="text-white font-medium">Elevion Labs</span>, aplicamos a precisão do voo estratégico e a inteligência absoluta para elevar seu negócio a patamares onde outros apenas ousam olhar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-6">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-12 py-6 text-[12px] font-bold tracking-[0.3em] uppercase bg-white text-black rounded-full transition-all"
            >
              Iniciar Ascensão
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a 
              href="#marketing"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 text-[12px] font-bold tracking-[0.3em] uppercase border border-white/10 text-white rounded-full transition-all backdrop-blur-sm bg-black/20"
            >
              Expansão & Marketing
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern Decor */}
      <div className="absolute inset-0 z-[1] opacity-5 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      {/* Horizon Line Decor */}
      <div className="absolute bottom-20 left-0 w-full horizon-line opacity-20" />
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-16 overflow-hidden border-t border-b border-white/5 bg-zinc-950/30">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-32 px-16">
            <span className="text-2xl font-bold tracking-[0.6em] uppercase text-zinc-800">Evolução Contínua</span>
            <span className="text-2xl font-bold tracking-[0.6em] uppercase text-white/20">Domínio Digital</span>
            <span className="text-2xl font-bold tracking-[0.6em] uppercase text-zinc-800">Inteligência Aplicada</span>
            <span className="text-2xl font-bold tracking-[0.6em] uppercase text-white/20">Crescimento Estratégico</span>
            <span className="text-2xl font-bold tracking-[0.6em] uppercase text-zinc-800">Tecnologia com Precisão</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const EaglePhilosophy = () => {
  const qualities = [
    { label: "Visão Absoluta", value: "Enxergamos oportunidades muito antes do óbvio.", icon: "01" },
    { label: "Precisão de Ataque", value: "Decisões cirúrgicas em ambientes de alta pressão.", icon: "02" },
    { label: "Força Adaptativa", value: "Resiliência absoluta para enfrentar mudanças de mercado.", icon: "03" },
    { label: "Liberdade Radical", value: "Autonomia total para inovar sem amarras clichês.", icon: "04" },
  ];

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f59e0b]/5 blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <span className="pill mb-6 uppercase tracking-[0.4em] text-[9px] font-bold">DNA de Soberania</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter">
              O Instinto que <br /> Move o Mercado.
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed mb-12 font-light">
              Na Elevion Labs, não seguimos tendências—nós as criamos do alto. Nossa essência é forjada na visão estratégica e na capacidade de adaptação constante.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {qualities.map((q, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="text-3xl font-display font-bold text-[#f59e0b]/20 group-hover:text-[#f59e0b]/60 transition-colors">{q.icon}</div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em]">{q.label}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">{q.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
             <div className="aspect-[4/5] glass rounded-[4rem] overflow-hidden relative border-white/5 group-hover:border-white/20 transition-all duration-700">
                <img 
                  src="https://lh3.googleusercontent.com/d/19fIvOpIb8CfjsuGyEr-EHUnmo8CGc9oh" 
                  alt="Elevion Strategic Asset" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-12">
                   <div className="w-12 h-1 gap-2 flex mb-8">
                     <div className="w-8 h-full bg-[#f59e0b]" />
                     <div className="w-2 h-full bg-white/20" />
                   </div>
                   <p className="text-3xl md:text-4xl font-display italic font-light leading-snug text-eagle-glow">
                     "Empresas comuns enxergam o presente. Nós dominamos o futuro."
                   </p>
                </div>
             </div>
             {/* Abstract Lines */}
             <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#f59e0b]/20 rounded-br-[4rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutDNA = () => {
  const values = [
    { 
      title: "Nosso Propósito", 
      text: "Elevar empresas a um novo nível através da tecnologia de ponta.", 
      icon: <Rocket className="w-6 h-6 text-[#f59e0b]" />,
      label: "Impulso" 
    },
    { 
      title: "Nossa Missão", 
      text: "Desenvolver soluções digitais modernas que impulsionem performance e crescimento real.", 
      icon: <Target className="w-6 h-6 text-[#f59e0b]" />,
      label: "Foco" 
    },
    { 
      title: "Nossa Visão", 
      text: "Ser a maior referência em inovação tecnológica e IA no mercado global.", 
      icon: <Eye className="w-6 h-6 text-[#f59e0b]" />,
      label: "Alcance" 
    },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#000000] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#f59e0b] mb-6 block">O DNA Elevion Labs</span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-6xl font-display mb-8 text-white leading-tight">
              Inspirados pela Visão, <br /> Movidos pela Tecnologia.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Na Elevion Labs, pensamos e agimos como uma águia. Nossa cultura é baseada na precisão das decisões, na agilidade da execução e na excelência constante. Não entregamos apenas código; entregamos poder estratégico e escalabilidade.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl glass space-y-2">
                <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />
                <h4 className="font-bold text-xs uppercase tracking-widest">Excelência</h4>
                <p className="text-[11px] text-zinc-500">Compromisso inegociável com a qualidade de cada pixel.</p>
              </div>
              <div className="p-4 rounded-2xl glass space-y-2">
                <Zap className="w-5 h-5 text-[#f59e0b]" />
                <h4 className="font-bold text-xs uppercase tracking-widest">Agilidade</h4>
                <p className="text-[11px] text-zinc-500">Decisões rápidas para um mercado que não espera.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 rounded-[2rem] glass flex gap-6 items-center hover:bg-white/[0.05] transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <div>
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-zinc-500">{v.label}</span>
                  <h3 className="text-xl font-bold font-display mb-1">{v.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { 
      title: "Websites de Elite", 
      desc: "Landing pages e plataformas web de alta performance com design cinematográfico e técnica impecável.", 
      icon: <Layers className="w-8 h-8" />,
      features: ["SEO Avançado", "Mobile First", "Design 100% Autoral"]
    },
    { 
      title: "Aplicativos Scaláveis", 
      desc: "Desenvolvimento de apps robustos e fluidos para iOS e Android, focados em UX e retenção de usuários.", 
      icon: <Code className="w-8 h-8" />,
      features: ["Flutter/React Native", "Integrações APIs", "Back-end Robusto"]
    },
    { 
      title: "Inteligência Artificial", 
      desc: "Soluções personalizadas de IA para automatizar processos, análise de dados e atendimento inteligente.", 
      icon: <Cpu className="w-8 h-8" />,
      features: ["LLMs Customizadas", "Chatbots de Elite", "Análise Preditiva"]
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="pill mb-6 uppercase">O que construímos</span>
          <h2 className="text-4xl font-bold tracking-tighter md:text-7xl font-display mb-6">Nossas Verticais de Impacto</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-sm md:text-base">
            Soluções digitais modernas e eficientes que impulsionem o crescimento e a performance dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] glass border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/10 flex items-center justify-center mb-8 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">{service.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="space-y-3">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-zinc-500">
                    <CheckCircle2 className="w-3 h-3 text-[#f59e0b]" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoGrid = () => {
  return (
    <section id="dna" className="py-32 px-6 md:px-12 bg-[#000000] relative">
      <div className="absolute top-0 w-full horizon-line opacity-10" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="pill mb-4 uppercase tracking-widest text-[9px]">DNA ESTRATÉGICO</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-6xl font-display mb-4">
            Domínio Digital Absoluto
          </h2>
          <p className="text-zinc-500 max-w-xl text-sm uppercase tracking-[0.3em] font-light">
            Onde a inteligência superior encontra a execução implacável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[300px]">
          {/* Vision Card */}
          <motion.div 
            whileHover={{ scale: 0.99, borderColor: "#f59e0b" }}
            className="md:col-span-2 md:row-span-2 glass rounded-[2.5rem] p-12 flex flex-col justify-end relative overflow-hidden group border-white/5 transition-colors"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye className="w-64 h-64 text-white" />
            </div>
            <div className="w-20 h-20 mb-10 bg-[#f59e0b] rounded-[2rem] flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,0.3)]">
              <Sparkles className="w-10 h-10 text-black" />
            </div>
            <h3 className="text-4xl font-bold mb-6 font-display text-eagle-glow">Visão de Topo</h3>
            <p className="text-zinc-400 text-base leading-relaxed max-w-sm font-light">
              Não nos limitamos ao que o mercado dita. Construímos ecossistemas que antecipam o futuro e garantem que sua empresa voe acima da concorrência comum.
            </p>
          </motion.div>

          {/* AI Synergy */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-2 glass rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-black"
          >
            <div className="flex justify-between items-start">
              <div className="pill uppercase tracking-[0.2em] text-[10px]">Inteligência Aplicada</div>
              <Cpu className="w-8 h-8 text-[#f59e0b] animate-pulse" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 font-display">A Mente Digital</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                Utilizamos IA não como um acessório, mas como a espinha dorsal de soluções que aprendem, evoluem e escalam seu ROI automaticamente.
              </p>
            </div>
          </motion.div>

          {/* ROI Focus */}
          <motion.div 
            whileHover={{ scale: 0.99, backgroundColor: "#f59e0b" }}
            className="md:col-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between transition-all group"
          >
            <Target className="w-10 h-10 text-[#f59e0b] group-hover:text-black transition-colors" />
            <div>
              <h3 className="text-xl font-bold mb-1 font-display group-hover:text-black">Direção de Alvo</h3>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest group-hover:text-black/60">Precisão de Voo</p>
            </div>
          </motion.div>

          {/* Evolution Card */}
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-1 glass rounded-[2.5rem] p-8 flex flex-col justify-between bg-zinc-900/50 border-none relative overflow-hidden"
          >
            <Zap className="w-10 h-10 text-white/20 absolute -top-2 -right-2 rotate-12" />
            <Workflow className="w-8 h-8 text-[#f59e0b]" />
            <div>
              <h3 className="text-lg font-bold mb-1 font-display uppercase tracking-tighter">Voo Contínuo</h3>
              <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Evolução Incansável</p>
            </div>
          </motion.div>

          {/* Atmosphere Image */}
          <motion.div 
            className="md:col-span-4 glass rounded-[2.5rem] overflow-hidden relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              alt="Futuristic Tech" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-50"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
              <h4 className="text-3xl font-display font-bold mb-3 text-white">Soberania Tecnológica</h4>
              <p className="text-[#f59e0b] text-[11px] tracking-[0.4em] uppercase font-bold">Altitude de Liderança</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessSteps = () => {
  const steps = [
    { title: "Mapeamento Atmosférico", desc: "Analisamos o cenário atual e identificamos rotas de crescimento antes invisíveis." },
    { title: "Arquitetura de Voo", desc: "Desenhamos ecossistemas robustos que garantem estabilidade e poder de manobra." },
    { title: "Ignição Tecnológica", desc: "Desenvolvimento de alta precisão com integração profunda de inteligência artificial." },
    { title: "Domínio de Cruzeiro", desc: "Monitoramento constante em altitude para garantir que a liderança seja mantida." },
  ];

  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-zinc-950/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="flex-1">
            <span className="pill mb-6 uppercase tracking-[0.3em] font-bold">Metodologia Elevion</span>
            <h2 className="text-4xl font-bold tracking-tighter md:text-8xl font-display text-eagle-glow">A Rota do Sucesso</h2>
          </div>
          <div className="flex-1 lg:pl-16 flex flex-col md:flex-row items-center gap-12 group">
            <div className="relative shrink-0">
              <div className="w-56 h-56 rounded-[3rem] overflow-hidden glass border border-[#f59e0b]/20 shadow-[0_0_50px_rgba(245,158,11,0.15)] transition-all duration-700 group-hover:border-[#f59e0b]/50 group-hover:shadow-[0_0_80px_rgba(245,158,11,0.25)]">
                <img 
                  src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&q=80&w=800" 
                  alt="Visão de Águia" 
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 rounded-[3rem] border border-white/5 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-[#f59e0b] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-[#f59e0b] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-100" />
            </div>
            <div className="space-y-6 pt-4 md:pt-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#f59e0b] to-transparent" />
                <span className="text-[11px] uppercase tracking-[0.6em] font-black text-[#f59e0b]">Doutrina Estratégica</span>
              </div>
              <div className="relative">
                <Quote className="absolute -top-8 -left-4 w-12 h-12 text-white/5 -z-10" />
                <p className="text-zinc-200 text-3xl md:text-5xl font-display font-light leading-[1.1] italic max-w-lg">
                  "A precisão não é uma opção, é a nossa <br />
                  <span className="text-white font-bold not-italic relative">
                    natureza fundamental
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#f59e0b]/50" />
                  </span>."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[60px] left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 group"
            >
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center font-display text-2xl font-bold mb-10 group-hover:scale-110 group-hover:bg-[#f59e0b] group-hover:text-black transition-all border-[#f59e0b]/20 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display group-hover:text-[#f59e0b] transition-colors">{step.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const companyPhone = '5511978724985';

  const handleWhatsAppSend = (e: FormEvent) => {
    e.preventDefault();
    const fullMessage = `Olá! Meu telefone é: ${phone}%0A%0A${message}`;
    const whatsappUrl = `https://wa.me/${companyPhone}?text=${fullMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f59e0b]/5 blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <span className="pill uppercase tracking-[0.4em] text-[10px] font-bold">Inicie sua Jornada</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white leading-tight">
              Pronto para <br /> <span className="text-eagle-glow">Dominar</span> os Ares?
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
              Entre em contato agora e descubra como a Elevion Labs pode elevar seu negócio através da inteligência estratégica.
            </p>
          </div>

          <div className="flex items-center group">
            <img 
              src="https://lh3.googleusercontent.com/d/1TEavtJ9NSeV_rS3k_05Q_H_sjmIZ4rhJ" 
              alt="Elevion Strategic Vision" 
              className="h-64 md:h-96 w-full object-cover rounded-[3.5rem] transition-transform group-hover:scale-105 border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-12 rounded-[3.5rem] border-white/10"
          >
            <form onSubmit={handleWhatsAppSend} className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-4">Seu Telefone</label>
                <input 
                  type="text" 
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#f59e0b]/50 transition-colors"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 ml-4">Mensagem Estratégica</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos elevar seu negócio?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#f59e0b]/50 transition-colors resize-none"
                  required
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(245, 158, 11, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-6 rounded-3xl bg-white text-black font-bold uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3"
              >
                Enviar via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest font-medium">
                Resposta média em menos de 15 minutos.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  const testimonials = [
    {
      text: "A Elevion Labs não apenas criou um site, eles construíram a base do nosso crescimento digital. A integração de IA no atendimento mudou nosso jogo totalmente.",
      author: "Leonardo José",
      role: "CEO e FUNDADOR"
    },
    {
      text: "O domínio técnico da equipe em IA e Automação superou nossas expectativas. Hoje, operamos com 40% mais eficiência graças à arquitetura proposta.",
      author: "Leonardo José",
      role: "CEO e FUNDADOR"
    },
    {
      text: "Nossa presença digital agora reflete a autoridade que temos no mercado físico. A precisão estratégica da Elevion é, de fato, sua natureza fundamental.",
      author: "Leonardo José",
      role: "CEO e FUNDADOR"
    }
  ];

  return (
    <section id="results" className="py-32 px-6 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Vozes da Liderança</h2>
          <p className="text-zinc-500 uppercase text-[10px] tracking-[0.3em]">Testemunhos de quem já alcançou novas altitudes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] relative group"
            >
              <Quote className="w-10 h-10 text-[#f59e0b]/5 absolute top-10 left-10 group-hover:text-[#f59e0b]/10 transition-colors" />
              <div className="relative z-10">
                <p className="text-zinc-300 italic mb-10 leading-relaxed text-sm md:text-base">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                  <div className="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black" />
                  </div>
                  <div>
                    <div className="font-bold text-xs uppercase tracking-widest text-[#f59e0b]">{t.author}</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MarketingDoctrine = () => {
  const pillars = [
    {
      icon: <Layers className="w-10 h-10 text-[#f59e0b]" />,
      tag: "Presença Estética",
      title: "Criação de Posts",
      phrase: "Onde o design cede espaço à arquitetura visual.",
      desc: "Não fazemos apenas posts; estruturamos portais de relevância digital. Cada elemento visual é projetado sob teorias estéticas de vanguarda, garantindo parada instantânea do feed e autoridade inapelável de marca.",
      features: ["Direção artística sob medida", "Geometria visual de alta fidelidade", "Identidade imersiva e consistente"]
    },
    {
      icon: <Film className="w-10 h-10 text-[#f59e0b]" />,
      tag: "Retórica Dinâmica",
      title: "Edição de Vídeo",
      phrase: "A exatidão milimétrica que dita o novo ritmo digital.",
      desc: "Transformamos cortes brutos de gravação em obras envolventes e hipnóticas de alto engajamento. Cada mudança de cena e efeito sonoro é posicionado intencionalmente para assegurar retenções extremas.",
      features: ["Ganchos dramáticos instantâneos", "Dinâmica e sound design cirúrgico", "Estilo voltado ao consumo orgânico"]
    },
    {
      icon: <PenTool className="w-10 h-10 text-[#f59e0b]" />,
      tag: "Arqueologia Ideológica",
      title: "Roteiro Profissional",
      phrase: "O domínio verbal é a base de todo o império digital.",
      desc: "Escrevemos roteiros sob rigorosa psicologia humana e engenharia de persuasão. Textos desenhados para capturar a atenção de líderes do mercado e conduzi-los organicamente à conversão e ao desejo puro.",
      features: ["Arquitetura de storytelling refinada", "Ganchos psicológicos validados", "Metáforas e retórica magnéticas"]
    }
  ];

  return (
    <section id="marketing" className="py-32 px-6 bg-[#000000] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#f59e0b]/5 blur-[150px] -z-10" />
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="flex-1">
            <span className="pill mb-6 uppercase tracking-[0.4em] text-[10px] font-bold text-[#f59e0b]">Marketing de Altíssima Altitude</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-tight">
              A Arte de <br />
              <span className="text-eagle-glow">Sobrevoar</span> a Média
            </h2>
          </div>
          <div className="flex-1 md:pl-12">
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xl">
              Nossa abordagem comunicativa recusa caminhos triviais ou barulho vazio. Criamos artefatos de impacto intelectual — onde design, ritmo visual e retórica estratégica agem integrados, consolidando hegemonias digitais absolutas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="glass p-10 rounded-[3rem] relative group border border-white/5 hover:border-[#f59e0b]/30 transition-all duration-500 flex flex-col justify-between bg-zinc-950/20"
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-3xl bg-white/5 border border-white/5 group-hover:border-[#f59e0b]/30 transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 group-hover:text-[#f59e0b] transition-colors">{p.tag}</span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-zinc-400 italic text-sm font-light font-display">"{p.phrase}"</p>
                  <p className="text-zinc-500 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </div>

              <div className="border-t border-white/5 pt-8 mt-8 space-y-4">
                {p.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#f59e0b]" />
                    <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer-wrap">
      {/* Stats Bar */}
      <div className="bg-[#050505] border-t border-white/10 px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
            <div className="flex-1 min-w-[200px]">
              <div className="text-4xl font-bold font-display">150+</div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2">Soluções Implementadas</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-4xl font-bold font-display">98%</div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2">Taxa de Conversão Mantida</div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-4xl font-bold font-display text-[#f59e0b]">GLOBAL</div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2">Presença Internacional</div>
            </div>
            <div className="hidden lg:block h-16 w-px bg-white/10" />
            <div className="text-right">
              <div className="text-xl font-bold mb-2">+55 11 97872-4985</div>
              <div className="text-sm text-zinc-500">elevion.lab@gmail.com</div>
              <div className="text-[10px] text-[#f59e0b] font-bold uppercase tracking-widest mt-2">São Paulo, BR</div>
            </div>
        </div>
      </div>

      <div className="py-16 px-6 border-t border-white/5 bg-[#000000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3 group">
            <img 
              src="https://lh3.googleusercontent.com/d/1bMMvDDgawKtoQZPnGMpjbt4a4NyfND_6" 
              alt="Elevion Lab Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:rotate-12"
              referrerPolicy="no-referrer"
            />
            <div className="text-xl font-extrabold tracking-tighter font-display uppercase">
              ELEVION<span className="text-[#f59e0b]">LABS</span>
            </div>
          </div>

          <div className="flex gap-10">
            <a href="mailto:elevion.lab@gmail.com" className="text-zinc-500 hover:text-[#f59e0b] transition-all transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/5511978724985" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-green-500 transition-all transform hover:scale-110">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/elevionlab" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-pink-500 transition-all transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          <div className="text-[11px] text-zinc-600 uppercase tracking-[0.3em] font-medium text-center md:text-right">
            Designed for Excellence. <br /> 
            <span className="text-zinc-800">Copyright © 2026 Elevion Labs.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#f59e0b] selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <EaglePhilosophy />
      <AboutDNA />
      <Services />
      <BentoGrid />
      <ProcessSteps />
      <Testimonials />
      <MarketingDoctrine />
      <ContactSection />
      <Footer />
    </div>
  );
}
