import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dhruv Tilva | Backend Software Engineer',
  description:
    'Portfolio of Dhruv Tilva — Backend Software Engineer specializing in scalable systems, AI/ML, and blockchain development. Explore projects, skills, and experience.',
  keywords: [
    'Dhruv Tilva',
    'Backend Engineer',
    'Software Developer',
    'Full Stack',
    'AI ML',
    'Blockchain',
    'Node.js',
    'Python',
    'React',
    'Portfolio',
  ],
  authors: [{ name: 'Dhruv Tilva' }],
  openGraph: {
    title: 'Dhruv Tilva | Backend Software Engineer',
    description:
      'Backend Software Engineer specializing in scalable systems, AI/ML, and blockchain development.',
    url: 'https://dhruvtilva.dev',
    siteName: 'Dhruv Tilva Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruv Tilva | Backend Software Engineer',
    description:
      'Backend Software Engineer specializing in scalable systems, AI/ML, and blockchain development.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#030014',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-background text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
