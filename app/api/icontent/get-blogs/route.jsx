import { getDomain } from '@/lib/data';

export const GET = async (request) => {
  try {
    const domain = getDomain();
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');
    const search = searchParams.get('search');
    const url = `${process.env.CONTRIB_API1}icontent/getblogs?key=${process.env.CONTRIB_API_KEY}&domain=${domain}&page=${page}&limit=${limit}&search=${search}`;
    
    console.log('Fetching URL:', url); // Log the URL

    const res = await fetch(url, { revalidate: 3600 });

    if (!res.ok) {
      console.error('Error fetching data from external API:', res.status, res.statusText);
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const contentType = res.headers.get('content-type');
    console.log('Response content type:', contentType); // Log the content type

    let result;
    if (contentType && contentType.includes('application/json')) {
      result = await res.json();
    } else {
      const textResult = await res.text();
      console.warn('Response is not JSON, received text:', textResult); // Log non-JSON response
      throw new TypeError('Response not JSON');
    }

    console.log('Fetched data:', result); // Log the fetched data

    return new Response(JSON.stringify(result), { status: 200 }); // Use 200 for success status
  } catch (error) {
    console.error('Error fetching data:', error); // Log the error
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
