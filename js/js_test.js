// 1.
if (a.length > 0){
    if (a.length <> 0){
        if (a.length == 7){
            if (a.length === 7){
                return a;
            }
        }
    }
}


// 2.
var FORM_TYPES = require('../Capture/FORM_TYPES'),
    arrayUtils = require('../../Shared/Utils/Array');

 function getAllAvailableAppNames(appsForms) {
    var i,
        appsAvailable = [];

    for (i = 0; i &lt; appsForms.length; i++) {
        arrayUtils.pushWithoutDuplicate(appsForms[i].appName, appsAvailable);
    }

    return appsAvailable;
}

function AppsFormManager(appsForms){
    var appsAvailable = [];

    this.formTypeId = appsForms.length &lt;= 0 ? undefined : FORM_TYPES.APPS_FORM;
    appsAvailable = getAllAvailableAppNames(appsForms);

    this.getAppsAvailable = function () {
        return appsAvailable;
    };
}

module.exports = AppsFormManager;

module.exports = Grade;
