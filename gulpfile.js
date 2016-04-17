var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'resources/';

elixir( function(mix) {
    mix.sass('app.scss');
    mix.browserify('app.js');
});