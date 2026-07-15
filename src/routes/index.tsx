import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Flavio Macedo — Full Stack Developer & AI Engineer" },
            {
                name: "description",
                content:
                    "Portfólio de Flavio Macedo, desenvolvedor Full Stack e Engenheiro de IA especializado em backend escalável, APIs, microsserviços e Inteligência Artificial.",
            },
            { property: "og:title", content: "Flavio Macedo — Full Stack Developer & AI Engineer" },
            {
                property: "og:description",
                content:
                    "Backend robusto, produtos bem desenhados e IA aplicada. React, Spring Boot, Python, Node.js, OpenAI, Claude, LangChain e mais.",
            },
            { property: "og:type", content: "website" },
            { property: "og:url", content: "/" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [{ rel: "canonical", href: "/" }],
    }),
    component: Index,
});

function Index() {
    return (
        <div className="relative min-h-screen text-foreground overflow-x-clip">
            <Nav />
            <main>
                <Hero />
                <About />
            </main>
        </div>
    );
}