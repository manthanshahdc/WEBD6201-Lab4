/*
| --------------------------------------------------------
| Theme Name : WebPanda
| Theme Version : 1.0
| Theme Date : 07/08/2018
| Platforms : HTML5, CSS3, Bootstrap4, JS, Jquery, Sass
| Theme Author : Yankee Themes
| Author URI : https://themeforest.net/user/yankeethemes
| Author Contact : enquiry[at]yankeeinfoweb[dot]com
| Tags : yankeethemes, yankeeinfoweb, webdesign, boostrap, wordpress, support, html, responsive, css3, wellorganized, retina, animation, html5, sass, support, yakneelife
| File : yit-custom-nav.js
| --------------------------------------------------------
*/

/*
| --------------------------------------------------------
| TABLE OF JS CONTENT
| --------------------------------------------------------
|  Predefine Variable
|  Toggle Fade Navigation
|  Toggle Left Navigation
*/

/* NOTE: This file includes only custom & stylish navigation js */

/* Documend Ready BOC
====================================================== */
jQuery( document ).ready( function( $ ) {
  'use strict';
  var $document = $( document ),
      $yitNavDropdown = $( '.yit-nav-dropdown' );
  var $toggleNav = $( '.toggle-nav' ),
      $bar1 = $( '.bar-1' ),
      $bar2 = $( '.bar-2' ),
      $bar3 = $( '.bar-3' ),
      $body = $( 'body' );

/* Toggle Fade Navigation JS BOC
====================================================== */
function yitTogglenav() {
  $( 'body' ).on( 'touchstart', function( e ) {  // hide browser scroll
    if ( $( 'body' ).hasClass( 'noscroll' ) ) {
      e.preventDefault();
    }
  });
}

// Toggle Function
yitTogglenav();
$document.on( 'click', '.nav-toggle-bar', function() {
  $toggleNav.fadeToggle( 500 );
  $toggleNav = $( '.toggle-nav' ),
  $bar1.toggleClass( 'toggle-bar-animate' ); // bar line1
  $bar2.toggleClass( 'toggle-bar-animate' ); // bar line2
  $bar3.toggleClass( 'toggle-bar-animate' ); // bar line3
  $body.toggleClass( 'noscroll' );
});

// Push ESC Key to Exit
$document.keydown( function( e ) {
  if ( 27 == e.keyCode ) {
    $( '.toggle-nav' ).fadeOut( 500 );
    $bar1.removeClass( 'toggle-bar-animate' ); // bar line1
    $bar2.removeClass( 'toggle-bar-animate' ); // bar line2
    $bar3.removeClass( 'toggle-bar-animate' ); // bar line1
    $body.removeClass( 'noscroll' );
  }
});

/* Toggle Fade Navigation JS EOC */

/* Toggle Navigation Add Class JS
====================================================== */
$( document ).on( 'click', '.nav-toggle-bar', function() {
    $( this ).parent().toggleClass( 'js-side-nav-open' ); // on click appear class
});

/* Dropdown Navigation Add Class JS
====================================================== */
$( '.yit-nav-dropdown' ).on( 'click', function() {
  if ( ! $( this ).hasClass( 'js-nav-active' ) ) {
    $( '.yit-nav-dropdown' ).removeClass( 'js-nav-active' );
  }
    $( this ).toggleClass( 'js-nav-active' );
});

}); //Documend Ready EOC
