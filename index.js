const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  try {
    await page.goto("https://downloader.free.nf/?wp_automatic=cron", {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    console.log("✅ Cron URL visited successfully");
  } catch (err) {
    console.error("❌ Error visiting cron URL:", err);
  }

  await browser.close();
})();
