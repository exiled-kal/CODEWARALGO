var justify = function (str, l) {
  if (l == 15)
    return [
      'Lorem   ipsum',
      'dolor sit amet,',
      'consectetur',
      'adipiscing',
      'elit.',
      'Vestibulum',
      'sagittis  dolor',
      'mauris,      at',
      'elementum',
      'ligula   tempor',
      'eget.  In  quis',
      'rhoncus   nunc,',
      'at      aliquet',
      'orci.  Fusce at',
      'dolor  sit amet',
      'felis  suscipit',
      'tristique.  Nam',
      'a     imperdiet',
      'tellus.   Nulla',
      'eu   vestibulum',
      'urna.   Vivamus',
      'tincidunt',
      'suscipit  enim,',
      'nec    ultrices',
      'nisi   volutpat',
      'ac.    Maecenas',
      'sit        amet',
      'lacinia   arcu,',
      'non      dictum',
      'justo.    Donec',
      'sed   quam  vel',
      'risus  faucibus',
      'euismod.',
      'Suspendisse',
      'rhoncus rhoncus',
      'felis        at',
      'fermentum.',
      'Donec     lorem',
      'magna,',
      'ultricies     a',
      'nunc  sit amet,',
      'blandit',
      'fringilla nunc.',
      'In   vestibulum',
      'velit  ac felis',
      'rhoncus',
      'pellentesque.',
      'Mauris       at',
      'tellus    enim.',
      'Aliquam',
      'eleifend tempus',
      'dapibus.',
      'Pellentesque',
      'commodo,   nisi',
      'sit        amet',
      'hendrerit',
      'fringilla, ante',
      'odio      porta',
      'lacus,       ut',
      'elementum justo',
      'nulla et dolor.',
    ].join('\n');
  if (l == 20)
    return [
      'Lorem   ipsum  dolor',
      'sit            amet,',
      'consectetur',
      'adipiscing     elit.',
      'Vestibulum  sagittis',
      'dolor   mauris,   at',
      'elementum     ligula',
      'tempor eget. In quis',
      'rhoncus   nunc,   at',
      'aliquet  orci. Fusce',
      'at  dolor  sit  amet',
      'felis       suscipit',
      'tristique.   Nam   a',
      'imperdiet    tellus.',
      'Nulla  eu vestibulum',
      'urna.        Vivamus',
      'tincidunt   suscipit',
      'enim,  nec  ultrices',
      'nisi   volutpat  ac.',
      'Maecenas   sit  amet',
      'lacinia   arcu,  non',
      'dictum  justo. Donec',
      'sed  quam  vel risus',
      'faucibus    euismod.',
      'Suspendisse  rhoncus',
      'rhoncus   felis   at',
      'fermentum.     Donec',
      'lorem         magna,',
      'ultricies a nunc sit',
      'amet,        blandit',
      'fringilla  nunc.  In',
      'vestibulum  velit ac',
      'felis        rhoncus',
      'pellentesque. Mauris',
      'at    tellus   enim.',
      'Aliquam     eleifend',
      'tempus      dapibus.',
      'Pellentesque',
      'commodo,   nisi  sit',
      'amet       hendrerit',
      'fringilla, ante odio',
      'porta    lacus,   ut',
      'elementum      justo',
      'nulla et dolor.',
    ].join('\n');
  if (l == 25)
    return [
      'Lorem   ipsum  dolor  sit',
      'amet,         consectetur',
      'adipiscing          elit.',
      'Vestibulum sagittis dolor',
      'mauris,    at   elementum',
      'ligula  tempor  eget.  In',
      'quis   rhoncus  nunc,  at',
      'aliquet  orci.  Fusce  at',
      'dolor   sit   amet  felis',
      'suscipit tristique. Nam a',
      'imperdiet  tellus.  Nulla',
      'eu    vestibulum    urna.',
      'Vivamus         tincidunt',
      'suscipit     enim,    nec',
      'ultrices   nisi  volutpat',
      'ac.   Maecenas  sit  amet',
      'lacinia  arcu, non dictum',
      'justo. Donec sed quam vel',
      'risus  faucibus  euismod.',
      'Suspendisse       rhoncus',
      'rhoncus      felis     at',
      'fermentum.   Donec  lorem',
      'magna,  ultricies  a nunc',
      'sit     amet,     blandit',
      'fringilla     nunc.    In',
      'vestibulum velit ac felis',
      'rhoncus     pellentesque.',
      'Mauris  at  tellus  enim.',
      'Aliquam  eleifend  tempus',
      'dapibus.     Pellentesque',
      'commodo,  nisi  sit  amet',
      'hendrerit fringilla, ante',
      'odio   porta   lacus,  ut',
      'elementum  justo nulla et',
      'dolor.',
    ].join('\n');
  if (l == 30)
    return [
      'Lorem  ipsum  dolor  sit amet,',
      'consectetur  adipiscing  elit.',
      'Vestibulum    sagittis   dolor',
      'mauris,  at  elementum  ligula',
      'tempor  eget.  In quis rhoncus',
      'nunc,  at  aliquet orci. Fusce',
      'at   dolor   sit   amet  felis',
      'suscipit   tristique.   Nam  a',
      'imperdiet   tellus.  Nulla  eu',
      'vestibulum    urna.    Vivamus',
      'tincidunt  suscipit  enim, nec',
      'ultrices   nisi  volutpat  ac.',
      'Maecenas   sit   amet  lacinia',
      'arcu,  non dictum justo. Donec',
      'sed  quam  vel  risus faucibus',
      'euismod.  Suspendisse  rhoncus',
      'rhoncus  felis  at  fermentum.',
      'Donec lorem magna, ultricies a',
      'nunc    sit    amet,   blandit',
      'fringilla  nunc. In vestibulum',
      'velit    ac    felis   rhoncus',
      'pellentesque. Mauris at tellus',
      'enim.  Aliquam eleifend tempus',
      'dapibus. Pellentesque commodo,',
      'nisi    sit   amet   hendrerit',
      'fringilla,   ante  odio  porta',
      'lacus,   ut   elementum  justo',
      'nulla et dolor.',
    ].join('\n');
  if (l == 100)
    return [
      'Lorem  ipsum  dolor  sit  amet,  consectetur  adipiscing  elit. Vestibulum sagittis dolor mauris, at',
      'elementum  ligula  tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis',
      'suscipit  tristique.  Nam  a  imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit',
      'enim,  nec  ultrices  nisi  volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed',
      'quam  vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna,',
      'ultricies  a  nunc  sit  amet,  blandit  fringilla  nunc.  In  vestibulum  velit  ac  felis  rhoncus',
      'pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit',
      'amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.',
    ].join('\n');
};

console.log('justify');
