import { useEffect } from 'react';

const ShoeFilters = () => {
  useEffect(() => {
    // Load the HTML content directly into the component
    const loadShoeFilters = async () => {
      try {
        const response = await fetch('/shoe-filters.html');
        const htmlContent = await response.text();
        
        // Extract only the body content and styles
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        
        // Get the styles from the HTML
        const styleElement = doc.querySelector('style');
        if (styleElement) {
          const existingStyle = document.querySelector('#shoe-filters-styles');
          if (!existingStyle) {
            const newStyle = document.createElement('style');
            newStyle.id = 'shoe-filters-styles';
            newStyle.textContent = styleElement.textContent;
            document.head.appendChild(newStyle);
          }
        }
        
        // Get the body content
        const bodyContent = doc.querySelector('body');
        const container = document.getElementById('shoe-filters-container');
        if (bodyContent && container) {
          container.innerHTML = bodyContent.innerHTML;
          
          // Re-execute any inline scripts
          const scripts = container.querySelectorAll('script');
          scripts.forEach((script) => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
            document.body.removeChild(newScript);
          });
        }
      } catch (error) {
        console.error('Error loading shoe filters:', error);
      }
    };
    
    loadShoeFilters();
    
    // Cleanup styles on unmount
    return () => {
      const styleElement = document.querySelector('#shoe-filters-styles');
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <div id="shoe-filters-container" style={{ minHeight: '100vh' }}>
      {/* Content will be loaded here */}
    </div>
  );
};

export default ShoeFilters;