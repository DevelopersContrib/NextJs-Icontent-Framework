import './globals.scss'
import HeaderScript from '@/components/includes/HeaderScript'
import { getData, getDomain } from '@/lib/data'

import Navigation from '@/components/includes/Navigation';
import Footer from '@/components/includes/Footer';

export async function generateMetadata() {
  const c = await getData();

	return {
		title: c.data.title===''?'Welcome to '+c.data.domainName:c.data.title,
		description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
	}
}

export default async function RootLayout({ children }) {
  const c = await getData();
  const socials = {
    fb: c.data.fb,
    linkedin: c.data.linkedin,
    twiiter: c.data.twitter
  }
  return (
    <html lang="en">
      <HeaderScript />
      <body className='antialiased'>
        <Navigation domain={c.data.domainName} logo={c.data.logo} />
        {children}
        <Footer domain={c.data.domainName} socials={socials} />
      </body>
    </html>
  )
}
