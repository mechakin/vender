"use client";

import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark'

  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          borderRadius: "10px",
          background: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#333',
        },
      }}
    />
  );
};
