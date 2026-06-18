import type { LucideIcon } from "lucide-react";
import {
  // Services
  Users,
  BarChart3,
  Star,
  // Case Studies
  Eye,
  IndianRupee,
  ThumbsUp,
  Download,
  Mic2,
  Target,
  Lightbulb,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  // Team
  Rocket,
  BarChart,
  Handshake,
  // Roster
  Monitor,
  Sparkles,
  Gamepad2,
  Dumbbell,
  Utensils,
  Music,
  // Extra selectable content icons
  UserPlus,
  TrendingUp,
  Briefcase,
  Megaphone,
  Video,
  Camera,
  Film,
  Globe,
  Award,
  Heart,
  // Fallback
  Circle,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Users,
  BarChart3,
  Star,
  Eye,
  IndianRupee,
  ThumbsUp,
  Download,
  Mic2,
  Target,
  Lightbulb,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Rocket,
  BarChart,
  Handshake,
  Monitor,
  Sparkles,
  Gamepad2,
  Dumbbell,
  Utensils,
  Music,
  UserPlus,
  TrendingUp,
  Briefcase,
  Megaphone,
  Video,
  Camera,
  Film,
  Globe,
  Award,
  Heart,
  Circle,
};

export function getIcon(name?: string): LucideIcon {
  return (name && iconMap[name]) || Circle;
}

// Returns the color only if it's a valid CSS hex (#rgb/#rgba/#rrggbb/#rrggbbaa);
// otherwise the fallback. Guards against blank OR garbage values (e.g. "test4")
// breaking the `${color}18` alpha-suffix styling used across the cards.
export function safeColor(color?: string, fallback = "#ffffff"): string {
  return /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test((color || "").trim())
    ? (color as string).trim()
    : fallback;
}
