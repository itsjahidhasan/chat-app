var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const PostRequest = async <T, R>(url: string, body: T): Promise<R> => {
  const response = await fetch(url, {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    body: JSON.stringify(body),
  });

  const res = await response.json();

  return res;
};
