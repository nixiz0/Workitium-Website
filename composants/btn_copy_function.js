function copyText(textareaId) {
    /* Sélectionne le contenu du textarea correspondant à l'ID passé en paramètre */
    var copyText = document.getElementById(textareaId);
    copyText.select();
    /* Copie le contenu sélectionné */
    document.execCommand("copy");
}