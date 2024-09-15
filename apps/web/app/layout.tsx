import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@aura/ui';
import '@aura/ui/src/styles/global.css';
import { StoreProvider } from '@aura/state';
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
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
