import { getDynamicSitemapUrl } from '@/lib/blog';
import { getDomainReferrer } from '@/lib/data';

export default async function sitemap() {
  const res = await getDynamicSitemapUrl();
  const domainReferrer = getDomainReferrer();

  const sitemapUrls = [
    {
      url: 'https://' + domainReferrer,
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/about',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/apps',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/staffing',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/referral',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/partner',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/invest',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/developer',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/terms',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/privacy',
      lastModified: new Date(),
    },
    {
      url: 'https://' + domainReferrer + '/cookie',
      lastModified: new Date(),
    },
  ];

  if (res.data.length > 0) {
    res.data.map((blog) => {
      sitemapUrls.push({ url: 'https://' + domainReferrer + '/blog/' + blog.slug, lastModified: blog.dateMod });
    });
  }

  return sitemapUrls;
}
