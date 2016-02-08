# Nifty Nav #

Nifty Nav is a sweet navigation tool using scss and jQuery to make mobile menus
a little bit better.

HTTP://FACTOR1STUDIOS.COM

**VERSION 1.6.0 01/28/2016**

## Installing Nifty Nav ##
### Recommended Setup ###
Nifty Nav is available via `bower` and `npm` or by cloning the repo via Git. To
install with the package managers:

`bower install nifty-nav --save`

or

`npm install nifty-nav --save`

Once you have the Nifty Nav files in place, be sure to include the styles in your main `scss`
file. The settings file must be included first. For example:

```scss
@import 'nifty-nav/settings/settings';
@import 'nifty-nav/scss/nifty-nav';
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
You can choose to close the nav when clicking on the navigation items in the nav panel. Just place `nifty-nav-item`
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

#Issues / Bugs / Contributions#
If you have feedback, find a bug, or want to make contributions, please don't hesitate
to open an issue or make a pull request.
