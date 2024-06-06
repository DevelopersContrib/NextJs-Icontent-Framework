import axios from 'axios';
import { useSearchParams } from 'next/navigation';

export const GET = async (request) => {
  try {
    const urlParams = new URL(request.url);
    const slug = urlParams.searchParams.get('slug');

    const url = process.env.CONTRIB_API1 + 'icontent/getcontentbyslug?key=' + process.env.CONTRIB_API_KEY + '&domain=' + process.env.NEXT_PUBLIC_VERCEL_URL + '&slug=' + slug;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const result = res.data;

    return new Response(JSON.stringify(result.data), { status: 201 });
  } catch (error) {
    console.log(error);
    return error;
  }
};
