import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="relative px-4 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_65%)] blur-3xl" />
      <div className="container relative mx-auto max-w-4xl space-y-10">
        <Button
          variant="outline"
          size="sm"
          className="group w-fit border-white/20 bg-background/70 text-white hover:border-primary/60 hover:bg-primary/10"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar para a página inicial
        </Button>

        <article className="space-y-8 rounded-2xl border border-white/10 bg-card/80 p-6 text-base text-foreground shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur md:p-10 md:text-lg">
          <header className="space-y-4 text-center md:text-left">
            <p className="text-sm italic text-muted-foreground">
              Última atualização: 16 de outubro de 2025
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">Termos de Serviço</h1>
            <p className="leading-relaxed text-muted-foreground">
              Bem-vindo ao <strong>O Oráculo</strong>! Estes Termos de Serviço (&quot;Termos&quot;) regem o seu acesso e uso
              dos nossos serviços de análise de apostas esportivas baseados em inteligência artificial, disponibilizados
              através do WhatsApp (o &quot;Serviço&quot;). O Serviço é fornecido por{" "}
              <strong>BRUNO GIORGIO KAHN FALCI</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o nº
              59.393.438/0001-20, com sede na Rua Tanhacu, 336, Jardim Panorama D&apos;Oeste, São Paulo, SP, CEP 05679-040
              (doravante, “O Oráculo” ou “nós”).
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Ao acessar ou utilizar o Serviço, você concorda em cumprir e estar vinculado a estes Termos. Se você não
              concordar com qualquer parte dos Termos, não poderá utilizar o Serviço.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Aceitação e Elegibilidade</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Idade Mínima:</strong> Você deve ter pelo menos 18 anos de idade para utilizar o Serviço.
              </li>
              <li>
                <strong>Restrições:</strong> O uso do Serviço é proibido para beneficiários de programas sociais
                governamentais, como o Bolsa Família.
              </li>
              <li>
                <strong>Conformidade:</strong> Ao utilizar o Serviço, você declara e garante que cumpre todos os requisitos
                de elegibilidade e que não está violando nenhuma lei ou regulamento aplicável.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Descrição do Serviço</h2>
            <p className="leading-relaxed">
              “O Oráculo” é uma ferramenta de inteligência artificial que opera via WhatsApp e oferece análises probabilísticas
              de apostas esportivas. As funcionalidades incluem:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Análise Pré-Aposta:</strong> Fornece um veredito sobre o valor matemático de uma aposta.
              </li>
              <li>
                <strong>Gestão de Banca:</strong> Registra e exibe seu desempenho, incluindo lucro/prejuízo, ROI e taxa de
                acerto.
              </li>
              <li>
                <strong>Planejamento de Metas:</strong> Ajuda a traçar estratégias para recuperação de perdas ou para atingir
                metas de lucro.
              </li>
              <li>
                <strong>Alertas Proativos:</strong> Envia notificações sobre oportunidades de apostas e padrões de
                comportamento de risco.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Isenção de Responsabilidade e Riscos</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Ferramenta de Análise:</strong> “O Oráculo” é uma ferramenta educacional e informativa, projetada para
                auxiliar na tomada de decisões. As análises são baseadas em probabilidades e dados estatísticos, e{" "}
                <strong>não constituem uma garantia de lucro ou de resultados futuros</strong>.
              </li>
              <li>
                <strong>Risco do Usuário:</strong> As apostas esportivas envolvem um alto grau de risco financeiro. Você é o
                único responsável por suas decisões de aposta e por quaisquer perdas financeiras que possam ocorrer.
                Recomendamos que você aposte com responsabilidade e apenas com fundos que pode se dar ao luxo de perder.
              </li>
              <li>
                <strong>Nenhuma Consultoria Financeira:</strong> O Serviço não fornece consultoria de investimento ou
                financeira. As informações fornecidas não devem ser interpretadas como uma recomendação para comprar, vender
                ou manter qualquer tipo de investimento.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Pagamento e Assinatura</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Assinatura Anual:</strong> O acesso ao Serviço é concedido mediante um pagamento único que garante 12
                meses de acesso.
              </li>
              <li>
                <strong>Processamento de Pagamento:</strong> Os pagamentos são processados através da plataforma{" "}
                <strong>Hubla</strong>. Nós não coletamos nem armazenamos informações de cartão de crédito.
              </li>
              <li>
                <strong>Renovação:</strong> A assinatura não é renovada automaticamente. Ao final do período de 12 meses, você
                precisará realizar uma nova compra para continuar utilizando o Serviço.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Política de Cancelamento e Reembolso</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Garantia de 7 Dias:</strong> Você pode solicitar o cancelamento e o reembolso total do valor pago no
                prazo de 7 (sete) dias a contar da data da compra, em conformidade com o Código de Defesa do Consumidor.
              </li>
              <li>
                <strong>Processo de Solicitação:</strong> Para solicitar o cancelamento dentro do período de garantia, você
                pode utilizar a plataforma Hubla ou enviar um e-mail para <strong>contato.oraculo@gmail.com</strong>.
              </li>
              <li>
                <strong>Prazo de Estorno:</strong> O estorno no cartão de crédito será processado em até 30 dias, dependendo
                dos prazos da operadora do cartão.
              </li>
              <li>
                <strong>Após 7 Dias:</strong> Após o período de 7 dias, não haverá reembolso de qualquer valor, seja total ou
                proporcional, em caso de cancelamento.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Propriedade Intelectual</h2>
            <p className="leading-relaxed">
              Todo o conteúdo, software, algoritmos, prompts e a marca “O Oráculo” são de propriedade exclusiva de{" "}
              <strong>BRUNO GIORGIO KAHN FALCI</strong>. Você concorda em não copiar, reproduzir, modificar, distribuir ou
              criar trabalhos derivados baseados no Serviço sem nossa autorização expressa por escrito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Conduta do Usuário</h2>
            <p className="leading-relaxed">Você concorda em não utilizar o Serviço para qualquer finalidade ilegal ou proibida por estes Termos. Você não deve:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Tentar reverter a engenharia ou acessar o código-fonte do Serviço.</li>
              <li>Utilizar o Serviço de forma que possa danificar, desabilitar ou sobrecarregar nossa infraestrutura.</li>
              <li>Compartilhar seu acesso com terceiros.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Modificações nos Termos</h2>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. A versão mais recente estará sempre
              disponível em nosso site <strong>oraculo.life</strong>. Notificaremos sobre alterações significativas através
              dos nossos canais de comunicação. A continuidade do uso do Serviço após tais alterações constitui sua aceitação
              dos novos Termos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Lei Aplicável e Foro</h2>
            <p className="leading-relaxed">
              Estes Termos serão regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito
              o foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias oriundas destes
              Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">10. Contato</h2>
            <p className="leading-relaxed">
              Se você tiver alguma dúvida sobre estes Termos de Serviço, entre em contato conosco:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>E-mail:</strong> contato.oraculo@gmail.com
              </li>
              <li>
                <strong>Telefone:</strong> +55 11 93936-6227
              </li>
              <li>
                <strong>Site:</strong> oraculo.life
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
};

export default TermsOfService;
