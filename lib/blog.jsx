import axios from 'axios';

export async function getBlogs(domain) {
  try {
    const url = process.env.CONTRIB_API1 + 'icontent/Getcontents?key=' + process.env.CONTRIB_API_KEY + '&domain=' + domain;

    const res = await axios.get(url);

    return res.data;
  } catch (error) {
    return error;
  }
}

export async function getBlog(domain, slug) {
  try {
    const url = process.env.CONTRIB_API1 + 'icontent/GetcontentById?key=' + process.env.CONTRIB_API_KEY + '&domain=' + domain + '&slug=' + slug;
    const res = await axios.get(url);

    if (res.data) {
      const result = res.data;
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    return error;
  }
}
