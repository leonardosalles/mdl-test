var fields = null,
    count = 1,
    randoms = [];

function generateRandom () {
    var random = Math.floor(Math.random() * 6);

    while (randoms.indexOf(random) > -1) {
        random = Math.floor(Math.random() * 6);
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

    var results = document.querySelector('.results');

    var tpls = [
        'Primeiro',
        'Segundo',
        'Terceiro'
    ];

    var ramdom = generateRandom();
    results.innerHTML = results.innerHTML + '<h2>' + tpls[count - 1] + '</h2><h4>' + wishList[ramdom] + '</h4>';

    if (tpls[count]) {
        var buttonDescobir = document.querySelector('#cal');
        buttonDescobir.innerHTML = tpls[count];
    }

    randoms.push(ramdom);
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