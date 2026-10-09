"use client";

import { ArrowDown, ArrowUpRight, Github, HeartPulse, Linkedin, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, WordReveal } from "./motion";

const links = {
  github: "https://github.com/brinelso",
  linkedin: "https://linkedin.com/in/joão-gabriel-vaz",
  email: "mailto:jgvaz4059@gmail.com",
};

const projects = [
  {
    number: "01", name: "SciTec Jr.", type: "NEGÓCIOS · TECNOLOGIA · DADOS", image: "https://raw.githubusercontent.com/Lauand49/Sistema-de-controle-interno/main/public/brand/scitec-logo.png",
    description: "Atuação nos departamentos de Tecnologia e Software e Dados e Inteligência, conectando necessidades de clientes a soluções em equipe.",
    stack: ["Consultoria", "Software", "Dados"], art: "scitec",
  },
  {
    number: "02", name: "Bit-AI", type: "SAAS · PROJETO DE TCC", image: "https://raw.githubusercontent.com/pedrohkf/BIT-AI/main/front-end/src/public/icons/bit-logo.png",
    description: "Plataforma full stack de geração de conteúdo com IA, autenticação de usuários e estrutura de dados relacional.",
    stack: ["React", "Node.js", "MySQL", "Firebase"], art: "bitai",
  },
  {
    number: "03", name: "Portal SUS", type: "HACKATHON · PROTOTIPAÇÃO",
    description: "Aplicação React para acesso a serviços de saúde. Protótipo pensado para navegação simples e demonstração confiável.",
    stack: ["React", "UX", "Prototipação"], art: "sus",
  },
  {
    number: "04", name: "Voidware", type: "E-COMMERCE · PROGRAMA TRAINEE", image: "https://raw.githubusercontent.com/guvmancilha-debug/Site_treinamento_Scitec/main/public/imagens/logo.png",
    description: "Loja virtual de periféricos integrada a API REST, com catálogo por categorias e carrinho persistido no navegador.",
    stack: ["HTML5", "JavaScript", "Express.js", "REST API"], art: "voidware",
  },
];

const skills = ["Java", "Spring Boot", "Python", "React", "TypeScript", "Node.js", "MySQL", "MongoDB", "C/C++", "Firebase", "Pandas", "Linux", "Git"];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return <div className="mb-10 flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-[#898680]"><span className="text-[#ec3b2e]">{index}</span><span className="h-px w-8 bg-white/20" />{children}</div>;
}

