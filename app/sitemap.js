import { getDynamicSitemapUrl } from '@/lib/blog';
import { getUrl } from '@/lib/data';

export default async function sitemap() {
  const res = await getDynamicSitemapUrl();
  const domainReferrer = getUrl();
  const sitemapUrls = [
    {
      url: domainReferrer,
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/about',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/apps',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/contact',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/staffing',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/referral',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/partner',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/invest',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/developer',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/terms',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/privacy',
      lastModified: new Date(),
    },
    {
      url: domainReferrer + '/cookie',
      lastModified: new Date(),
    },
  ];

  if (res.data.length > 0) {
    res.data.map((blog) => {
      sitemapUrls.push({ url: domainReferrer + '/blog/' + blog.slug, lastModified: blog.dateMod });
    });
  }

  return sitemapUrls;
}
