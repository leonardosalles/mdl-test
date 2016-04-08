var fields = null,
    count = 1,
    randoms = [],
    randomsBg = [],
    prefix = 'http://www.intrawallpaper.com',
    bgs = ["/static/cache/f4/4a/f44af97d9d913f9f36d8aa2379837f70.jpg", "/static/cache/c3/16/c316ee0128cf6b471b894e089627c809.jpg", "/static/cache/05/d9/05d92fa09134653de06016fa13324758.jpg", "/static/cache/42/40/424036086c300f9b64a43d1bea201a33.jpg", "/static/cache/09/34/09348418b23ea1648664d5886ba87e6d.jpg", "/static/cache/84/50/845094b3217550e9f154396831084f75.jpg", "/static/cache/f2/ff/f2ffd84727b8afb9f229dcc6624082f1.jpg", "/static/cache/0b/08/0b0874a9bfd6aa777597dba3d6590901.jpg", "/static/cache/d6/3c/d63c5c77e8fec4c5c5483777dea1799e.jpg", "/static/cache/ce/7b/ce7bfe283c4790345007d5c826adcf63.jpg", "/static/cache/4a/4a/4a4ab5561ec51042729ebf641217582a.jpg", "/static/cache/5a/c9/5ac9e0838a224275cce33136ac346cf7.jpg", "/static/cache/e5/7d/e57de23d37019595789213abd6d55f68.jpg", "/static/cache/03/69/0369d384251e8965ee7efb6b706fbf1f.jpg", "/static/cache/bf/02/bf024b90e3d6cd66cef2e419897a9cda.jpg", "/static/cache/9e/d8/9ed8660adefa56a206422a9bf67dd5bd.jpg", "/static/cache/ef/06/ef068629768e1173823664f6759621c3.jpg", "/static/cache/85/5f/855f4ca141661cf9d22af576aec05573.jpg", "/static/cache/2c/37/2c37f25101f1e426605d5f112041aa27.jpg", "/static/cache/58/20/58203880499f48e93724f634d259a403.jpg", "/static/cache/0c/33/0c332346bd3805de5f6ccb2fd05d2662.jpg", "/static/cache/f6/a4/f6a467699b4a845bce18b9fd6adcce1f.jpg", "/static/cache/cd/2e/cd2e0162c1f2c784b7130e160443f9d9.jpg", "/static/cache/b6/ab/b6ab633c73613660b58d660cc0119ed6.jpg", "/static/cache/a0/12/a0129c4f5e5226c1b6144dc8ce77fa38.jpg", "/static/cache/fb/8b/fb8b121cdc1a750fee8d484e66d3795c.jpg", "/static/cache/b3/3e/b33e468022d235095b198390bd8fbcd4.jpg", "/static/cache/93/ba/93ba76382e1521023723bcd5c7e08af8.jpg", "/static/cache/dd/0a/dd0a0ba402701969670deba97f889891.jpg", "/static/cache/93/76/9376651af593f1860c0c2141ba69fb5c.jpg", "/static/cache/7d/f7/7df7dc5e032f244d48157cd729718cc5.jpg", "/static/cache/f9/d1/f9d1dda36d4f0f8aae87b0c78bc080d5.jpg", "/static/cache/ff/ed/ffed2702c596d2da12ee75c12cfe01e4.jpg", "/static/cache/ba/d1/bad15f232769c9105c86310a1ec16cf0.jpg", "/static/cache/d0/cd/d0cdafc051c38abadd2eb5015f0a83b5.jpg", "/static/cache/77/11/7711472629bbc3b3d516aaf400011b71.jpg", "/static/cache/00/14/0014ccceb254ad9accfbbb25b1142d42.jpg", "/static/cache/20/62/20623165626c4ccaafd6c3e29c99564a.jpg", "/static/cache/af/87/af87c1d75e20f943bbf941b8c471f0a0.jpg", "/static/cache/1b/f0/1bf0fb2bf7dd2b1211852f8e79224f73.jpg"];

