import axios from 'axios';

export const GET = async (request) => {
  try {
    const urlParams = new URL(request.url);
    const slug = urlParams.searchParams.get('slug');

    const url = process.env.CONTRIB_API1 + 'icontent/getcontentbyslug?key=' + process.env.CONTRIB_API_KEY + '&domain=' + process.env.NEXT_PUBLIC_VERCEL_URL + '&slug=' + slug;

    console.log('URL', url);
    const res = await axios.get(url);
    const result = res.data;

    return new Response(JSON.stringify(result.data), { status: 201 });
  } catch (error) {
    return error;
  }
};
