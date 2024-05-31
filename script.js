function redirectTo(pageName) {
  switch (pageName) {
    case 'about':
      window.location.href = '#about';
      break;
    case 'github':
      window.location.href = 'https://github.com';
      break;
    case 'resume':
      window.location.href = '#resume';
      break;
    case 'decoder':
      window.location.href = '#base64.html'
    default:
      console.log('Page not found.');
  }
}

function decodeBase64() {
  const input = document.getElementById('base64-input').value;
  try {
      const decoded = atob(input);
      let output = decoded;
      if (isValidURL(decoded)) {
          output = `<a href="${decoded}" target="_blank">${decoded}</a>`;
      }
      document.getElementById('decoded-output').innerHTML = output;
  } catch (e) {
      document.getElementById('decoded-output').innerHTML = 'Invalid Base64 string';
  }
}

function isValidURL(string) {
  try {
      new URL(string);
      return true;
  } catch (_) {
      return false;
  }
}

