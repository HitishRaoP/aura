import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@aura/ui';
import '@aura/ui/src/styles/global.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aura',
  description: 'Women safety and well-being platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
