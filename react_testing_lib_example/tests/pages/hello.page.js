const { $ } = require('@wdio/globals')
const Page = require('./page');

class HelloPage extends Page {
    get toggleBtn() {
        return $('#toggle');
    }

	get input() {
        return $('#search');
    }

	get helloTitle() {
        return $('#hello');
    }

    async toggleTitleWithInput (text) {
        await this.input.setValue(text);
        await this.toggleBtn.click();
    }

    open () {
        return super.open('/hello');
    }
}

module.exports = new HelloPage();