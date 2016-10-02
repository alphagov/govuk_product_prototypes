# PHP client

Provided integration with the GOV.UK Notify API for sending emails and SMS messages.

For more details, see: https://www.notifications.service.gov.uk/

#### PSR-7 HTTP

The Notify PHP Client is based on a PSR-7 HTTP model. You therefore need to pick your preferred HTTP Client library to use.

We will show examples here using the Guzzle v6 Adapter.

Setup instructions are also available for [Curl](docs/curl-client-setup.md) and [Guzzle v5](docs/guzzle5-client-setup.md).

## Installing

The Notify PHP Client can be installed with [Composer](https://getcomposer.org/). Run this command:

```sh
composer require php-http/guzzle6-adapter alphagov/notifications-php-client
```

## Usage

Assuming you've installed the package via Composer, the Notify PHP Client will be available via the autoloader.

Create a (Guzzle v6 based) instance of the Client using:

```php
$notifyClient = new \Alphagov\Notifications\Client([
    'serviceId'     => '{your service id}',
    'apiKey'        => '{your api key}',
    'httpClient'    => new \Http\Adapter\Guzzle6\Client
]);
```

You are then able to access the Notify API using ``$notifyClient``.

If you need to access an environment other than production, you can pass the base URL in via the `baseUrl` key in the constructor:

```php
'baseUrl' => '{api base url}'
```

#### Sending an email

The method signature is:
```php
sendEmail( $to, $template, array $personalisation = array() )
```

Where

* **$to** A required _string_ holding the recipient's email address.
* **$template** A required _string_ that identifies a valid template. Templates are created in the admin tools.
* **$personalisation** An optional _array_ holding any personalisation placeholders required by the template.

An example request would look like:

```php
try {

    $response = $notifyClient->sendEmail( 'betty@exmple.com', 'df10a23e-2c0d-4ea5-87fb-82e520cbf93c', [
        'name' => 'Betty Smith',
        'dob'  => '12 July 1968'
    ]);

} catch (NotifyException $e){}
```

**$response** will be an _array_ containing the decoded JSON response from the Notify API. For details, see: https://www.notifications.service.gov.uk/documentation

An instance (or sub-class) of ``Alphagov\Notifications\Exception\NotifyException`` will be throw if an error occurs.

#### Sending an SMS

The method signature is:
```php
sendSms( $to, $template, array $personalisation = array() )
```

Where

* **$to** A required _string_ holding the recipient's mobile number. The number must:
	* be a UK mobile number
	* start +44
	* not have a leading zero
	* not have any whitespace, punctuation etc.
* **$template** A required _string_ that identifies a valid template. Templates are created in the admin tools.
* **$personalisation** An optional _array_ holding any personalisation placeholders required by the template.

An example request would look like:

```php
try {

    $response = $notifyClient->sendSms( '+447777111222', 'df10a23e-2c6d-4ea5-87fb-82e520cbf93a', [
        'name' => 'Betty Smith',
        'dob'  => '12 July 1968'
    ]);

} catch (NotifyException $e){}
```

**$response** will be an _array_ containing the decoded JSON response from the Notify API. For details, see: https://www.notifications.service.gov.uk/documentation

An instance (or sub-class) of ``Alphagov\Notifications\Exception\NotifyException`` will be throw if an error occurs.

#### Looking up the details of a Notification

The method signature is:
```php
getNotification( $notificationId )
```

Where

* **$notificationId** A required _string_ holding the notifications's ID; which would have been returned in response to sending a message.

An example request would look like:

```php
try {

    $response = $notifyClient->getNotification( 'c32e9c89-a423-42d2-85b7-a21cd4486a2a' );

} catch (NotifyException $e){}
```

**$response** will be an _array_ containing the decoded JSON response from the Notify API. For details, see: https://www.notifications.service.gov.uk/documentation

Or if no notification was found for the passed ID, $response will be ``NULL``.

An instance (or sub-class) of ``Alphagov\Notifications\Exception\NotifyException`` will be throw if an error occurs.

#### Returning a list of Notifications

The method signature is:
```php
listNotifications( array $filters = array() )
```

Where

* **$filters** An optional _array_ which applies filters to the request. A requires can use zero or more filters. Supported filtered:
    * ``status``; with values:
        * sending
        * delivered
        * failed
    * ``template_type``; with values:
        * email
        * sms
    * ``page``; takes an _int_ for pagination. Default is 1.

An example request would look like:

```php
try {

    $response = $notifyClient->listNotifications([
        'status' => 'delivered',
        'template_type' => 'sms'
    ]);

} catch (NotifyException $e){}
```

**$response** will be an _array_ containing the decoded JSON response from the Notify API. For details, see: https://www.notifications.service.gov.uk/documentation

An instance (or sub-class) of ``Alphagov\Notifications\Exception\NotifyException`` will be throw if an error occurs.

## Development

#### Tests

To run the tests:

```sh
vendor/bin/phpspec run --format=pretty
```

## License

The Notify PHP Client is released under the MIT license, a copy of which can be found in [LICENSE](LICENSE.txt).
