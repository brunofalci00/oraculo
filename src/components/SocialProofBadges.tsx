import { Users, TrendingUp, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SocialProofBadges = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Usuários Ativos",
      color: "primary",
    },
    {
      icon: TrendingUp,
      value: "+34%",
      label: "ROI Médio",
      color: "accent",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Avaliação",
      color: "primary",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Disponível",
      color: "accent",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-3 bg-card rounded-lg px-4 py-3 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
        >
          <div className={`w-10 h-10 rounded-lg ${stat.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} flex items-center justify-center`}>
            <stat.icon className={`w-5 h-5 ${stat.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
          </div>
          <div>
            <p className={`text-xl font-bold ${stat.color === 'primary' ? 'text-primary' : 'text-accent'} neon-glow`}>
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialProofBadges;
