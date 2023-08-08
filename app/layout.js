import './globals.scss'
import Navigation from '@/components/includes/Navigation'
import HeaderScript from '@/components/includes/HeaderScript'
import Footer from '@/components/includes/Footer'

import { getData, getDomain } from '@/lib/data'

export async function generateMetadata() {
  const c = await getData();

	return {
		title: c.data.title===''?'Welcome to '+c.data.domainName:c.data.title,
		description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
	}
}

export default function RootLayout({ children }) {
  const domain = getDomain();

  return (
    <html lang="en">
      <HeaderScript />
      <body className='antialiased'>
        <Navigation domain={domain} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
