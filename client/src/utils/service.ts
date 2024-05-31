export const baseUrl: string = "http://localhost:5000/api";

export const postRequest = async <T, R>(url: string, body: T): Promise<R> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      contentType: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  if (!response.ok) {
    let message;

    if (data?.message) {
      message = data.message;
    } else {
      message = data;
    }

    return message;
  }
  return data;
};
