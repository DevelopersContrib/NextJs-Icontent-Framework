import axios from 'axios';
import { getDomain } from '@/lib/data';

export async function getDynamicSitemapUrl(url) {
  try {
    const domain = getDomain();
    const url = process.env.CONTRIB_API1 + 'icontent/getdynamicsitemapurls?key=' + process.env.CONTRIB_API_KEY + '&domain=' + domain;

    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    return error;
  }
}
