// Smoke test: fetches every URL in the sitemap from a running local server and checks SEO basics.
// Usage: npm run build && npm start   (then in another terminal)  node test-site.js [baseUrl]
const BASE = process.argv[2] || "http://localhost:3000";

async function main() {
  const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const paths = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  paths.push("/robots.txt", "/opengraph-image", "/manifest.webmanifest");
  let failed = 0;
  for (const p of paths) {
    const res = await fetch(BASE + p);
    const html = await res.text();
    if (res.status !== 200) { failed++; console.error(`FAIL [${res.status}] ${p}`); continue; }
    if (!res.headers.get("content-type")?.includes("text/html")) { console.log(`PASS [200] ${p}`); continue; }
    const title = (html.match(/<title>(.*?)<\/title>/) || [])[1] || "";
    const checks = {
      canonical: html.includes('rel="canonical"'),
      jsonLd: html.includes("application/ld+json"),
      oneH1: (html.match(/<h1/g) || []).length === 1,
      ogImage: html.includes("og:image"),
      phone: html.includes("8660567050"),
      titleLen: title.replace(/&amp;/g, "&").length <= 72,
    };
    const bad = Object.entries(checks).filter(([, v]) => !v).map(([k]) => k);
    if (bad.length) failed++;
    console.log(`${bad.length ? "WARN" : "PASS"} [200] ${p.padEnd(55)} ${bad.length ? "missing: " + bad.join(", ") : ""}`);
  }
  console.log(`\n${paths.length} URLs checked, ${failed} with problems.`);
  process.exit(failed ? 1 : 0);
}
main();
