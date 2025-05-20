import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
  title: 'Rachit Dwivedi | Game Developer',
  description: 'Portfolio of Rachit Dwivedi — Game Developer, Designer & Animator',
  openGraph: {
    title: 'Rachit Dwivedi | Game Developer',
    description: 'Crafting immersive games, animations, and UI experiences.',
    url: 'https://your-deployed-site-url.vercel.app', // Replace with your actual deployed URL
    siteName: 'Rachit Dwivedi Portfolio',
    images: [
      {
        url: '/preview-image.png', // Add a suitable image in your public/ folder
        width: 1200,
        height: 630,
        alt: 'Rachit Dwivedi Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rachit Dwivedi | Game Developer',
    description: 'Explore my portfolio: games, designs, animations and more.',
    images: ['/Portfolio.png'],
  },
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
