const crypto = require('crypto');
const ezeFeatureToggle = require('./lib/init');

function checkBooleanFeatureToggle(user, featureToggle, def, option) {
    if (!ezeFeatureToggle.ldAvailable) {
        return Promise.resolve(false);
    }

    return new Promise((resolve, reject) => {
        ezeFeatureToggle.ldClient.variation(featureToggle, getKey(user, option), (def ? def : false),
            (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    if (res) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            });
    });
}

function checkMultivalueFeatureToggle(user, featureToggle, def, option) {
    if (!ezeFeatureToggle.ldAvailable) {
        return Promise.reject(false);
    }

    return new Promise((resolve, reject) => {
        ezeFeatureToggle.ldClient.variation(featureToggle, getKey(user, option), (def ? def : ""),
            (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    if (res) {
                        resolve(res);
                    } else {
                        resolve();
                    }
                }
            });
    });
}

function getKey(user, option) {

    if (user) {
        return {
            key: user.ResourceId,
            custom: {
                firmId: user.UserSession.FirmId,
                firmAuthToken: user.UserSession.FirmAuthToken,
                environment: user.UserSession.EnvironmentName,
                userId: user.UserSession.UserId,
                resourceId: user.ResourceId,
                firmColor: user.FirmColor
            }
        }
    } else {
        return {
            key: crypto.createHash('md5').update(process.env.USER ? process.env.USER : process.env.USERNAME).digest('hex'),
            custom: {
                option: option
            }
        }

    }
}

module.exports = {
    checkBooleanFeatureToggle,
    checkMultivalueFeatureToggle
}