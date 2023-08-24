import axios from 'axios';

export const GET = async (request) => {
  try {
    const urlParams = new URL(request.url);
    const page = urlParams.searchParams.get('page');
    const limit = urlParams.searchParams.get('limit');
    const search = urlParams.searchParams.get('search');

    const url = process.env.CONTRIB_API1 + 'icontent/getblogs?key=' + process.env.CONTRIB_API_KEY + '&domain=' + process.env.NEXT_PUBLIC_VERCEL_URL + '&page=' + page + '&limit=' + limit + '&search=' + search;

    const res = await axios.get(url);
    const result = res.data;

    return new Response(JSON.stringify(result.data), { status: 201 });
  } catch (error) {
    console.log('Error: ', error);
  }
};
