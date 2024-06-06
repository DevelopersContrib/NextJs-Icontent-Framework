import axios from 'axios';
import { getDomain } from '@/lib/data';

export async function GET(request, Request) {
  try {
    const domain = getDomain();
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');
    const search = searchParams.get('search');
    const url = process.env.CONTRIB_API1 + 'icontent/getblogs?key=' + process.env.CONTRIB_API_KEY + '&domain=' + domain + '&page=' + page + '&limit=' + limit + '&search=' + search;
    const res = await axios.get(url);
    const result = res.data;
    return new Response(JSON.stringify(result.data), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts created by user', { status: 500 });
  }
}
