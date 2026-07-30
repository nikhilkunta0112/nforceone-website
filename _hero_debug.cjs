const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', msg => { if (msg.type() === 'error' || msg.type() === 'warning') errors.push(msg.type() + ': ' + msg.text()); });

  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForSelector('text=Transforming Technology with');

  console.log('--- initial errors ---');
  console.log(JSON.stringify(errors, null, 2));

  // Check button existence
  const nextBtn = await page.$('button[aria-label="Next slide"]');
  console.log('Next button found:', !!nextBtn);

  await page.screenshot({ path: 'C:\\Users\\Kunta Nikhil\\Website_v1\\_debug_before.png' });

  await page.click('button[aria-label="Next slide"]');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'C:\\Users\\Kunta Nikhil\\Website_v1\\_debug_after_click.png' });

  const h1Text = await page.textContent('h1');
  console.log('H1 after click Next:', h1Text);

  // wait for autoplay to advance (without hover, since click already moved mouse there - hover pause is on section)
  await page.mouse.move(5, 5); // move mouse away from hero section
  await page.waitForTimeout(4500);
  const h1Text2 = await page.textContent('h1');
  console.log('H1 after waiting 4.5s (autoplay):', h1Text2);

  await page.screenshot({ path: 'C:\\Users\\Kunta Nikhil\\Website_v1\\_debug_after_autoplay.png' });

  console.log('--- final errors ---');
  console.log(JSON.stringify(errors, null, 2));

  await browser.close();
})();
