function domainName(url) {
    let URL = "";
    if(/www/.test(url)) {
        URL = url.split('.');
        return URL[1];
    }
    if (/http/.test(url)) {
      URL = url.split('//');
      URL = URL[1].split('.');
      return URL[0];
    } else {
      URL = url.split('.');
      return URL[0];
    }
}


console.log(domainName('http://google.com'), 'google');
console.log(domainName('http://google.co.jp'), 'google');
console.log(domainName('www.xakep.ru'), 'xakep');
console.log(domainName('https://youtube.com'), 'youtube');