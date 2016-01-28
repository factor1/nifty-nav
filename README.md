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
@import 'nifty-nav/scss/nifty-nav';
@import 'nifty-nav/settings/settings';
```

Be sure to include `nifty-nav.js` in your workflow/tasks as well.

### Quick Setup ###
Download / Clone via Git. 

###1 - Panel
The panel is where your menu, options, whatever… will live. You must include a .panel class in your stylesheet for it to properly function. Not much more to say about that.



###2- Mask
The mask throws a DIV overlay on the body to dim the content from the user to bring focus to the menu. This must include the .mask class in the stylesheet to work correctly. Feel free to modify the style, but always leave the z-index lower then the .panel class!

###3- Mask Default CSS Styles
This is the default CSS style for the mask that covers the entire window. Reminder: the z-index can be whatever you want as long as it’s less then the z-index of the panel.

```css
.mask{
	background: rgba(0,0,0,0.42);  //You can change this to your liking
	height: 100%;
	width: 100%;   // these just cover the entire screen, so leave it, dingus
	z-index: 9998;
	position: fixed;
	top:0;  // Leave this at 0 to avoid it from pushing with the content.
}
```
###4- Panel Default CSS Styles
This is the default and minimum for the .panel styles. Again, the panel is where you off canvas content will live.

```css
.panel{
	position: absolute;
	width: 100%;
	top: 0;         // keeps the panel up at the top
	display: none;
	-ms-overflow-style:none;  //this disables scrollbars in Internet Explorer
	z-index: 9999;  // this is important. it can be whatever you want as long as its over you content and above the mask
	-webkit-overflow-scrolling: touch;
}

```
###5- Closing the NAV with Nav Items

You can choose to close the nav when clicking on the navigation items in the nav panel. Just place ‘nav-item’ on the LI or A element. For example:

```html

<nav>
    <ul>
        <li class=“nav-item”>
	    <a href=“#”>Home</a>
	</li>
	<li class=“nav-item”>
	    <a href=“#”>Portfolio</a>
	</li>
	<li class=“nav-item”>
	    <a href=“#”>About Us</a>
	</li>
	<li class=“nav-item”>
	     <a href=“#”>Contact</a>
	</li>
    </ul>
</nav>

```

###6- Adding the Hamburger
Adding the hamburger to your site is pretty straight forward. Just add the following, and edit any CSS as needed for placement.

```html
<a id="nav-toggle" class="mm_open"><span></span></a>
```

###7-Toggling sub-menus
Version 1.5.0 brings sub-menu toggling based off of the Wordpress menu structure. Basically what the JS does is look for a `ul` inside of `.panel` and if it has a child that has the class `.sub-menu` it will toggle its display property. It will add a class of `.menu-opened` which will allow you to style it when the parent ul is "opened". By default `.menu-opened` has no styles.

###8- Bugs and Tips
* Don't want the nav to push down the body content? That's fine... just move the <div> containing 'panel' wherever you want the drop down to originate from and play with the positioning of the item in the JS/CSS file.
* Feel free to open an issue if you run into any problems while using Nifty Nav.
