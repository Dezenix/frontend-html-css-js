(function () {
    'use strict';

    function ctrls() {
        var _this = this;

        this.counter = 0;
        this.els = {
            decrement: document.querySelector('.ctrl__button--decrement'),
            counter: {
                container: document.querySelector('.ctrl__counter'),
                num: document.querySelector('.ctrl__counter-num'),
                input: document.querySelector('.ctrl__counter-input')
            },
            increment: document.querySelector('.ctrl__button--increment')
        };

        this.decrement = function () {
            var counter = _this.getCounter();
            var nextCounter = (_this.counter > 0) ? --counter : counter;
            _this.setCounter(nextCounter);
        };

        this.increment = function () {
            var counter = _this.getCounter();
            var nextCounter = (counter < 9999999999) ? ++counter : counter;
            _this.setCounter(nextCounter);
        };

        this.getCounter = function () {
            return _this.counter;
        };

        this.setCounter = function (nextCounter) {
            _this.counter = nextCounter;
        };

        this.debounce = function (callback) {
            setTimeout(callback, 100);
        };

        this.render = function (hideClassName, visibleClassName) {
            _this.els.counter.num.classList.add(hideClassName);

            setTimeout(function () {
                _this.els.counter.num.innerText = _this.getCounter();
                _this.els.counter.input.value = _this.getCounter();
                _this.els.counter.num.classList.add(visibleClassName);
            }, 100);

            setTimeout(function () {
                _this.els.counter.num.classList.remove(hideClassName);
                _this.els.counter.num.classList.remove(visibleClassName);
            }, 1100);
        };

        this.ready = function () {
            _this.els.decrement.addEventListener('click', function () {
                _this.debounce(function () {
                    _this.decrement();
                    _this.render('is-decrement-hide', 'is-decrement-visible');
                });
            });

            _this.els.increment.addEventListener('click', function () {
                _this.debounce(function () {
                    _this.increment();
                    _this.render('is-increment-hide', 'is-increment-visible');
                });
            });

            _this.els.counter.input.addEventListener('input', function (e) {
                var parseValue = parseInt(e.target.value);
                if (!isNaN(parseValue) && parseValue >= 0) {
                    _this.setCounter(parseValue);
                    _this.render();
                }
            });

            _this.els.counter.input.addEventListener('focus', function (e) {
                _this.els.counter.container.classList.add('is-input');
            });

            _this.els.counter.input.addEventListener('blur', function (e) {
                _this.els.counter.container.classList.remove('is-input');
                _this.render();
            });
        };
    };

    // init
    var controls = new ctrls();
    document.addEventListener('DOMContentLoaded', controls.ready);
})();