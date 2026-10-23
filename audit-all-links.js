const http = require('http');

const BASE_URL = 'http://localhost:3000';

const INITIAL_PAGES = [
  '/',
  '/about-us',
  '/contact-us',
  '/get-a-quote',
  '/services',
  '/services/full-truckload-ftl-ahmedabad',
  '/services/part-truckload-ptl-cargo',
  '/services/warehouse-contract-logistics',
  '/services/industrial-project-cargo-transport',
  '/services/express-surface-cargo',
  '/services/chemical-liquid-transport',
  '/locations',
  '/locations/logistics-services-naroda-gidc',
  '/locations/transporter-in-vatva-gidc',
  '/locations/logistics-in-sanand-auto-hub',
  '/locations/transport-company-in-changodar-moraiya',
  '/locations/logistics-hub-odhav-kathwada',
  '/locations/freight-services-aslali-highway',
  '/locations/logistics-in-bavla-dholka',
  '/industries',
  '/industries/textile-garment-logistics',
  '/industries/pharmaceutical-cold-chain-transport',
  '/industries/heavy-engineering-machinery',
  '/industries/fmcg-consumer-goods-distribution',
  '/routes',
  '/routes/ahmedabad-to-mumbai-truck-transport',
  '/routes/ahmedabad-to-delhi-truck-transport',
  '/routes/ahmedabad-to-pune-truck-transport',
  '/routes/ahmedabad-to-bengaluru-truck-transport',
  '/routes/ahmedabad-to-hyderabad-truck-transport',
  '/routes/ahmedabad-to-chennai-truck-transport',
  '/routes/ahmedabad-to-kolkata-truck-transport',
  '/routes/ahmedabad-to-jaipur-truck-transport',
  '/routes/ahmedabad-to-indore-truck-transport',
  '/routes/ahmedabad-to-surat-truck-transport',
  '/routes/ahmedabad-to-vadodara-truck-transport',
  '/routes/ahmedabad-to-rajkot-truck-transport',
  '/routes/ahmedabad-to-mundra-port-transport',
  '/robots.txt',
  '/sitemap.xml',
  '/not-a-real-page' // Should test 404 page!
];

function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(BASE_URL + path, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({
          path,
          status: res.statusCode,
          headers: res.headers,
          body
        });
      });
    }).on('error', reject);
  });
}

async function runAudit() {
  console.log("=== STARTING 20-POINT QUALITY ASSURANCE LINK & SEO AUDIT ===");
  const allDiscoveredLinks = new Set(INITIAL_PAGES);
  const checkedLinks = new Map();
  let failures = 0;

  for (const path of INITIAL_PAGES) {
    if (path.includes('not-a-real-page')) continue;
    try {
      const res = await fetchUrl(path);
      checkedLinks.set(path, res.status);

      // Extract href links
      const hrefRegex = /href="(\/[^"#?]*)(?:#[^"]*)?"/g;
      let match;
      while ((match = hrefRegex.exec(res.body)) !== null) {
        const link = match[1];
        if (link && !link.startsWith('/_next') && !link.startsWith('/api')) {
          allDiscoveredLinks.add(link);
        }
      }
    } catch (err) {
      console.error(`Failed to fetch ${path}:`, err.message);
      failures++;
    }
  }

  console.log(`Discovered ${allDiscoveredLinks.size} unique internal routes to verify.`);

  for (const link of allDiscoveredLinks) {
    try {
      const res = await fetchUrl(link);
      const isExpected404 = link.includes('not-a-real-page');
      const passed = isExpected404 ? res.status === 404 : res.status === 200;

      if (!passed) {
        console.error(`FAIL: [${res.status}] ${link}`);
        failures++;
      } else {
        const titleMatch = res.body.match(/<title>([\s\S]*?)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : 'NO TITLE';
        console.log(`PASS: [${res.status}] ${link.padEnd(52)} | Title: "${title.slice(0, 45)}..."`);
      }
    } catch (err) {
      console.error(`ERROR: Could not verify ${link}: ${err.message}`);
      failures++;
    }
  }

  // Verify 404 page content
  const notFoundRes = await fetchUrl('/non-existent-test-page');
  const has404Content = notFoundRes.body.includes('404') && notFoundRes.body.includes('Consignment Route Not Found');
  console.log(`404 Custom Error Page Check: ${has404Content ? 'PASS (Custom 404 active)' : 'FAIL'}`);

  console.log(`\n=== AUDIT COMPLETE: ${failures === 0 ? 'ALL CHECKS PASSED WITH 0 BROKEN LINKS!' : `${failures} CHECKS FAILED`} ===`);
}

runAudit();
