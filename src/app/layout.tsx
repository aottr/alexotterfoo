import type { Metadata } from 'next';
import './globals.css'

export const metadata: Metadata = {
  title: 'Alex Ottr',
  description: 'Alex Ottr\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#092635] bg-gradient-to-br from-[#092635] via-[#1B4242] to-[#5C8374]">
      <body>{children}</body>
    </html>
  )
}
