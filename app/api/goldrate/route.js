export const GET = async(request) => {
    try {
      const response = await fetch('https://www.bajajfinserv.in/gold-rate-today-in-kalyana');
      const data = await response.json();
      return new Response(response, { status: 200 });
    } catch(error) {
      return new Response(response, { status: 500 });
    }
    // const url = request.headers.get('targetUrl');
  }
  