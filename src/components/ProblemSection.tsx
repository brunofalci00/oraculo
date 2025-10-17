import { AlertCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border">
            <AlertCircle className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground">O Problema</span>
          </div>
          
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed">
            Você analisa um jogo, sente confiança, faz a entrada... e a aposta é perdida nos últimos minutos.
          </p>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A frustração vem, e com ela, a vontade de "recuperar o prejuízo" em qualquer jogo que aparece na frente. 
            Você sabe que esse ciclo destrói sua banca, mas continua repetindo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
