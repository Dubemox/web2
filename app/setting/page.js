"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, } from "@heroicons/react/24/solid";

export default function Setting() {
  const [dark, setDark] = useState(false);
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

  return (
    <main className="min-h-screen pt-32 px-4 from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-3xl mb-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6">
        
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          ⚙️ Settings
        </h1>

        <div className="space-y-6">

          {/* Account */}
          <SettingCard
            title="Account"
            description="Manage your account details"
          >
            <button className="btn-primary">Edit Profile</button>
          </SettingCard>

          {/* Appearance */}
          <SettingCard
            title="Appearance"
            description="Theme"
          >
            <button
               title="Toggle dark mode"
               onClick={() => setDark(!dark)}
               className="
                 rounded-lg p-2
                 bg-black/10 dark:bg-white/10
                 text-gray-800 dark:text-white
                 hover:scale-105 transition
               "
               aria-label="Toggle theme"
             >
               {dark ? (
                 <SunIcon className="h-5 w-5" />
               ) : (
                 <MoonIcon className="h-5 w-5" />
               )}
             </button>
          </SettingCard>

          {/* Security */}
          <SettingCard
            title="Security"
            description="Password & authentication"
          >
            <button className="btn-secondary">Change Password</button>
          </SettingCard>

          {/* Danger Zone */}
          <SettingCard
            title="Danger Zone"
            description="Delete your account"
            danger
          >
            <button className="btn-danger">Delete Account</button>
          </SettingCard>

        </div>
      </div>
    </main>
  );
}

function SettingCard({ title, description, children, danger }) {
  return (
    <div
      className={`
        rounded-xl border p-4 flex items-center justify-between
        ${danger
          ? "border-red-400 bg-red-50 dark:bg-red-950/30"
          : "border-gray-200 dark:border-gray-700"
        }
      `}
    >
      <div>
        <h2 className="font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
