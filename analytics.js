/* Google Analytics 4 for artisansofsound.in. Loaded on every page with <script src="/analytics.js" defer>.
   Sends page views plus these events:
     whatsapp_click  any link to wa.me (floating button, artist "Book", "Ask for videos" ...)
     phone_click     tel: links
     email_click     mailto: links
     generate_lead   the homepage enquiry form: method = whatsapp | email_copy
   No names, phone numbers or message text are ever sent. */
(function () {
  var ID = 'G-M2K3BLQHZZ';
  if (!ID || window.__aosGA) return;
  window.__aosGA = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', ID);
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);

  function ev(name, params) { try { gtag('event', name, params || {}); } catch (e) {} }
  function label(a) { return ((a.getAttribute('aria-label') || a.textContent || '').replace(/\s+/g, ' ').trim()).slice(0, 80); }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;

    var btn = t.closest('#waBtn, #copyBtn');
    if (btn) {
      var city = document.getElementById('f-city');
      ev('generate_lead', { method: btn.id === 'waBtn' ? 'whatsapp' : 'email_copy', form: 'homepage_enquiry', city: city && city.value ? city.value.trim().slice(0, 40) : '' });
      return;
    }

    var a = t.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href') || '';
    var p = { link_text: label(a), page_path: location.pathname };
    if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(h)) ev('whatsapp_click', p);
    else if (/^tel:/i.test(h)) ev('phone_click', p);
    else if (/^mailto:/i.test(h)) ev('email_click', p);
  }, true);
})();
