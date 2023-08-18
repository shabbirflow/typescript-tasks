type Method = "GET" | "PUT" | "POST" | "DELETE";

function giveRequestOptions(data: unknown = {}, method: Method): RequestInit {
  if (method == "GET") {
    return {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
    };
  }
  return {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

export async function sendRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const response = await fetch(url, giveRequestOptions(data, method));

  if(!response.ok){
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json() as Promise<T>;
}
