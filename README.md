# Eze Feature Toggle
===================================================

This package handles the checking of feature toggles using LaunchDarkly (https://docs.launchdarkly.com/docs). Creation and updates of Feature toggles as well as rules settings and configurations are managed via LaunchDarkly dashboard. 

AWS lambda function plus Redis cache utilized for serverless implementation.


## Prerequisites

Node.js version 6.10.1 or later version. Confirm by running `node -v`



## To include feature toggle package to your app


```
npm i  https://github.com/yeongk/feature_toggle_aws.git --save
```


This package exports two methods:

```
    checkBooleanFeatureToggle()
    checkMultivalueFeatureToggle()

```


## checking toggles in your app

```
const ezeFeatureToggle = require("eze-feature-toggle");

ezeFeatureToggle.checkBooleanFeatureToggle(
    user, feature_togge_name, def_value, optional_param)
        .then(result => {
            ...
        }).catch(err => {
            ...
        })
        
ezeFeatureToggle.checkMultivalueFeatureToggle(
    user, feature_togge_name, def_value, optional_param)
        .then(result => {
            ...
        }).catch(err => {
            ...
        })

```



NOTE: optional_param can be used to provide an additional attribute to be used for the rule evaluation criteria. This could be linked to a deployment-time environment variable. This does not quite fit the original intent of feature toggle, so it should be considered as a last recourse in case all other options are exhausted. For an unauthenticated use case, the user id available from the OS is converted to MD5 hash and used as the user key.           





