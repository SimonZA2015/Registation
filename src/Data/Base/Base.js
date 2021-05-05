const data = {
    _render: () => {},
    _step: 0,
    _info: {
        name: '',
        birthday: '',
        pass: '',
    },

    setName(text) {
        //добавляем инфу о имени
        if (text.length > 5) {
            try {
                this._info.name = text;
                this.nextStep();
                this.rerender();
                return true;
            }catch (e) {
                return false;
            }
        }else {
            return false
        }
    },

    nextStep() {
      this._step = this._step + 1;
    },

    getStep() {
      return this._step;
    },

    setBirthday(date) {
        //добавляем в инфу о рождении
        try {
            let l = date.split('.');
            alert(l)
            if (l[0].length === 2 && l[1].length === 2 && l[2].length === 4) {
                this._info.birthday = date;
                this.nextStep();
                this.rerender();
                return true;
            }
        }catch (e) {
            return false;
        }
    },

    setPassword(pass, pass1) {
        //добавляем инфу о пароле
        try{
            if (pass === pass1) {
                this._info.pass = pass;
                this.nextStep();
                this.rerender();
                return true;
            }else {
                return false;
            }
        }catch (e) {
            return false;
        }
    },

    getInfo() {
        //дает возможность получить инфо
      return(this._info);
    },

    subscribe(app) {
        //привязываем обновлеие экрана
        this._render = app;
        app();
    },

    rerender() {
        //функ дает возможность обновлять экрна
        this._render();
    }



}

export default data;