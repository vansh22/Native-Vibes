import React, { useEffect } from 'react';

function GoogleTranslateElement() {
  useEffect(() => { 
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: '',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element');
    }
  }, []);

  return (
    <div id="google_translate_element"></div>
   
  );
}

export default GoogleTranslateElement;