import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
    id,
    eyebrow,
    title,
    subtitle,
    children,
}: {
    id?: string;
    eyebrow?: string;
    title: ReactNode;
    subtitle?: string;
    children: ReactNode;
}) {
    return (
        <section id={id} className="relative py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 max-w-2xl"
                >
                    {eyebrow && (
                        <div className="inline-block text-xs uppercase tracking-[0.2em] text-brand-blue mb-4">
                            {eyebrow}
                        </div>
                    )}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
                    {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
                </motion.div>
                {children}
            </div>
        </section>
    );
}
