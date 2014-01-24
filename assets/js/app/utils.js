MeiweiApp.isCordova = function() {
    return device.cordova;
};

MeiweiApp.getMessage = function() {
    var message = JSON.parse(localStorage.getItem('message'))
    localStorage.removeItem('message')
    return message == null ? {} : message;
};
MeiweiApp.setMessage = function(message) {
    localStorage.setItem('message', JSON.stringify(message));
};

MeiweiApp.showConfirmDialog = function(title, content, onConfirm) {
    var dialog = new (MeiweiApp.View.extend({
        className: 'dialog confirm-dialog',
        template: TPL['confirm-dialog'],
        events: {
            'fastclick .btn-cancel': 'closeDialog',
            'fastclick .btn-confirm': 'confirm'
        },
        closeDialog: function() {
            this.remove();
            $('#dialog-overlay').addClass('hidden');
            this.undelegateEvents();
        },
        openDialog: function() {
            $('body').append(this.el);
            $('#dialog-overlay').removeClass('hidden');
            this.delegateEvents();
        },
        confirm: function() {
            this.closeDialog();
            onConfirm();
        },
        render: function() {
            this.renderTemplate({title: title, content: content});
            this.openDialog();
            return this;
        }
    }))();
    dialog.remove();
    dialog.render();
};

MeiweiApp.showNativeConfirmDialog = function(title, content, onConfirm) {
    if (navigator.notification && _.isFunction(navigator.notification.confirm)) {
        var callback = function(button) { if (button == 2 && onConfirm) onConfirm(); };
        navigator.notification.confirm(content, callback, title, [MeiweiApp._('Cancel'), MeiweiApp._('Confirm')]);
    } else {
        if (confirm(content) == true) onConfirm();
    }
};

MeiweiApp.loadImage = function(img, src, options) {
    options = options || {};
    if (MeiweiApp.isCordova() && options.src_local) img.attr('src', options.src_local);
    var ratio = window.devicePixelRatio ? window.devicePixelRatio: 2;
    var width = options.width || parseInt($('body').innerWidth());
	var height = options.height;
	var size = height ? width * ratio + 'x' + height * ratio + '!' : width * ratio;
	var image_src = src + '?imageMogr/v2/thumbnail/' + size;
    var image = new Image();
    image.onload = function() {
        img.replaceWith(image);
    };
    image.src = image_src;
};

MeiweiApp.loadBgImage = function(el, src, options) {
	options = options || {};
	if (MeiweiApp.isCordova() && options.src_local) el.css('background-image', 'url(' + options.src_local + ')');
	var ratio = window.devicePixelRatio || 2;
	var width = options.width || parseInt($('body').innerWidth());
	var height = options.height;
	var size = height ? width * ratio + 'x' + height * ratio + '^' : width * ratio;
    var image_src = src + '?imageMogr/v2/thumbnail/' + size;
    var image = new Image();
    image.onload = function() {
        el.css('background-image', 'url(' + image_src + ')');
    };
    image.src = image_src;
};

MeiweiApp.calculateDistance = function(lat, lon) {
    var lat1=lat*Math.PI/18000000, lon1 = lon*Math.PI/18000000;
    var lat2=MeiweiApp.coords.latitude*Math.PI/180, lon2=MeiweiApp.coords.longitude*Math.PI/180;
    var R = 6371;
    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    var y = (lat2-lat1);
    var d = Math.sqrt(x*x + y*y) * R;
    if (d > 1) {
        return (parseInt(d * 10) / 10) + 'km';
    } else {
        return parseInt(d * 1000) + 'm';
    }
};