function Header() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full px-5 py-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a className="focus-ring text-xs font-bold tracking-[.12em]" href="#inicio" aria-label="João Gabriel Vaz, início">JGV<span className="text-[#ec3b2e]">.</span></a>
        <nav aria-label="Navegação principal" className="flex items-center gap-5 text-[10px] uppercase tracking-[.15em] text-[#b3b0aa] sm:gap-9">
          <a className="red-link focus-ring" href="#sobre">Sobre</a><a className="red-link focus-ring" href="#projetos">Projetos</a><a className="red-link focus-ring" href="#contato">Contato</a>
        </nav>
        <span className="hidden text-[10px] uppercase tracking-[.16em] text-[#898680] md:block">São José dos Campos, BR</span>
      </div>
    </header>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="inicio" className="grain relative flex min-h-[790px] flex-col justify-end overflow-hidden px-5 pb-10 pt-28 sm:min-h-[900px] sm:px-10 sm:pb-14 lg:min-h-[min(100svh,1100px)] lg:px-16">
      <Header />
      <div className="pointer-events-none absolute right-[8%] top-[25%] h-[22vw] w-[22vw] max-w-[340px] rounded-full border border-white/[.09]" aria-hidden="true">
        <motion.div className="absolute -right-2 top-[22%] h-3 w-3 rounded-full bg-[#ec3b2e]" animate={reduce ? undefined : { scale: [1, 1.35, 1], opacity: [1, .65, 1] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[.2em] text-[#aaa69f] sm:mb-8"><span className="h-1.5 w-1.5 rounded-full bg-[#ec3b2e]" />Portfólio · 2026</div>
        <h1 className="display max-w-[1500px] pr-4 text-[clamp(3.2rem,15.2vw,15rem)] leading-[.85] tracking-[-.075em] sm:pr-8">
          <WordReveal words={["JOÃO", "GABRIEL"]} className="block" /><WordReveal words={["VAZ"]} className="block text-[#ec3b2e]" />
        </h1>
        <div className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:items-end lg:grid-cols-12">
          <p className="max-w-md text-sm leading-7 text-[#b3b0aa] sm:col-span-1 lg:col-span-4">Desenvolvedor Full Stack, Dados e estudante de Ciência da Computação.</p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4 text-[11px] uppercase tracking-[.12em] sm:justify-self-end lg:col-span-4 lg:col-start-9">
            <a className="red-link focus-ring inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#ec3b2e]" href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
            <a className="red-link focus-ring inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#ec3b2e]" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
            <a className="red-link focus-ring inline-flex items-center gap-2 border border-white/25 px-4 py-3 transition-colors duration-300 hover:border-[#ec3b2e] hover:text-[#ec3b2e]" href="/curriculo.pdf" download>Currículo <ArrowDown size={13} /></a>
          </div>
        </div>
        <a className="red-link focus-ring mt-14 inline-flex items-center gap-3 text-[10px] uppercase tracking-[.16em] text-[#898680] sm:mt-20" href="#sobre"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"><ArrowDown size={13} /></span>Role para explorar</a>
      </div>
      <span className="absolute right-5 top-1/2 hidden -rotate-90 text-[9px] uppercase tracking-[.22em] text-[#77736e] xl:block">Full Stack · Dados · Sistemas</span>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="border-t border-white/10 px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal delay={0.08} className="order-1 lg:col-span-4">
          <SectionLabel index="01">Sobre mim</SectionLabel>
          <div className="group relative mx-auto mt-8 max-w-[380px] lg:mx-0 lg:mt-12">
            <div className="absolute -right-2 -top-2 h-14 w-14 border-r border-t border-[#ec3b2e] transition-all duration-500 group-hover:-right-3 group-hover:-top-3" aria-hidden="true" />
            <div className="aspect-[4/5] overflow-hidden bg-[#171716]">
              <img src="/eu.jpeg" alt="João Gabriel Vaz" className="h-full w-full object-cover object-[center_42%] grayscale brightness-110 contrast-110 transition-[filter,transform] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" />
            </div>
            <div className="absolute -bottom-2 -left-2 h-14 w-14 border-b border-l border-[#ec3b2e] transition-all duration-500 group-hover:-bottom-3 group-hover:-left-3" aria-hidden="true" />
            <p className="mt-4 text-[9px] uppercase tracking-[.18em] text-[#aaa69f]">João Gabriel Vaz · São José dos Campos</p>
          </div>
          <p className="mt-9 max-w-xs text-xs leading-6 text-[#aaa69f]">Curioso por tecnologia e interessado em transformar boas ideias em produtos que funcionam.</p>
        </Reveal>

        <Reveal delay={0.16} className="order-2 lg:col-span-7 lg:col-start-6">
          <p className="text-[clamp(1.55rem,3.1vw,3.1rem)] font-medium leading-[1.22] tracking-[-.045em] text-[#e8e5df]">Estudante de Ciência da Computação na <span className="text-white">UNIFESP</span> e Técnico em Desenvolvimento de Sistemas. Experiência em projetos Full Stack, com foco em back-end e ecossistema JavaScript. <span className="text-[#aaa69f]">Responsável e focado em soluções escaláveis.</span></p>

          <div className="mt-12 border-t border-zinc-800 py-7 sm:mt-16 sm:py-9">
            <div className="mb-5 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[.18em] text-[#aaa69f]"><span>Formação acadêmica</span><span>Conclusão prevista · 2029</span></div>
            <h3 className="text-[clamp(1.8rem,3vw,3rem)] font-medium leading-tight tracking-[-.05em] text-[#f4f1ec]">Ciência da Computação</h3>
            <p className="mt-4 text-2xl font-semibold tracking-[.08em] text-[#ec3b2e] sm:text-3xl">UNIFESP</p>
            <p className="mt-1 text-sm font-medium text-[#e8e5df] sm:text-base">Universidade Federal de São Paulo</p>
          </div>

          <div className="grid border-t border-zinc-800 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8">
            <div><span className="text-[10px] uppercase tracking-[.18em] text-[#aaa69f]">Base técnica</span><p className="mt-2 text-lg font-medium tracking-[-.02em] text-[#f4f1ec]">Técnico em Desenvolvimento de Sistemas</p></div>
            <p className="mt-2 text-sm text-[#c4c0b9] sm:mt-0">ETEC Pindamonhangaba <span className="text-[#aaa69f]">· 2023—2025</span></p>
          </div>

          <div className="border-t border-zinc-800 py-6">
            <span className="text-[10px] uppercase tracking-[.18em] text-[#aaa69f]">Idiomas</span>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6">
              <p className="text-sm font-medium text-[#f4f1ec] sm:text-base">PORTUGUÊS <span className="text-[#aaa69f]">— Nativo</span></p>
              <p className="text-sm font-medium text-[#f4f1ec] sm:text-base">INGLÊS <span className="text-[#aaa69f]">— Intermediário</span></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  const reduce = useReducedMotion();
  return (
    <section className="overflow-hidden border-y border-white/10 py-8 sm:py-10" aria-label="Competências técnicas">
      <div className="mb-6 px-5 text-[9px] uppercase tracking-[.2em] text-[#898680] sm:px-10 lg:px-16">Ferramentas que uso</div>
      <div className="relative flex overflow-hidden">
        <motion.div className="flex min-w-max items-center" animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }}>
          {[...skills, ...skills].map((skill, i) => <span key={`${skill}-${i}`} className="flex items-center gap-8 px-5 text-xl font-medium tracking-[-.04em] text-[#dedbd5] sm:px-8 sm:text-2xl">{skill}<i className="h-1.5 w-1.5 rounded-full bg-[#ec3b2e]" /></span>)}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectArtwork({ kind, name, image }: { kind: string; name: string; image?: string }) {
  return (
    <div className={`project-art grain relative flex aspect-[1.23/1] items-center justify-center overflow-hidden bg-[#141413] ${kind}`} aria-hidden="true">
      {image ? <img src={image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" className="h-[42%] w-[70%] transform-gpu object-contain grayscale brightness-0 invert opacity-80 transition-transform transition-opacity duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100" /> : <div className="flex h-[42%] w-[70%] items-center justify-center border border-white/15 bg-[#1b1b1a]"><HeartPulse className="h-20 w-20 text-[#ec3b2e] transition-transform duration-700 ease-in-out group-hover:scale-105" strokeWidth={1.2} /></div>}
      <span className="absolute right-5 top-5 text-[9px] uppercase tracking-[.18em] text-[#aaa69f]">{kind === "scitec" ? "01 — STUDIO" : kind === "bitai" ? "02 — AI" : kind === "sus" ? "03 — SUS" : "04 — E-COM"}</span>
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 grid gap-6 sm:mb-20 sm:grid-cols-2 sm:items-end"><Reveal><SectionLabel index="02">Projetos selecionados</SectionLabel></Reveal><Reveal delay={0.08}><p className="max-w-sm text-sm leading-6 text-[#898680] sm:justify-self-end">Projetos de estudo, hackathons e experiências que me aproximam de produtos melhores.</p></Reveal></div>
        <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-20 lg:gap-x-10">
          {projects.map((project, index) => <Reveal key={project.name} delay={(index % 2) * 0.1} className={index % 2 === 1 ? "sm:mt-24" : ""}>
            <a className="project-card focus-ring group block" href={links.github} target="_blank" rel="noreferrer" aria-label={`${project.name}, ver no GitHub`}>
              <ProjectArtwork kind={project.art} name={project.name} image={project.image} />
              <div className="mt-5 flex items-start justify-between gap-4"><div><div className="mb-2 text-[9px] uppercase tracking-[.18em] text-[#aaa69f]">{project.type}</div><h3 className="text-2xl font-medium tracking-[-.055em] transition-colors duration-300 group-hover:text-[#ec3b2e] sm:text-3xl">{project.name}</h3></div><span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-[transform,color,background-color,border-color] duration-300 group-hover:translate-x-2 group-hover:border-[#ec3b2e] group-hover:bg-[#ec3b2e]"><ArrowUpRight size={14}/></span></div>
              <p className="mt-3 max-w-lg text-xs leading-6 text-[#aaa69f] sm:text-[13px]">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="border border-white/15 px-2.5 py-1.5 text-[9px] uppercase tracking-[.1em] text-[#aaa69f]">{tech}</span>)}</div>
              <span className="sr-only">Projeto {project.number}</span>
            </a>
          </Reveal>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contato" className="overflow-hidden border-t border-white/10 px-5 pb-7 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3"><SectionLabel index="03">Contato</SectionLabel><p className="max-w-xs text-xs leading-6 text-[#898680]">Tem uma ideia, oportunidade ou projeto? Vamos conversar.</p></Reveal>
          <Reveal delay={0.08} className="lg:col-span-9"><a className="focus-ring group block" href={links.email}><span className="display block text-[clamp(2.6rem,11.6vw,11.8rem)] leading-[.85] tracking-[-.09em] transition-[color,letter-spacing] duration-500 ease-out group-hover:tracking-[-.075em] group-hover:text-[#ec3b2e]">VAMOS<br/>CONVERSAR<span className="text-[#ec3b2e] transition-colors duration-500 group-hover:text-white">?</span></span><span className="mt-7 inline-flex items-center gap-2 text-sm text-[#b3b0aa] transition-colors duration-300 group-hover:text-white">jgvaz4059@gmail.com <MoveUpRight size={15}/></span></a></Reveal>
        </div>
        <div className="mt-24 grid gap-8 border-t border-white/15 py-7 sm:grid-cols-3 sm:items-end">
          <div><div className="mb-2 text-[9px] uppercase tracking-[.18em] text-[#898680]">Telefone</div><a className="red-link focus-ring text-xs" href="tel:+5512981097784">(12) 98109-7784</a></div>
          <div className="flex gap-6 text-[10px] uppercase tracking-[.14em] sm:justify-center"><a className="red-link focus-ring inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#ec3b2e]" href={links.github} target="_blank" rel="noreferrer"><Github size={14}/> GitHub <ArrowUpRight size={11}/></a><a className="red-link focus-ring inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#ec3b2e]" href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14}/> LinkedIn <ArrowUpRight size={11}/></a></div>
          <div className="text-[9px] uppercase tracking-[.15em] text-[#77736e] sm:text-right">© {new Date().getFullYear()} João Gabriel Vaz</div>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return <main><Hero/><About/><Skills/><Projects/><Contact/></main>;
}
