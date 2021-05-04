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
        try {
            this._info.name = text;
            this.setStep();
            this.rerender();
            return true;
        }catch (e) {
            return false;
        }
    },

    setStep() {
      this._step = this._step + 1;
    },

    getStep() {
      return this._step;
    },

    setBirthday(date) {
        //добавляем в инфу о рождении
        try {
            this._info.birthday = date;
            this.setStep();
            this.rerender();
            return true;
        }catch (e) {
            return false;
        }
    },

    setPassword(pass, pass1) {
        //добавляем инфу о пароле
        try{
            if (pass === pass1) {
                this._info.pass = pass;
                this.setStep();
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
        //дает возможность обновлять экран
        this._render = app;
        app();
    },

    rerender() {
        this._render();
    }



}

export default data;