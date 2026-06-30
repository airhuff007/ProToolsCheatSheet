// Navigation tree utilities
import navData from "../data/navigation.json";

export interface NavItem {
  label: string;
  href?: string;
  group?: boolean;
  items?: NavItem[];
}

export interface NavSection {
  id: string;
  label: string;
  href: string;
  items?: NavItem[];
}

export function getNavigation(): NavSection[] {
  return navData.sections as NavSection[];
}

export function getActiveSection(pathname: string): string | null {
  const section = navData.sections.find(
    (s) => pathname === s.href || pathname.startsWith(s.href + "/")
  );
  return section?.id ?? null;
}
