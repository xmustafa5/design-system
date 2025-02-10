import React from "react";
import Link from "next/link";

function SideBar() {
  const menuItems = [
    { label: "Dashboard", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <aside className="h-screen w-64 bg-[--background-system-body-base] text-[--content-presentation-action-dark-primary] p-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Torch corp</h1>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-[--content-presentation-action-dark-primary] rounded-lg px-4 py-2  hover:bg-[--background-system-body-secondary]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
