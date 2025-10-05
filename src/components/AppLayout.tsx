"use client";

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isBlueprintPage = pathname === '/blueprint';

  return (
    <>
      {!isBlueprintPage && <Header />}
      <main>{children}</main>
      <GoogleAnalytics gaId="G-ESR47ZW55J" />
      {!isBlueprintPage && <Footer />}
    </>
  );
}