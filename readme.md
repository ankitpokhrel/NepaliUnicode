**Unicode Nepali Conversion Tool**
*by [Ankit Pokhrel] (http://ankitpokhrel.com.np)*

* Application Name: Unicode Nepali Conversion Tool
* Developer: [Ankit Pokhrel] (http://ankitpokhrel.com.np)
* Contributors: none
* Demo: http://ankitpokhrel.com.np/demo/nepali-unicode
* Donate link: http://ankitpokhrel.com.np/
* Tags: Unicode Nepali, Type in Nepali, Nepali Romanized, Nepalese
* License: GPLv3 or later
* License URI: http://www.gnu.org/licenses/
 
**Description**
  
A Unicode Nepali Conversion Tool. This tool uses Google Transliteration API to convert English to Nepali.
The Google Closure Library is used for Rich Text Editor interface.

**Installation**

1. Download, unzip and upload to your project directory
2. Add init.js to your page
3. Add required css and scripts to your page header.[Copy and paste the following code]
```js
  <script type="text/javascript">
      // Load the Google Transliteration API
      google.load('elements', '1', {
          packages : "transliteration"
      });
  </script>
  <script src="https://closure-library.googlecode.com/svn/trunk/closure/goog/base.js"></script>
  <script>
      goog.require('goog.dom');
      goog.require('goog.editor.Command');
      goog.require('goog.editor.Field');
      goog.require('goog.editor.Field.EventType');
      goog.require('goog.editor.plugins.BasicTextFormatter');
      goog.require('goog.editor.plugins.EnterHandler');
      goog.require('goog.editor.plugins.HeaderFormatter');
      goog.require('goog.editor.plugins.LinkBubble');
      goog.require('goog.editor.plugins.LinkDialogPlugin');
      goog.require('goog.editor.plugins.ListTabHandler');
      goog.require('goog.editor.plugins.LoremIpsum');
      goog.require('goog.editor.plugins.RemoveFormatting');
      goog.require('goog.editor.plugins.SpacesTabHandler');
      goog.require('goog.editor.plugins.UndoRedo');
      goog.require('goog.ui.ToolbarSeparator');
      goog.require('goog.ui.editor.DefaultToolbar');
      goog.require('goog.ui.editor.ToolbarController');
      goog.require('goog.ui.editor.ToolbarFactory');
  </script>

  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/demos/css/demo.css">
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/button.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/dialog.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/linkbutton.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/menu.css">
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/menuitem.css">
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/menuseparator.css">
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/tab.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/tabbar.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/toolbar.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/colormenubutton.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/css/palette.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/css/colorpalette.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/editor/bubble.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/editor/dialog.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/editor/linkdialog.css" />
  <link rel="stylesheet" href="https://closure-library.googlecode.com/svn/trunk/closure/goog/css/editortoolbar.css" />
```
3. Add the following HTML to your page wherever you want this app to appear.

```html
<div id="converter">  
  <div id='toolbar'> </div>
  <div id='editMe'> </div>
</div>
```

