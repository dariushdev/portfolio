export const submitHandler = async (id = "", method, body = "") => {
  let url;

  switch (method) {
    case "POST":
      url = process.env.NEXT_PUBLIC_API_CREATE;
      break;
    case "PUT":
      url = process.env.NEXT_PUBLIC_API_UPDATE;
      break;
    case "DELETE":
      url = process.env.NEXT_PUBLIC_API_DELETE;
      break;
  }
  const request = await fetch(url + id, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const response = await request.json();

  return response;
};
