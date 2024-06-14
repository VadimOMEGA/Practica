import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components";

const epilogue = Epilogue({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal'
});

export const metadata: Metadata = {
  title: "Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="3xl:text-[16px] 2xl:text-[15px] text-[14px]">
      <SmoothScroll>
        <body className={epilogue.className}>{children}</body>
      </SmoothScroll>
    </html>
  );
}
