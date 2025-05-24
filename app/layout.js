import './globals.css';

export const metadata = {
  title: 'Vanity Wallet Generator - EVM',
  description: 'Generate beautiful, custom EVM wallet addresses (Ethereum, Base, BSC) right in your browser. Open-source. Client-side. No keys ever leave your device.',
  openGraph: {
    title: 'Vanity Wallet Generator - EVM',
    description: 'Generate beautiful, custom EVM wallet addresses in your browser. Fast, private, and open-source.',
    images: [
      {
        url: '/logo-vanity-evm.png',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanity Wallet Generator - EVM',
    description: 'Generate beautiful, custom EVM wallet addresses in your browser. Fast, private, and open-source.',
    images: ['/logo-vanity-evm.png'],
  },
  icons: {
    icon: [
      { url: '/vality_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/vality_logo.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/vality_logo.png',
    apple: '/vality_logo.png',
    other: [
      {
        rel: 'icon',
        url: '/vality_logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/vality_logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/vality_logo.png',
      },
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/vality_logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/vality_logo.png" />
        <link rel="shortcut icon" href="/vality_logo.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
