const { Asset } = require('parcel-bundler');

class EjsAsset extends Asset {
    constructor(name, options) {
        super(name, options);
        this.type = 'js';
    }

    async generate() {
        return [{
            type: 'js',
            value: `module.exports=${JSON.stringify(this.contents)}`
        }]

    }
}

module.exports = EjsAsset;