
# Watson Natural Language Classifier V1

## Parameters:

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable."},

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url



# Actions for Watson Natural Language Classifier V1
classify
classify-collection
create-classifier
delete-classifier
get-classifier
list-classifiers


## classify 
`description`: Classify a phrase.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`classifier_id`
* `required`: true
* `bindTime`: false
* `description`: Classifier ID to use.
`text`
* `required`: true
* `bindTime`: false
* `description`: The submitted phrase.



## classify-collection 
`description`: Classify multiple phrases.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`classifier_id`
* `required`: true
* `bindTime`: false
* `description`: Classifier ID to use.
`collection`
* `required`: true
* `bindTime`: false
* `description`: The submitted phrases.



## create-classifier 
`description`: Create classifier.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`metadata`
* `required`: true
* `bindTime`: false
* `description`: Must be a base64-encoded string. Metadata in JSON format. The metadata identifies the language of the data, and an optional name to identify the classifier. Specify the language with the 2-letter primary language code as assigned in ISO standard 639.  Supported languages are English (`en`), Arabic (`ar`), French (`fr`), German, (`de`), Italian (`it`), Japanese (`ja`), Korean (`ko`), Brazilian Portuguese (`pt`), and Spanish (`es`).

`training_data`
* `required`: true
* `bindTime`: false
* `description`: Must be a base64-encoded string. Training data in CSV format. Each text value must have at least one class. The data can include up to 20,000 records. For details, see [Data preparation](https://console.bluemix.net/docs/services/natural-language-classifier/using-your-data.html).


## delete-classifier 
`description`: Delete classifier.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`classifier_id`
* `required`: true
* `bindTime`: false
* `description`: Classifier ID to delete.


## get-classifier 
`description`: Get information about a classifier.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url




`classifier_id`
* `required`: true
* `bindTime`: false
* `description`: Classifier ID to query.


## list-classifiers 
`description`: List classifiers.

### parameters

`username`
* `required`: false
* `bindTime`: true
* `description`: The username used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`password`
* `required`: false
* `bindTime`: true
* `description`: The password used to authenticate with the service. Username and password credentials are only required to run your application locally or outside of IBM Cloud. When running on IBM Cloud, the credentials will be automatically loaded from the `VCAP_SERVICES` environment variable.

`headers`
* `required`: false
* `bindTime`: true
* `description`: The request headers

`headers[X-Watson-Learning-Opt-Out]`
* `required`:false
* `bindTime`: true
* `description`: opt-out of data collection

`url`
* `required`: false
* `bindTime`: true
* `description`: override default service base url



