import { test, expect } from "@playwright/test";

test.describe("app", () => {
  test("sign in", async ({ page }) => {
    //   await setupClerkTestingToken({ page });
    await page.goto("http://localhost:5173");
    await expect(page).toHaveTitle(/Vite + React + TS/);
  });

  //   test("sign up", async ({ page }) => {
  //   await setupClerkTestingToken({ page });
  //   });
});

// Setup a host / Checkly Agent and Private Location if necessary
