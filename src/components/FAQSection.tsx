import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como O Oráculo funciona no WhatsApp?",
      answer: "O Oráculo é integrado diretamente ao seu WhatsApp. Você envia suas análises de apostas e ele retorna vereditos em tempo real, baseados em cálculos matemáticos e probabilísticos. É como ter um analista profissional no bolso, 24/7.",
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! O Oráculo foi desenvolvido para ser intuitivo. Basta enviar a odd que você está considerando, e ele responde se vale a pena ou não. Não precisa entender de programação, estatística avançada ou nada técnico. Ele faz o trabalho pesado por você.",
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Simples: você tem 7 dias para testar todas as funcionalidades do Oráculo. Se você não sentir que sua tomada de decisão melhorou, basta nos enviar uma mensagem e devolvemos 100% do seu investimento. Sem perguntas difíceis, sem burocracia.",
    },
    {
      question: "O Oráculo funciona com quais casas de apostas?",
      answer: "O Oráculo analisa o valor matemático das odds, independentemente da casa. Funciona com Bet365, Betfair, Sportingbet, 1xBet e qualquer outra plataforma. O que importa é a odd que você está considerando, não onde você vai apostar.",
    },
    {
      question: "O Oráculo me dá tips de apostas?",
      answer: "Não. O Oráculo não é um tipster. Ele não te diz 'aposte nesse jogo'. Ele analisa as apostas QUE VOCÊ já está considerando e te diz se o valor matemático compensa o risco. É uma ferramenta de VALIDAÇÃO, não de indicação.",
    },
    {
      question: "Quantas análises posso fazer por dia?",
      answer: "ILIMITADAS. Não há restrição. Você pode submeter 5, 10, 50 análises por dia. O Oráculo está sempre disponível para te ajudar a tomar decisões mais inteligentes.",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-primary/30">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary">Perguntas Frequentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Ainda tem dúvidas sobre{" "}
            <span className="text-primary neon-glow">O Oráculo?</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="neon-border bg-card rounded-lg px-6 border-0"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
