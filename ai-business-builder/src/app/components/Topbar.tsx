"use client";

import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        AI Business Builder
      </h2>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <Bell className="w-5 h-5" />
        </button>

        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
          U
        </div>
      </div>
    </header>
  );
}
