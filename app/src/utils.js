function fixPathname(path) {
  if (path.endsWith("/")) path += "index";
  if (!path.endsWith(".php")) path += ".php";
  return path;
}

export { fixPathname };
