// sets page layout for project
import './globals.css'
//import { Navbar, Footer } from '@/components';
import { Header } from '../components/header';

export const metadata = {
  title: 'Sur Bet',
  description: 'check your slips before it chalks ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='relative flex flex-col min-h-screen'>
          <Header />

            {children}
            {/*<Footer />*/}
        </body>
    </html>
  )
}
