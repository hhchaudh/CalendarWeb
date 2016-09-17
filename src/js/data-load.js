/**
 * Created by Sam on 9/15/2016.
 */
$window.load(function () {
    var textArea = document.querySelector("#editor");
    if (window.localStorage["TextEditorData"]) {
        editor.value = window.localStorage["TextEditorData"];
    }
});

