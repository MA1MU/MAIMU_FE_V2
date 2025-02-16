import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MAIMU',
  description: '나의 첫인상을 알려줘!',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-round">{children}</body>
    </html>
  );
}
