import { motion } from "framer-motion";
import {
    Code2, Server, Cloud, Database, GitBranch, BrainCircuit,
} from "lucide-react";
import { Section } from "./Section";

type Skill = { name: string; level: number };
type Group = { title: string; icon: typeof Code2; skills: Skill[] };

const groups: Group[] = [
    {
        title: "Frontend",
        icon: Code2,
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 92 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Vite", level: 88 },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        skills: [
            { name: "Java / Spring Boot", level: 92 },
            { name: "Python / Django", level: 94 },
            { name: "Node.js / Express", level: 80 },
            { name: "APIs REST & GraphQL", level: 80 },
        ],
    },
    {
        title: "Banco de dados",
        icon: Database,
        skills: [
            { name: "PostgreSQL", level: 92 },
            { name: "MySQL", level: 85 },
            { name: "MongoDB", level: 82 },
            { name: "Firebase", level: 80 },
        ],
    },
    {
        title: "Cloud",
        icon: Cloud,
        skills: [
            { name: "AWS", level: 82 },
            { name: "Azure", level: 78 },
            { name: "Linux", level: 88 },
        ],
    },
    {
        title: "DevOps",
        icon: GitBranch,
        skills: [
            { name: "Docker & Compose", level: 88 },
            { name: "Git & Github", level: 95 },
            { name: "CI/CD", level: 78 },
        ],
    },
    {
        title: "Inteligência Artificial",
        icon: BrainCircuit,
        skills: [
            { name: "OpenAI & Claude AI", level: 92 },
            { name: "LangChain & RAG", level: 88 },
            { name: "Agentes & Automação", level: 90 },
            { name: "Whisper & OCR", level: 85 },
        ],
    },
];

export function Skills() {
    return (
        <Section
            id="skills"
            eyebrow="Stack técnica"
            title={<>Tecnologias que <span className="text-gradient">domino</span></>}
            subtitle="Do frontend à IA generativa - um stack completo para construir produtos ponta a ponta."
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {groups.map((g, gi) => {
                    const Icon = g.icon;
                    return (
                        <motion.div
                            key={g.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: gi * 0.05, duration: 0.5 }}
                            className="glass rounded-2xl p-6 hover:border-brand-blue/40 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center">
                                    <Icon size={18} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold">{g.title}</h3>
                            </div>
                            <div className="space-y-3.5">
                                {g.skills.map((s) => (
                                    <div key={s.name}>
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="text-foreground/90">{s.name}</span>
                                            <span className="text-muted-foreground">{s.level} %</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${s.level} %` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: "easeOut" }}
                                                className="h-full bg-gradient-brand rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
}
