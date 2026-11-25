import { useEffect } from 'react';

/**
 * Lightweight, zero-dependency SEO updater component.
 * Dynamically updates document title, meta description, canonical link, and JSON-LD schema.
 */
export default function SEOHead({
  title,
  description,
  canonicalUrl,
  structuredData,
  ogType = 'website'
}) {
  useEffect(() => {
    // 1. Document Title
    const formattedTitle = title.includes('HackSphere') ? title : `${title} | HackSphere`;
    document.title = formattedTitle;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    if (description) {
      metaDesc.setAttribute('content', description);
    }

    // 3. Canonical Link
    const siteUrl = 'https://hack-sphere.netlify.app/';
    const finalCanonical = canonicalUrl ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`) : window.location.href;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', finalCanonical);

    // 4. Open Graph tags
    const setMetaProperty = (prop, content) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMetaProperty('og:title', formattedTitle);
    if (description) setMetaProperty('og:description', description);
    setMetaProperty('og:url', finalCanonical);
    setMetaProperty('og:type', ogType);

    // 5. Structured Data JSON-LD
    let scriptTag = document.getElementById('route-structured-data');
    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'route-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Scroll to top upon page navigation
    window.scrollTo(0, 0);

    return () => {
      const activeScript = document.getElementById('route-structured-data');
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [title, description, canonicalUrl, structuredData, ogType]);

  return null;
}
