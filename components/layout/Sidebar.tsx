"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getNavigation, NavSection, NavItem } from "../../lib/navigation";

function NavLeaf({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  return (
    <li>
      <Link href={item.href ?? "#"} className={`nav-link${isActive ? " active" : ""}`}>
        {item.label}
      </Link>
    </li>
  );
}

function NavGroup({ item }: { item: NavItem }) {
  return (
    <>
      <li className="nav-group-label">{item.label}</li>
      {item.items?.map((child) => <NavLeaf key={child.href} item={child} />)}
    </>
  );
}

function Section({ section }: { section: NavSection }) {
  const pathname = usePathname();
  const isActive = pathname === section.href || pathname.startsWith(section.href + "/");
  const [open, setOpen] = useState(isActive);
  const hasItems = section.items && section.items.length > 0;

  return (
    <div className="nav-section">
      <button
        className={`nav-section-btn${isActive ? " active" : ""}`}
        onClick={() => setOpen((o) => !o)}
      >
        <Link href={section.href} onClick={(e) => e.stopPropagation()} style={{ flex: 1, textAlign: "left" }}>
          {section.label}
        </Link>
        {hasItems && <span className="chevron">{open ? "▾" : "▸"}</span>}
      </button>

      {open && hasItems && (
        <ul className="nav-items">
          {section.items!.map((item) =>
            item.group ? (
              <NavGroup key={item.label} item={item} />
            ) : (
              <NavLeaf key={item.href} item={item} />
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default function Sidebar() {
  const nav = getNavigation();
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Link href="/">
          Pro Tools
          <span>Second Brain</span>
        </Link>
      </div>

      <nav className="sidebar-nav">
        {nav.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link href="/search" className="search-link">
          <span>⌕</span>
          <span>Search</span>
          <kbd className="search-kbd">⌘K</kbd>
        </Link>
      </div>
    </aside>
  );
}
