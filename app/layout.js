import './globals.scss'
import './custom.css'
import HeaderScript from '@/components/includes/HeaderScript'
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
        
        {children}
        
      </body>
    </html>
  )
}
