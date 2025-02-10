"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Tab {
  id: string;
  path: string;
  label: string;
}

export default function TabsGroup() {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const pathname = usePathname();

  // Load tabs from localStorage on mount
  useEffect(() => {
    const savedTabs = localStorage.getItem("browser-tabs");
    if (savedTabs) {
      setTabs(JSON.parse(savedTabs));
    }
  }, []);

  // Update tabs when pathname changes
  useEffect(() => {
    if (!pathname) return;

    const newTab = {
      id: Math.random().toString(36).substr(2, 9),
      path: pathname,
      label: getTabLabel(pathname),
    };

    setTabs((prevTabs) => {
      // Don't add duplicate tabs
      if (prevTabs.some((tab) => tab.path === pathname)) {
        setActiveTab(prevTabs.find((tab) => tab.path === pathname)?.id || "");
        return prevTabs;
      }

      const updatedTabs = [...prevTabs, newTab];
      // Save to localStorage
      localStorage.setItem("browser-tabs", JSON.stringify(updatedTabs));
      setActiveTab(newTab.id);
      return updatedTabs;
    });
  }, [pathname]);

  const getTabLabel = (path: string): string => {
    // Convert path to readable label
    if (path === "/") return "Home";
    return path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setTabs((prevTabs) => {
      const updatedTabs = prevTabs.filter((tab) => tab.id !== tabId);
      localStorage.setItem("browser-tabs", JSON.stringify(updatedTabs));
      return updatedTabs;
    });
  };

  return (
    <div className="flex w-full overflow-x-auto bg-gradient-to-b from-[--background-system-body-secondary] to-[--background-system-body-secondary] px-2 pt-2">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.path}
          className={`
            group relative flex min-w-[160px] max-w-[200px] items-center gap-2
            rounded-t-lg border-t border-x px-4 py-2.5 text-sm font-medium
            transition-all duration-200 ease-in-out
            ${
              activeTab === tab.id
                ? "bg-white border-[--background-system-body-base] text-[--content-presentation-action-dark-primary] shadow-sm"
                : "bg-[--background-system-body-primary] border-transparent text-[--content-presentation-action-dark-primary] hover:bg-[--background-system-body-primary]"
            }
            ${activeTab === tab.id ? "z-10" : "z-0"}
          `}
        >
          {/* Favicon placeholder - you can add actual favicons here */}
          <div
            className={`h-3 w-3 rounded-full 
            ${activeTab === tab.id ? "bg-blue-500" : "bg-gray-400"}`}
          />

          <span className="truncate flex-1">{tab.label}</span>

          <button
            onClick={(e) => closeTab(tab.id, e)}
            className={`
              rounded-full p-1 transition-all duration-200
              ${
                activeTab === tab.id
                  ? "opacity-0 group-hover:opacity-100 hover:bg-gray-200"
                  : "opacity-0 group-hover:opacity-100 hover:bg-gray-200/80"
              }
            `}
            aria-label="Close tab"
          >
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Active tab indicator line */}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
          )}
        </Link>
      ))}
    </div>
  );
}
