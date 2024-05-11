function redirectTo(pageName) {
    switch (pageName) {
      case 'about':
        window.location.href = '#about';
        break;
      case 'github':
        window.location.href = 'https://github.com/';
        break;
      case 'resume':
        window.location.href = '#resume';
        break;
      default:
        //test
        console.log('Page not found.');
    }
  }
  