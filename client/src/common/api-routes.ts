export const baseUrl: string = import.meta.env.VITE_BASE_URL;

export const ApiRoutes = Object.freeze({
  // user service routes
  REGISTER: `${baseUrl}/users/register`,
  LOGIN: `${baseUrl}/users/login`,
});
