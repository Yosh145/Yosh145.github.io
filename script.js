function redirectTo(pageName) {
  switch (pageName) {
    case 'about':
      window.location.href = '#about';
      break;
    case 'github':
      window.location.href = 'https://github.com/yosh145';
      break;
    case 'resume':
      window.location.href = '#resume';
      break;
    case 'linkedin':
      window.location.href = 'https://www.linkedin.com/in/yash-patel-4202b8295';
      break;
    case 'decoder':
      window.location.href = '/toolbox'
    default:
      console.log('Page not found.');
  }
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementsByClassName("tablinks")[0].click();

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

function encodeURL() {
  const input = document.getElementById('url-input').value;
  const encoded = encodeURIComponent(input);
  document.getElementById('url-output').innerText = encoded;
}

function decodeURL() {
  const input = document.getElementById('url-input').value;
  const decoded = decodeURIComponent(input);
  document.getElementById('url-output').innerText = decoded;
}

function encodeHex() {
  const input = document.getElementById('hex-input').value;
  let hex = '';
  for (let i = 0; i < input.length; i++) {
    hex += input.charCodeAt(i).toString(16);
  }
  document.getElementById('hex-output').innerText = hex;
}

function decodeHex() {
  const input = document.getElementById('hex-input').value;
  let str = '';
  for (let i = 0; i < input.length; i += 2) {
    str += String.fromCharCode(parseInt(input.substr(i, 2), 16));
  }
  document.getElementById('hex-output').innerText = str;
}

function encodeMorse() {
  const input = document.getElementById('morse-input').value;
  const morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
    'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': '/'
  };
  const encoded = input.split('').map(c => morseCode[c.toLowerCase()] || c).join(' ');
  document.getElementById('morse-output').innerText = encoded;
}

function decodeMorse() {
  const input = document.getElementById('morse-input').value;
  const morseCode = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9', '-----': '0', '/': ' '
  };
  const decoded = input.split(' ').map(c => morseCode[c] || c).join('');
  document.getElementById('morse-output').innerText = decoded;
}

function encodeHTML() {
  const input = document.getElementById('html-input').value;
  const encoded = input.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
  document.getElementById('html-output').innerText = encoded;
}

function decodeHTML() {
  const input = document.getElementById('html-input').value;
  const textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  document.getElementById('html-output').innerText = textarea.value;
}

function encodeBinary() {
  const input = document.getElementById('binary-input').value;
  const encoded = input.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  document.getElementById('binary-output').innerText = encoded;
}

function decodeBinary() {
  const input = document.getElementById('binary-input').value;
  const decoded = input.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
  document.getElementById('binary-output').innerText = decoded;
}

function generateQRCode() {
  const input = document.getElementById('qr-input').value;
  const qr = new QRious({
    element: document.getElementById('qr-output'),
    value: input,
    size: 200
  });
}

function isValidURL(string) {
  try {
      new URL(string);
      return true;
  } catch (_) {
      return false;
  }
}