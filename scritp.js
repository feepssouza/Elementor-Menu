document.addEventListener("DOMContentLoaded", function() {

    const menuToggle = document.querySelector(".menu-toggle");
    const dropdown = document.querySelector(".nav-menutoggle");

    if (!menuToggle || !dropdown)
        return;

    // Verifica se o menu está aberto
    function menuAberto() {
        return menuToggle.classList.contains("active");
    }

    // Fecha o menu
    function fecharMenu() {
        menuToggle.classList.remove("active");
        dropdown.classList.remove("active");
    }

    // ABRIR / FECHAR MENU AO CLICAR NO BOTÃO
    menuToggle.addEventListener("click", function(event) {
        event.stopPropagation();  // evita fechar ao clicar no próprio botão

        menuToggle.classList.toggle("active");
        dropdown.classList.toggle("active");
    });

    // FECHAR AO CLICAR FORA (igual Elementor)
    document.addEventListener("click", function(event) {

        // se o menu não está aberto → não faz nada
        if (!menuAberto())
            return;

        // clicou no botão → não fecha
        if (menuToggle.contains(event.target))
            return;

        // clicou dentro do menu → não fecha
        if (dropdown.contains(event.target))
            return;

        // clicou fora → fecha
        fecharMenu();
    });

});
