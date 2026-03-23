    
            // código para abrir / cerrar tarjetas
            document.querySelectorAll('.tarjeta-header').forEach(header => {
                header.addEventListener('click', () => {
                    header.parentElement.classList.toggle('activa');
                });
            });

            // codigo para ejemplos internos
            function toggle(el) {
                const descripcion = el.nextElementSibling;

                el.classList.toggle('activa');
                descripcion.classList.toggle('activa');
            }



            //código para cambiar vistas
            function mostrarEjemplos(btn) {
                const body = btn.closest('.tarjeta-body');
                body.querySelector('.concepto').style.display = 'none';
                body.querySelector('.ejemplos').style.display = 'block';
            }

            function mostrarConcepto(btn) {
                const body = btn.closest('.tarjeta-body');
                body.querySelector('.ejemplos').style.display = 'none';
                body.querySelector('.concepto').style.display = 'block';
            }

//coigo para tabla

        const searchInput = document.getElementById("search");
        const typeFilter = document.getElementById("typeFilter");
        const tableRows = document.querySelectorAll("#cmipTable tbody tr");

        function filterTable() {
            const searchText = searchInput.value.toLowerCase();
            const typeValue = typeFilter.value;

            tableRows.forEach(row => {
                const text = row.innerText.toLowerCase();
                const type = row.querySelector(".tag").innerText;

                const matchSearch = text.includes(searchText);
                const matchType = !typeValue || type === typeValue;

                row.style.display = (matchSearch && matchType) ? "" : "none";
            });
        }

        searchInput.addEventListener("keyup", filterTable);
        typeFilter.addEventListener("change", filterTable);
