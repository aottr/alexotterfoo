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
    <html lang="en" className="bg-primary">
      <body>
        {children}
      </body>
    </html>
  )
}