function salvar (text, bg) {
    var items = localStorage.getItem('savedTexts'),
        arr = [];

    if (items) {
        arr = JSON.parse(items);
    }

    var date = new Date(),
        formattedDate = (date.getDay() < 9 ? '0' + date.getDay() : date.getDay()) + '/' + (date.getMonth() < 9 ? '0' + date.getMonth() : date.getMonth()) + '/' + (date.getFullYear()),
        formattedHour = (date.getHours() < 9 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 9 ? '0' + date.getSeconds() : date.getSeconds());

    arr.push({id: arr.length || 0, text: text, bg: bg, date: formattedDate + ' - ' + formattedHour});
    localStorage.setItem('savedTexts', JSON.stringify(arr));

    var dialogSaved = document.querySelector('#dialog-saved');
    if (! dialogSaved.showModal) {
        dialogPolyfill.registerDialog(dialogSaved);
    }

    dialogSaved.showModal();
}

function generateRandom () {
    var random = Math.floor(Math.random() * 6);

    while (randoms.indexOf(random) > -1) {
        random = Math.floor(Math.random() * 6);
    }

    return random;
}

function generateRandomBg () {
    var random = Math.floor(Math.random() * 41);

    while (randomsBg.indexOf(random) > -1) {
        random = Math.floor(Math.random() * 41);
    }

    return random;
}

function generate () {
    var dialog = document.querySelector('#dialog-length');
    if (! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }

    if (!fields) {
        dialog.showModal();
        return;
    }

    if (fields && fields.length < 5) {
        dialog.showModal();
        return;
    }

    if (count >= 4) {
        var dialogResults = document.querySelector('#dialog-results');
        if (! dialogResults.showModal) {
            dialogPolyfill.registerDialog(dialogResults);
        }
        dialogResults.showModal();
        return;
    }

    var wishList = [];

    if (fields.length < 6) {
        fields = document.querySelectorAll('.mdl-textfield');
    }

    for (var i=0,n=fields.length; i<n; i++) {
        wishList.push(fields[i].querySelector('input').value);
    }

    for (var j=0,k=wishList.length; j<k; j++) {
        var item = wishList[j];

        if (!item) {
            var dialogInput = document.querySelector('#dialog-input');
            if (! dialogInput.showModal) {
                dialogPolyfill.registerDialog(dialogInput);
            }
            dialogInput.showModal();
            return;
        }
    }

    var layout = document.querySelector('.mdl-layout__content');
    layout.scrollTop = 0;

    var results = document.querySelector('.results');

    var tpls = [
        'Primeiro',
        'Segundo',
        'Terceiro'
    ];

    var ramdomBg = generateRandomBg();
    var ramdom = generateRandom();

    var obj = {text: wishList[ramdom], bg: bgs[ramdomBg]};

    var tplCard = '<div class="demo-card-wide mdl-card mdl-shadow--2dp">'+
                    '<div class="mdl-card__title" style="background-image: url(' + prefix + obj.bg + ')">'+
               '     <h2 class="mdl-card__title-text">' + tpls[count - 1] + '</h2>'+
                '</div>'+
                '<div class="mdl-card__supporting-text">' + obj.text + '</div>'+
                '<div class="mdl-card__actions mdl-card--border">'+
               '     <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="salvar(\'' + obj.text + '\', \'' + obj.bg + '\')">'+
               '         Salvar'+
               '     </a>'+
               ' </div>'+
               ' <div class="mdl-card__menu">'+
               '     <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">'+
               '         <i class="material-icons">favorite</i>'+
               '     </button>'+
              '  </div>'+
            '</div>';

    results.insertAdjacentHTML('afterBegin', tplCard);

    var buttonDescobir = document.querySelector('#cal');

    if (tpls[count]) {
        buttonDescobir.innerHTML = tpls[count];
    } else {
        buttonDescobir.parentElement.innerHTML = '<span id="cal">Pronto!</span>';
    }

    randoms.push(ramdom);
    randomsBg.push(ramdomBg);
    count++;
}

function addField () {
    fields = document.querySelectorAll('.mdl-textfield');

    var wrapper = document.querySelector('.field-wrapper');
    if (wrapper) {
        var index = (fields.length + 1);

        if (index === 7) {
            var dialog = document.querySelector('dialog');

            if (! dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }

            dialog.showModal();
            return;
        }

        var div = document.createElement('div');
        div.className = 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';

        var label = document.createElement('label');
        label.className = 'mdl-textfield__label';
        label.attributes.for = 'item' + index;
        label.innerHTML = 'Item ' + index + '...';

        var input = document.createElement('input');
        input.appendChild(label);
        input.className = 'mdl-textfield__input';
        input.attributes.type = 'text';
        input.attributes.id = 'item' + index;

        div.appendChild(input);
        div.appendChild(label);

        componentHandler.upgradeElement(div);
        wrapper.appendChild(div);

        input.focus();
    }
}