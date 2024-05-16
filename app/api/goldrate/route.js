export const GET = async(request) => {
    try {
      const response = await fetch('https://www.bajajfinserv.in/gold-rate-today-in-kalyan');
      const data = await response.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } catch(error) {
      return new Response("Failed to get price", { status: 500 });
    }
    // const url = request.headers.get('targetUrl');
  }
  