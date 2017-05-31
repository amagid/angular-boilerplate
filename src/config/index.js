import baseConfig from './base';
import constants from './constants';
import urls from './urls';

export default {
    get
}

function get() {
    return {
        constants: constants[baseConfig.ENV],
        urls: urls[baseConfig.ENV]
    };
}

