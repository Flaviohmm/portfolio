import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#github", label: "GitHub" },
    { href: "#contato", label: "Contato" },
];

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "py-3" : "py-5"
            }`}
        >
            <div className="mx-auto max-w-6xl px-4">
                <nav
                    className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
                        scrolled ? "glass-strong" : ""
                    }`}
                >
                    <a href="#top" className="font-display text-lg font-bold tracking-tight">
                        <span className="text-gradient">Flavio</span>
                        <span className="text-foreground/70">.dev</span>
                    </a>
                    <ul className="hidden md:flex items-center gap-7 text-sm font-medium">
                        {links.map((l) => (
                            <li key={l.href}>
                                <a 
                                    href={l.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href="#contato"
                        className="hidden md:inline-flex bg-gradient-brand text-white text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                    >
                        Contratar
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-foreground"
                        aria-label="Menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>
                {open && (
                    <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="text-muted-foreground hover:text-foreground text-sm py-1"
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}
