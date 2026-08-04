const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const heading = page.getByText('Core Solutions', { exact: true });
  await heading.waitFor({ state: 'visible', timeout: 15000 });
  await heading.scrollIntoViewIfNeeded();

  const getCounter = async () => (await page.getByText(/^\d{2} \/ \d{2}$/).textContent()).trim();

  console.log('t0', await getCounter());
  await page.waitForTimeout(5600);
  console.log('t5.6s (should have auto-advanced to 02/08)', await getCounter());

  // Now hover over the carousel and confirm it STOPS advancing
  await page.mouse.move(400, 600); // somewhere inside the carousel's div
  await page.waitForTimeout(5600);
  const afterHover = await getCounter();
  console.log('after hovering + 5.6s (should be unchanged if pause-on-hover works)', afterHover);

  // Move mouse away, confirm it resumes
  await page.mouse.move(1400, 50);
  await page.waitForTimeout(5600);
  console.log('after moving away + 5.6s (should have advanced again)', await getCounter());

  console.log('ERRORS', JSON.stringify(errors));
  await browser.close();
})().catch((err) => {
  console.error('SCRIPT_FAILED', err);
  process.exit(1);
});
