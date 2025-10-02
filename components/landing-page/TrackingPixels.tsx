"use client";

import Script from "next/script";
import { useEffect } from "react";

const TrackingPixels = () => {
  // Pixels de rastreamento das variáveis de ambiente
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const googleAdsPixelId = process.env.NEXT_PUBLIC_GOOGLE_ADS_PIXEL_ID;
  const tiktokPixelId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
  const linkedinPixelId = process.env.NEXT_PUBLIC_LINKEDIN_PIXEL_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;

  // Função para disparar eventos de conversão
  const trackConversion = (eventName: string, value?: number) => {
    // Facebook Pixel
    if (facebookPixelId && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, value ? { value: value, currency: 'BRL' } : {});
    }

    // Google Ads
    if (googleAdsPixelId && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        'send_to': googleAdsPixelId,
        'value': value,
        'currency': 'BRL'
      });
    }

    // TikTok Pixel
    if (tiktokPixelId && typeof window !== 'undefined' && window.ttq) {
      window.ttq.track(eventName, {
        value: value,
        currency: 'BRL'
      });
    }

    // LinkedIn Pixel
    if (linkedinPixelId && typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', { conversion_id: linkedinPixelId });
    }
  };

  // Expor função globalmente para uso em outros componentes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.trackConversion = trackConversion;
    }
  }, []);

  return (
    <>
      {/* Facebook Pixel */}
      {facebookPixelId && (
        <>
          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${facebookPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* Google Ads Pixel */}
      {googleAdsPixelId && (
        <Script
          id="google-ads-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('config', '${googleAdsPixelId}', {
                'send_page_view': false
              });
            `,
          }}
        />
      )}

      {/* TikTok Pixel */}
      {tiktokPixelId && (
        <>
          <Script
            id="tiktok-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function (w, d, t) {
                  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["track","page","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                ttq.load('${tiktokPixelId}');
                ttq.page();
              `,
            }}
          />
        </>
      )}

      {/* LinkedIn Pixel */}
      {linkedinPixelId && (
        <>
          <Script
            id="linkedin-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "${linkedinPixelId}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);})(window.lintrk);
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${linkedinPixelId}&fmt=gif`}
            />
          </noscript>
        </>
      )}

      {/* Hotjar */}
      {hotjarId && (
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${hotjarId},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      )}
    </>
  );
};

// Declarações de tipos para TypeScript
declare global {
  interface Window {
    fbq: any;
    gtag: any;
    ttq: any;
    lintrk: any;
    trackConversion: (eventName: string, value?: number) => void;
  }
}

export default TrackingPixels;
