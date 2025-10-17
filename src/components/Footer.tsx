import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background/80 px-4 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 text-center text-sm text-white/70 md:flex-row md:text-left">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
          © {year} O Oráculo. Todos os direitos reservados.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            to="/politica-de-privacidade"
            className="transition-colors hover:text-primary"
          >
            Política de Privacidade
          </Link>
          <Link
            to="/termos-de-servico"
            className="transition-colors hover:text-primary"
          >
            Termos de Serviço
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
