
import { Star, Zap, Circle, Gauge, Users, Activity, type LucideIcon } from "lucide-react";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  category: string;
  gradient: string;
  icon: LucideIcon;
  element?: React.ReactNode;
  content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
  
  
];
