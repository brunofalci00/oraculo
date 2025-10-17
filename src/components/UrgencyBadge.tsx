import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface UrgencyBadgeProps {
  variant?: "limited" | "new" | "popular";
}

const UrgencyBadge = ({ variant = "limited" }: UrgencyBadgeProps) => {
  const variants = {
    limited: {
      icon: Clock,
      text: "Vagas Limitadas",
      className: "bg-accent/20 text-accent border-accent/50 neon-glow-red",
    },
    new: {
      icon: Clock,
      text: "Novo",
      className: "bg-primary/20 text-primary border-primary/50 neon-glow",
    },
    popular: {
      icon: Clock,
      text: "Mais Escolhido",
      className: "bg-primary/20 text-primary border-primary/50 neon-glow",
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <Badge
      variant="outline"
      className={`${config.className} px-3 py-1 text-xs font-bold uppercase tracking-wider animate-pulse-glow border-2`}
    >
      <Icon className="w-3 h-3 mr-1" />
      {config.text}
    </Badge>
  );
};

export default UrgencyBadge;
