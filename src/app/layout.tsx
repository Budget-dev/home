import type {Metadata} from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { WhatsAppButton } from '@/components/vivaan/WhatsAppButton';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body-fallback',
});

export const metadata: Metadata = {
  title: 'Vivaan Farms — Pure A2 Ghee & Farm Goods',
  description: 'Pure Farm Goods from Gujarat. Bilona Method A2 Gir Cow Ghee, Cold Pressed Oils and Superfoods.',
  icons: {
    icon: 'https://i.ibb.co/FqCKvSVb/Group-66-1-removebg-preview.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://i.ibb.co/FqCKvSVb/Group-66-1-removebg-preview.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/google-sans" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <FirebaseClientProvider>
          {children}
          <WhatsAppButton />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
