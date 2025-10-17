import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
            <h1 className="text-3xl font-bold md:text-4xl">Política de Privacidade</h1>
            <p className="leading-relaxed text-muted-foreground">
              A presente Política de Privacidade descreve como{" "}
              <strong>BRUNO GIORGIO KAHN FALCI</strong>, pessoa jurídica de direito privado inscrita no CNPJ sob o nº
              59.393.438/0001-20, com sede na Rua Tanhacu, 336, Jardim Panorama D&apos;Oeste, São Paulo, SP, CEP
              05679-040 (doravante, “O Oráculo” ou “nós”), coleta, utiliza, armazena, compartilha e protege os dados
              pessoais dos usuários (doravante, “você”) de seus serviços, em conformidade com a Lei nº 13.709/2018 (Lei
              Geral de Proteção de Dados - LGPD) e demais legislações aplicáveis.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Ao utilizar os serviços de “O Oráculo”, você declara ter lido, compreendido e concordado com os termos desta
              Política de Privacidade.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Controlador de Dados</h2>
            <p className="leading-relaxed">
              Para os fins da LGPD, <strong>BRUNO GIORGIO KAHN FALCI</strong> é o Controlador dos dados pessoais coletados
              e processados através dos serviços de “O Oráculo”.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>E-mail para contato sobre privacidade:</strong> contato.oraculo@gmail.com
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Informações que Coletamos</h2>
            <p className="leading-relaxed">
              Coletamos os seguintes tipos de informações para fornecer e melhorar nossos serviços:
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2.1. Dados Fornecidos Diretamente por Você</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Dados de Cadastro e Contato:</strong> Nome, número de telefone e e-mail.
                </li>
                <li>
                  <strong>Dados de Configuração do Serviço:</strong> Valor da banca inicial, percentual da stake e metas de
                  lucro mensais.
                </li>
                <li>
                  <strong>Dados de Transação:</strong> Informações sobre as apostas que você submete para análise, como
                  mercado, odd e valor.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2.2. Dados Coletados Automaticamente</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Dados de Uso do Serviço:</strong> Histórico de comandos enviados, interações com “O Oráculo” e
                  performance (lucro/prejuízo, ROI, taxa de acerto).
                </li>
                <li>
                  <strong>Dados de Navegação (no site oraculo.life):</strong> Utilizamos a ferramenta PostHog para coletar
                  dados sobre como você interage com nosso site, como páginas visitadas, cliques e tempo de permanência.
                  Estes dados são utilizados para melhorar a experiência do usuário.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">2.3. Dados de Fontes de Terceiros</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Dados de Pagamento:</strong> As transações de pagamento são processadas pela plataforma{" "}
                  <strong>Hubla</strong>. Nós não coletamos nem armazenamos dados de cartão de crédito. Apenas recebemos a
                  confirmação do pagamento e dados básicos para identificação da transação.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Como Utilizamos Suas Informações</h2>
            <p className="leading-relaxed">Utilizamos os dados coletados para as seguintes finalidades:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Prestação dos Serviços:</strong> Para operar as funcionalidades de “O Oráculo”, como a análise de
                apostas, gestão de banca, planejamento de metas e envio de alertas.
              </li>
              <li>
                <strong>Comunicação:</strong> Para enviar mensagens importantes sobre sua conta, atualizações dos serviços e
                alertas proativos.
              </li>
              <li>
                <strong>Suporte ao Cliente:</strong> Para responder às suas solicitações, solucionar problemas e prestar
                suporte através dos nossos canais de contato.
              </li>
              <li>
                <strong>Melhoria dos Serviços:</strong> Para analisar o comportamento do usuário, entender as tendências de
                uso e aprimorar a inteligência, a usabilidade e a eficácia de “O Oráculo” e do site.
              </li>
              <li>
                <strong>Cumprimento de Obrigações Legais:</strong> Para cumprir com obrigações legais, regulatórias ou
                ordens judiciais.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Compartilhamento de Dados</h2>
            <p className="leading-relaxed">
              Nós não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing. O
              compartilhamento de dados ocorre apenas nas seguintes circunstâncias:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Provedores de Serviço:</strong> Compartilhamos dados com empresas que nos auxiliam a operar, como:
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Supabase:</strong> Para armazenamento e backup dos dados em nuvem.
                  </li>
                  <li>
                    <strong>OpenAI (ChatGPT):</strong> Para processar as análises de apostas e gerar as respostas de “O
                    Oráculo”.
                  </li>
                  <li>
                    <strong>PostHog:</strong> Para análise de uso do nosso site.
                  </li>
                  <li>
                    <strong>Hubla:</strong> Para processamento de pagamentos.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Obrigações Legais:</strong> Poderemos compartilhar dados se acreditarmos, de boa-fé, que é necessário
                para cumprir uma obrigação legal, proteger nossos direitos ou a segurança de nossos usuários.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Armazenamento e Segurança dos Dados</h2>
            <p className="leading-relaxed">
              Seus dados são armazenados de forma segura em servidores da <strong>Supabase</strong>. Adotamos medidas
              técnicas e administrativas para proteger os dados pessoais contra acesso não autorizado, destruição, perda,
              alteração ou qualquer forma de tratamento inadequado ou ilícito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Seus Direitos como Titular dos Dados</h2>
            <p className="leading-relaxed">De acordo com a LGPD, você tem o direito de:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Confirmar</strong> a existência de tratamento de seus dados.
              </li>
              <li>
                <strong>Acessar</strong> seus dados.
              </li>
              <li>
                <strong>Corrigir</strong> dados incompletos, inexatos ou desatualizados.
              </li>
              <li>
                <strong>Anonimizar, bloquear ou eliminar</strong> dados desnecessários ou excessivos.
              </li>
              <li>
                <strong>Solicitar a portabilidade</strong> dos seus dados a outro fornecedor de serviço.
              </li>
              <li>
                <strong>Eliminar</strong> os dados pessoais tratados com o seu consentimento.
              </li>
              <li>
                <strong>Obter informação</strong> sobre as entidades com as quais compartilhamos seus dados.
              </li>
              <li>
                <strong>Revogar o consentimento</strong>, quando aplicável.
              </li>
            </ul>
            <p className="leading-relaxed">
              Para exercer seus direitos, entre em contato conosco através do e-mail <strong>contato.oraculo@gmail.com</strong>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Cookies e Tecnologias de Rastreamento</h2>
            <p className="leading-relaxed">
              Nosso site, <strong>oraculo.life</strong>, utiliza cookies e tecnologias de rastreamento da ferramenta{" "}
              <strong>PostHog</strong> para coletar informações sobre a sua navegação. Você pode gerenciar suas preferências
              de cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Alterações a Esta Política de Privacidade</h2>
            <p className="leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível
              em nosso site. Recomendamos que você revise esta política regularmente para se manter informado sobre como
              estamos protegendo seus dados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">9. Contato</h2>
            <p className="leading-relaxed">
              Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em
              contato conosco:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>E-mail:</strong> contato.oraculo@gmail.com
              </li>
              <li>
                <strong>Telefone:</strong> +55 11 93936-6227
              </li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
