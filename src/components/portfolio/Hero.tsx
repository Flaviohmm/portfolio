import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import flavio from "@/assets/flavio.png";

export function Hero() {
    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
        >
            <Particles />
            <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-brand-blue/30 blur-[120px]" />
            <div className="absolute bottom-10 -right-40 h-96 w-96 rounded-full bg-brand-purple/30 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-6xl px-4 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
                        <Sparkles size={14} className="text-brand-blue" />
                        Disponivel para novos projetos
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6">
                        Flavio <span className="text-gradient animated-gradient bg-linear-to-r from-brand-blue via-accent to-brand-purple bg-clip-text text-transparent">Macedo</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-muted-foreground mb-8 space-y-1">
                        <p>Full Stack Developer</p>
                        <p>AI Enginner</p>
                        <p>Backend Specialist</p>
                    </div>
                    <p className="text-base text-muted-foreground max-w-xl mb-10">
                        Construo projetos digitais escaláveis, APIs robustas e soluções de Inteligência
                        Artificial que geram impacto real para empresas e usuários.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#contato"
                            className="bg-gradient-brand text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-all glow-primary"
                        >
                            <Mail size={18} /> Contratar
                        </a>
                        <a
                            href="/cv-flavio-macedo.pdf"
                            className="glass px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            <Download size={18} /> Baixar Currículo
                        </a>
                        <a
                            href="#projetos"
                            className="px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <FolderGit2 size={18} /> Ver Projetos
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative mx-auto"
                >
                    <div className="absolute -inset-6 bg-gradient-brand rounded-full blur-3xl opacity-40 animate-float" />
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-strong p-1.5 animate-float">
                        <img
                            src={flavio}
                            alt="Flavio Macedo - Full Stack Developer e AI Engineer"
                            width={768}
                            height={768}
                            className="w-full h-full object-cover rounded-[1.25rem]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}