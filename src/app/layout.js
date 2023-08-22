import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oasis 2023 | Home',
  description: 'Oasis 2023 Website for the 51st annual cultural fest of BITS Pilani, Pilani Campus',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
