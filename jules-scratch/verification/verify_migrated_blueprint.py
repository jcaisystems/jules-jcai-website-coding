from playwright.sync_api import sync_playwright, Page, expect

def verify_blueprint_migration(page: Page):
    """
    Navigates to the /blueprint page and takes a screenshot to verify the migration.
    """
    # 1. Arrange: Go to the blueprint page.
    page.goto("http://localhost:3000/blueprint", wait_until="networkidle")

    # 2. Wait for the page to load by waiting for the main headline.
    expect(page.get_by_role("heading", name="Unlock 10+ Hours Weekly.")).to_be_visible(timeout=20000)

    # Give animations and other elements time to settle
    page.wait_for_timeout(2000)

    # 3. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/migrated_blueprint.png", full_page=True)

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 1080})
        verify_blueprint_migration(page)
        browser.close()

if __name__ == "__main__":
    main()