export default async (request, context) => {
  if (request.headers.get("User-Agent").includes("curl")) {
    return context.rewrite("/script.sh");
  }
}
