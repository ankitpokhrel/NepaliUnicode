function init() {
    // Create an editable field.
    var myField = new goog.editor.Field('editMe');

    // Create and register all of the editing plugins you want to use.
    myField.registerPlugin(new goog.editor.plugins.BasicTextFormatter());
    myField.registerPlugin(new goog.editor.plugins.RemoveFormatting());
    myField.registerPlugin(new goog.editor.plugins.UndoRedo());
    myField.registerPlugin(new goog.editor.plugins.ListTabHandler());
    myField.registerPlugin(new goog.editor.plugins.SpacesTabHandler());
    myField.registerPlugin(new goog.editor.plugins.EnterHandler());
    myField.registerPlugin(new goog.editor.plugins.HeaderFormatter());
    myField.registerPlugin(new goog.editor.plugins.LoremIpsum('Click here to edit'));
    myField.registerPlugin(new goog.editor.plugins.LinkDialogPlugin());
    myField.registerPlugin(new goog.editor.plugins.LinkBubble());

    // Create a toolbar button for Transliteration.
    var translitButton = goog.ui.editor.ToolbarFactory.makeToggleButton('toggleTransliteration', 'Switch Nepali/English (CTRL + G)', "NP", 'goog-inline-block goog-transliterate-img goog-transliterate-img-button-ne translitButton');
    var aboutButton = goog.ui.editor.ToolbarFactory.makeButton('buttonAbout', null, null, 'about-img');

    // Specify the buttons to add to the toolbar, using built in default buttons.
    var buttons = [translitButton, new goog.ui.ToolbarSeparator(), goog.editor.Command.BOLD, goog.editor.Command.ITALIC, goog.editor.Command.UNDERLINE, goog.editor.Command.FONT_COLOR, goog.editor.Command.BACKGROUND_COLOR, goog.editor.Command.FONT_FACE, goog.editor.Command.FONT_SIZE, goog.editor.Command.LINK, goog.editor.Command.UNDO, goog.editor.Command.REDO, goog.editor.Command.UNORDERED_LIST, goog.editor.Command.ORDERED_LIST, goog.editor.Command.INDENT, goog.editor.Command.OUTDENT, goog.editor.Command.JUSTIFY_LEFT, goog.editor.Command.JUSTIFY_CENTER, goog.editor.Command.JUSTIFY_RIGHT, goog.editor.Command.SUBSCRIPT, goog.editor.Command.SUPERSCRIPT, goog.editor.Command.STRIKE_THROUGH, goog.editor.Command.REMOVE_FORMAT, new goog.ui.ToolbarSeparator(), aboutButton];

    var myToolbar = goog.ui.editor.DefaultToolbar.makeToolbar(buttons, goog.dom.getElement('toolbar'));

    // Hook the toolbar into the field.
    var myToolbarController = new goog.ui.editor.ToolbarController(myField, myToolbar);

    myField.makeEditable();

    var options = {
        sourceLanguage : 'en',
        destinationLanguage : ['ne'],
        shortcutKey : 'ctrl+g',
        transliterationEnabled : true
    };

    // Create the TransliterationControl instance.
    var control = new google.elements.transliteration.TransliterationControl(options);

    // Make the 'editMe' element transliteratable.
    control.makeTransliteratable(['editMe']);

    // Update the state of the transliteration button.
    translitButton.setChecked(control.isTransliterationEnabled());

    // Listen to the 'action' event on the transliteration button which will toggle transliteration.
    goog.events.listen(translitButton, goog.ui.Component.EventType.ACTION, function(e) {
        control.toggleTransliteration();
    });

    // Listen to the 'action' event on the transliteration button which will toggle transliteration.
    goog.events.listen(buttonAbout, goog.ui.Component.EventType.ACTION, function(e) {
        control.toggleTransliteration();
    });

    // Listen to the 'state_changed' event on transliteration control which will udpate the
    // transliteration button state.
    control.addEventListener(google.elements.transliteration.TransliterationControl.EventType.STATE_CHANGED, function(e) {
        translitButton.setChecked(control.isTransliterationEnabled());
    });
}


$(document).ready(function() {
    init();
    $('.about-img').hover(function() {
        var msg = "<h3>Copyright &copy; 2012 Ankit Pokhrel. All rights reserved.</h3>";
        msg += "<p>This application is a work of <a href='http://ankitpokhrel.com.np'>Ankit Pokhrel</a>. ";
        msg += "This tool is originally designed for <a href='http://meroudayapur.com'>MeroUdayapur.com</a>, ";
        msg += "permission is hereby granted, free of charge, to any person obtaining a copy of this application and associated ";
        msg += "documentation files (the \"Software\"), to deal in the Application without restriction, including without ";
        msg += "limitation the rights to use and distribute, provided that the copyright notice(s) and this permission notice ";
        msg += "appear in all copies of the Software.<br/><br/>";
        msg += "Feel free to contact <em>ankitpokhrel@gmail.com</em> if you want to integrate this application to your site.</p>";

        var disclaimer = "<h3>DISCLAIMER OR WARRANTY</h3>";
        disclaimer += "<p>THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, ";
        disclaimer += "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF ";
        disclaimer += "MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. ";
        disclaimer += "IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY ";
        disclaimer += "CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, ";
        disclaimer += "TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE ";
        disclaimer += "SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>";

        var msgContainer = $('<div id="msg">' + msg + disclaimer + '</div>');
        msgContainer.appendTo(this).hide();
        msgContainer.fadeIn(700);
    }, function() {
        $(this).empty();
    });

});