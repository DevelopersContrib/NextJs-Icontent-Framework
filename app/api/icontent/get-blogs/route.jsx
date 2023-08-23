import axios from 'axios';

export const GET = async (request) => {
  try {
    // const data = await request.json();
    const urlParams = new URL(request.url);
    const page = urlParams.searchParams.get('page');
    const limit = urlParams.searchParams.get('limit');

    // console.log('REQUEST:', request.url.searchParams);
    const url = process.env.CONTRIB_API1 + 'icontent/Getcontents?key=' + process.env.CONTRIB_API_KEY + '&domain=' + process.env.NEXT_PUBLIC_VERCEL_URL + '&page=' + page + '&limit=' + limit;
    console.log(url);
    const res = await axios.get(url);

    return new Response(JSON.stringify(res.data), { status: 201 });
  } catch (error) {
    console.log('Error: ', error);
  }
};
