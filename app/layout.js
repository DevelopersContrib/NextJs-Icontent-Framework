import './globals.scss'
import Navigation from '@/components/includes/Navigation'
import Footer from '@/components/includes/Footer'

export const metadata = {
  title: 'iContent Framework',
  description: 'Welcome to iContent Framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='antialiased'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
