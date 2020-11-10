# Laravel 8, Vue & Tailwind SPA 

> A Laravel, Vue & Tailwind SPA starter project template.

<p align="center">
    <img src="https://i.imgur.com/ds6I5jV.png">
</p>

## Please note
This project is based on an older version of [cretueusebiu/laravel-vue-spa](https://github.com/cretueusebiu/laravel-vue-spa).
All credits should go to [Cretu Eusebiu](https://github.com/cretueusebiu),
this version only contains some changes for the use of Tailwind and to fit our own needs.

## Features

- Laravel 8
- Vue + VueRouter + Vuex + VueI18n (disabled for now) + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification and password reset
- Authentication with JWT
- Socialite integration (disabled for now)
- Tailwind + Font Awesome 5
- Basic Tailwind design for some pages

## To Do - v1.0.0
- [x] ~~Upgrade to Laravel 8~~
- [x] ~~Fix npm hot reloading~~
- [x] ~~Redesign auth pages~~
- [x] ~~Redesign dashboard pages~~
- [x] ~~Remove redundant components~~
- [ ] Sidebar icons & sidebar toggle
- [ ] Create VueI18n components and implement them
- [ ] Create Socialite components for GitHub
- [ ] Fix all tests
- [ ] Add more components
- [ ] Create a changelog and track changes

## Installation

- `composer create-project --prefer-dist skrypt-nl/laravel-vue-tailwind-spa`
- Edit `.env` and set your database & email connection details
- (When installed via git clone or download, run `php artisan key:generate` and `php artisan jwt:secret`)
- `php artisan migrate`
- `npm install`

## Usage

#### Development

```bash
# Build and watch
npm run watch

# Serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Socialite

_Socialite has been integrated, but hasn't been added by default on the login & sign up pages._ 

This project comes with GitHub as an example for [Laravel Socialite](https://laravel.com/docs/8.x/socialite).

To enable the provider create a new GitHub application and use `https://example.com/api/oauth/github/callback` as the Authorization callback URL.

Edit `.env` and set `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` with the keys form your GitHub application.

For other providers you may need to set the appropriate keys in `config/services.php` and redirect url in `OAuthController.php`.

## Email Verification

To enable email verification make sure that your `App\User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.

## Testing

_Currently, the tests are not working properly as these were created for the original project._
_We will do our best to get them up and running as soon as possible again._

```bash
# Run unit and feature tests
vendor/bin/phpunit

# Run Dusk browser tests
php artisan dusk
```

## Changelog

_Coming soon_

~~Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.~~
