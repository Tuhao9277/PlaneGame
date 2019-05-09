class Base {

    width() {
        if (!this.$width)
            this.$width = this.el.offsetWidth;
        return this.$width;
    }

    height() {
        if (!this.$height)
            this.$height = this.el.offsetHeight;
        return this.$height;
    }
    left(val) {
		if (val !== undefined) {
			this.el.style.left = val + "px";
		} else {
			return this.el.offsetLeft;
		}
	}
	top(val) {
		if (val !== undefined) {
			this.el.style.top = val + "px";
		} else {
			return this.el.offsetTop;
		}
	}


}
Base.constant = {
    PLANE_TYPE_BIG: Symbol(), // 大飞机
    PLANE_TYPE_MID: Symbol(),  // 中等飞机
    PLANE_TYPE_SML: Symbol()    // 小飞机

}