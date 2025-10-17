import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-6 animate-fade-in px-2">
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-full bg-card border border-destructive/30">
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-destructive flex-shrink-0" />
            <span className="text-xs md:text-sm uppercase tracking-wider text-destructive font-mono">[ VOCÊ RECONHECE ISSO? ]</span>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed px-2">
            Você analisa um jogo, sente confiança, faz a entrada... e a aposta é perdida nos últimos minutos.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            A frustração vem, e com ela, a vontade de "recuperar o prejuízo" em qualquer jogo que aparece na frente.
            Você sabe que esse ciclo destrói sua banca, mas continua repetindo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
