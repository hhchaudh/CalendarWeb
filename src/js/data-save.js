/**
 * Created by Sam on 9/15/2016.
 */
$(function() {
    var textArea = document.querySelector("#editor");
    editor.addEventListener("keyup", function() {
        window.localStorage["TextEditorData"] = editor.value;
    });
});

