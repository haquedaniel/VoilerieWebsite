(function () {
  const SUPABASE_URL = "https://kldaktksrbskumbhsyji.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_kOTDbqDJfLwRRDlxI2na4A_zwQxiKQL";

  const currentScript = document.currentScript;
  const SITE_NAME = currentScript?.dataset?.site || "default_site";

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function trackPageView() {
    const payload = {
      site: SITE_NAME,
      path: window.location.pathname,
      page_title: document.title || null,
      referrer: document.referrer || null,
      utm_source: getParam("utm_source"),
      utm_medium: getParam("utm_medium"),
      utm_campaign: getParam("utm_campaign"),
      utm_content: getParam("utm_content"),
      utm_term: getParam("utm_term"),
      language: navigator.language || null,
      viewport_width: window.innerWidth || null
    };

    fetch(`${SUPABASE_URL}/rest/v1/site_pageviews`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(payload),
      keepalive: true
    }).catch(() => {});
  }

  trackPageView();
})();