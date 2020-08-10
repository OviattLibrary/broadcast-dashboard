# Broadcast Dashboard
<p align="center">
![Broadcast Dashboard working on a website](https://library.csun.edu/sites/default/files/users/Web%20Assistant/bd_cover_example.png)
<caption>Broadcast Dashboard activated on a Drupal website</`caption>
</p>

A Drupal 7 module that broadcasts pre-written or custom inserted text to specified regions of a website when switched on, acting as an informational alert system.

## Overview

* **Quickly toggle or schedule alert messages.** Options for pre-written and custom message selection in a simple form setup allow for quick deployment from any device. Messages can also be scheduled for publishing or unpublishing via Drupal's cron hook.
* **Targeted display.** Set a specific site region to display your message, allowing you to control visibility.
* **Cross-server message deployment.** Both styled and plain-text RSS feed options are available for multi-server utilization.
* **Built with security in mind.** Dual user roles come standard to ensure only authorized persons can publish or manage broadcasts.
<p align="center">
![Broadcast Dashboard Settings Page to publish](https://library.csun.edu/sites/default/files/users/Web%20Assistant/bd_settings_1.png)
![Broadcast Dashboard Settings Page to manage](https://library.csun.edu/sites/default/files/users/Web%20Assistant/bd_settings_2.png)
</p>
## Getting Started

After copying the module files to the appropriate Drupal module directory, simply go to the Modules section in your Drupal setup and enable the module. If there is a need to change what gets stored in the database (a table is created upon install), modify the *broadcast_dashboard.install* file as needed.

Note that renaming the database table name is not something supported at this time, but will be implemented in a future version.

### Prerequisites

Currently, this has only been tested on a Drupal 7 installation. A Drupal 8 port is planned for future development.

### Permissions

Broadcast Dashboard has two permission classes available: *Publish Messages* and *Administer*. Roles with *Publish Messages* are able to set and deploy messages to a set region on the webpage. Roles with *Administer* are able to access module settings, which include the ability to update, add, or delete pre-written messages.

### Styling Messages

Broadcast Dashboard supports both class (full manipulation) and hex (for background color) stylings.

By default, the module comes with basic Bootstrap v3.3.7 CSS classes for [*alert*](https://getbootstrap.com/docs/3.3/components/#alerts) and [*jumbotron*](https://getbootstrap.com/docs/3.3/components/#jumbotron) in the *broadcast_dashboard_style.css* file. Alert color classes include *success* (green), *info* (blue), *warning* (yellow), and *danger* (red).

## Deployment

Coming soon.

## Contributing

Please read the [Contributing instructions](https://github.com/OviattLibrary/broadcast-dashboard/blob/master/CONTRIBUTING.md) for details on bug reporting or contributing code.

## Versioning

Version numbers are assigned using the [Semver](https://semver.org) format.

## Authors

**Oviatt Library Web Team**
* **Sam Thacker** - *Primary development* - [codedeeply](https://github.com/codedeeply)
* **David Morck** - *Debugging assistance* - [dmorck](https://github.com/dmorck)

See also the list of [contributors](https://github.com/OviattLibrary/broadcast-dashboard/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/OviattLibrary/broadcast-dashboard/blob/master/LICENSE.md) file for details.

## Acknowledgments

* [Elizabeth Altman](https://library.csun.edu/ealtman)
* [Spectrum](https://github.com/bgrins/spectrum) by [bgrins](https://github.com/bgrins) used for hex color picker
