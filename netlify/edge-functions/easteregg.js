export default async (request, _context) => {
	if (request.headers.get("User-Agent")?.includes("curl")) {
		return new URL("/script.sh", request.url);
	}
}
