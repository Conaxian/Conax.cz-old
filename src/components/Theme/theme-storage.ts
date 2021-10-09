import Cookies from "universal-cookie";

const cookies = new Cookies();

export function getTheme() {
  const cookieTheme: string = cookies.get("theme");
  if (cookieTheme) return cookieTheme;

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return systemDark ? "dark" : "light";
}

export function setTheme(theme: string) {
  const expiration = new Date();
  expiration.setMonth(expiration.getMonth() + 6);

  cookies.set("theme", theme, {
    path: "/",
    expires: expiration,
  });
}
