import axios from 'axios';
import { getDomain } from '@/lib/data';

export const GET = async (request) => {
  try {
    const domain = getDomain();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const url = `${process.env.CONTRIB_API1}icontent/getblogscount?key=${process.env.CONTRIB_API_KEY}&domain=${domain}&search=${search}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });

    const result = res.data;

    return new Response(JSON.stringify(result.data), { status: 201 });
  } catch (error) {
    console.log('im here');
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};
