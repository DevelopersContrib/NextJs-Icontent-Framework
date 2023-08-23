import axios from 'axios';

export const GET = async (request) => {
  try {
    const data = requset.json();
    const params = new URLSearchParams();
    params.append('slug', data.slug);

    const url = process.env.CONTRIB_API1 + 'icontent/Getcontents?key=' + process.env.CONTRIB_API_KEY + '&domain=' + process.env.NEXT_PUBLIC_VERCEL_URL;

    const res = await axios.get(url);

    return new Response(JSON.stringify(res.data), { status: 201 });
  } catch (error) {
    return error;
  }
};
