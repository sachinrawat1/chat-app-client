// app/ClientProviders.tsx
"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ReactQueryProvider from "@/components/reactQueryProvider";
import { Toaster } from "react-hot-toast";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        {children}
        <Toaster position="bottom-right" />
      </ReactQueryProvider>
    </Provider>
  );
}
