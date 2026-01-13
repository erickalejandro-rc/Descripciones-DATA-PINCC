function toggle(element) {
        const descripcion = element.nextElementSibling;
        descripcion.style.display =
            descripcion.style.display === "block" ? "none" : "block";
    }