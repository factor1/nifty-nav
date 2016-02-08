# Nifty Nav #

Nifty Nav is a sweet navigation tool using Sass and jQuery to make mobile menus
a little bit better.

[Built by factor1](http://factor1studios.com)

## Installing Nifty Nav ##
### Recommended Setup ###
Nifty Nav is available via `bower` and `npm` or by cloning the repo via Git. To
install with  package managers:

`bower install nifty-nav --save`

or

`npm install nifty-nav --save`

Once you have the Nifty Nav files in place, be sure to include the styles in your main `scss`
file. The settings file must be included first. For example:

```scss
@import 'nifty-nav/settings';
@import 'nifty-nav/nifty-nav';
```

Be sure to include `nifty-nav.js` in your workflow/tasks as well.

### Quick Setup ###
Download / Clone via Git and include the files found in `nifty-nav/dist`.

In the `<head>`:
`<link rel="stylesheet" href="css/nifty-nav.min.css">`

Right before the closing `</body>` tag:
`<script src="js/nifty-nav.min.js"></script>`

##Adding the Hamburger
Adding the hamburger to your site is pretty straight forward. Just add the following:

```html
<a id="nifty-nav-toggle"><span></span></a>
```

## Nifty Nav Components ##

* Panel
	The panel is where your content will live.
* Mask
	The mask throws a `<div>` overlay on the `<body>` to dim the content and bring focus to the menu.

## Nifty Nav Features ##
### Closing the panel with Nav Items ###
You can choose to close the nav when clicking on the navigation items in the nav panel. Just place a class of `nifty-nav-item`
on the `li` or `a` element. This can be useful for single page layouts. For example:

```html
<nav>
	<ul>
		<li class=“nifty-nav-item”>
			<a href=“#”>Home</a>
		</li>
		<li class=“nifty-nav-item”>
			<a href=“#”>Portfolio</a>
		</li>
		<li class=“nifty-nav-item”>
			<a href=“#”>About Us</a>
		</li>
		<li class=“nifty-nav-item”>
			<a href=“#”>Contact</a>
		</li>
	</ul>
</nav>
```
### Toggling Sub Menus ###
Nifty Nav allows for toggling of sub menus based off of the WordPress menu structure. The script looks for a `ul` inside of `.nifty-panel` and if it has a child that has the class `.sub-menu` it will toggle its display property. It will add a class of `.menu-opened` which will allow you to style it when the parent `ul` is "opened". By default `.menu-opened` has no styles.

### Nifty Nav Options ###
Nifty Nav has 3 settings/options. `use_mask`, `sub_menus`, & `item_click_close`. By default the settings are:

```
use_mask: true
sub_menus: false
item_click_close: true
```

If you wanted to turn off the mask, for instance, it would look like this:

```js
$(document).ready(function(){
	niftyNav({
		use_mask: false
	})
});
```

## Initializing Nifty Nav
To use Nifty Nav, initialize it at the bottom of your page before the closing `</body>` or in an external JavaScript file (reccomended).

```js
$(document).ready(function(){
	niftyNav();
});
```

#Issues / Bugs / Contributions#
If you have feedback, find a bug, or want to make contributions, please don't hesitate
to open an issue or make a pull request.
