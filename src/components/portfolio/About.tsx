import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
    { value: "+5", label: "anos estudando tecnologia" },
    { value: "20+", label: "projetos entregues" },
    { value: "100%", label: "responsivo & acessível" },
    { value: "IA", label: "Generativa & Agentes" },
];

export function About() {
    return (
        <Section
            id="sobre"
            eyebrow="Sobre mim"
            title={<>Engenharia de software com <span className="text-gradient">alma de produto</span></>}
        >
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                    <p>
                        Sou apaixonado por tecnologia e por resolver problemas complexos com código.
                        Minha atuação combina <span className="text-foreground font-medium">desenvolvimento backend robusto</span>,
                        arquitetura escalável e uma forte especialização em <span className="text-foreground font-medium">Inteligência Artificial</span> e
                        automações.
                    </p>
                    <p>
                        Trabalho na construção de <span className="text-foreground font-medium">APIs</span>,
                        <span className="text-foreground font-medium"> microsserviços</span> e plataformas
                        completas, unindo boas práticas de engenharia com produtos bem desenhados. Já
                        desenvolvi sistemas com Spring Boot, Node.js, Python e Django, integrando modelos
                        de linguagem, RAG, OCR e agentes autônomos para gerar valor real em empresas.
                    </p>
                    <p>
                        Acredito que software excepcional nasce da intersecção entre performance,
                        experiência e propósito.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="glass rounded-2xl p-5"
                        >
                            <div className="text-3xl font-bold text-gradient mb-1">{s.value}</div>
                            <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
