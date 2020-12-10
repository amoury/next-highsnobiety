import sanitizeHtml from 'sanitize-html';

const config = {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'ul', 'li', 'p', 'span', 'br', 'div'],
  allowedAttributes: {
    '*': ['class', 'style']
  }
};

const HtmlSanitizer = (html: string): string => {
  return sanitizeHtml(html, config);
}

export default HtmlSanitizer;