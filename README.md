# Broadcast Dashboard

A Drupal 7 module that broadcasts pre-written or custom inserted text to specified regions of a website when switched on, acting as an informational alert system.

*This project is currently in Beta. Stable release 1.0 coming soon.*

## Getting Started

After copying the module files to the appropriate Drupal module directory, simply go to the Modules section in your Drupal setup and enable the module. If there is a need to change what gets stored in the database (a table is created upon install), modify the *broadcast_dashboard.install* file as needed. By default, the module table is aptly named *broadcast_dashboard*.

### Prerequisites

Currently, this has only been tested on a Drupal 7 installation. A Drupal 8 port is planned for future development.

### Permissions

Broadcast Dashboard has two permission classes available: *Publish Messages* and *Administer*. Roles with *Publish Messages* are able to set and deploy messages to a set region on the webpage. Roles with *Administer* are able to access module settings, which include the ability to update, add, or delete pre-written messages.

## Deployment

Coming soon.

## Contributing

Coming soon.

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

* [Spectrum](https://github.com/bgrins/spectrum) by [bgrins](https://github.com/bgrins) used for hex color picker