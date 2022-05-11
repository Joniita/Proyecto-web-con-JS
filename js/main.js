$(document).ready(function(){

    // SLIDER

    if(window.location.href.indexOf("index") > -1){
        $(function(){
            $('#slider').bxSlider({
              mode: 'fade',
              captions: true,
             
            });
        });

    };

   

    // POSTS 
    if(window.location.href.indexOf("index") > -1){
        let posts = [
            {
                title: "Título de prueba 1",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porta neque. Curabitur eget finibus felis, id imperdiet diam. Maecenas rutrum, sem quis vulputate pellentesque, massa enim condimentum nulla, eu aliquam nulla nulla vel ligula. Nulla a varius nulla. Sed quis ipsum euismod, vulputate erat quis, tincidunt purus. Ut magna leo, tristique ac erat sed, consequat fermentum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ante lectus, consectetur at ullamcorper vitae, pharetra eleifend elit. Nam eget facilisis purus. Proin sed ornare ipsum, id finibus ipsum. Nam non commodo eros, vel vehicula nulla. Cras ante nisl, fringilla quis hendrerit et, aliquam eget eros. Pellentesque gravida vulputate lectus, non pellentesque magna egestas non. Aenean egestas felis non leo euismod semper. Donec ac erat mollis enim vulputate accumsan."
            },
            {
                title: "Título de prueba 2",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porta neque. Curabitur eget finibus felis, id imperdiet diam. Maecenas rutrum, sem quis vulputate pellentesque, massa enim condimentum nulla, eu aliquam nulla nulla vel ligula. Nulla a varius nulla. Sed quis ipsum euismod, vulputate erat quis, tincidunt purus. Ut magna leo, tristique ac erat sed, consequat fermentum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ante lectus, consectetur at ullamcorper vitae, pharetra eleifend elit. Nam eget facilisis purus. Proin sed ornare ipsum, id finibus ipsum. Nam non commodo eros, vel vehicula nulla. Cras ante nisl, fringilla quis hendrerit et, aliquam eget eros. Pellentesque gravida vulputate lectus, non pellentesque magna egestas non. Aenean egestas felis non leo euismod semper. Donec ac erat mollis enim vulputate accumsan."
            },
            {
                title: "Título de prueba 3",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porta neque. Curabitur eget finibus felis, id imperdiet diam. Maecenas rutrum, sem quis vulputate pellentesque, massa enim condimentum nulla, eu aliquam nulla nulla vel ligula. Nulla a varius nulla. Sed quis ipsum euismod, vulputate erat quis, tincidunt purus. Ut magna leo, tristique ac erat sed, consequat fermentum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ante lectus, consectetur at ullamcorper vitae, pharetra eleifend elit. Nam eget facilisis purus. Proin sed ornare ipsum, id finibus ipsum. Nam non commodo eros, vel vehicula nulla. Cras ante nisl, fringilla quis hendrerit et, aliquam eget eros. Pellentesque gravida vulputate lectus, non pellentesque magna egestas non. Aenean egestas felis non leo euismod semper. Donec ac erat mollis enim vulputate accumsan."
            },
            {
                title: "Título de prueba 4",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porta neque. Curabitur eget finibus felis, id imperdiet diam. Maecenas rutrum, sem quis vulputate pellentesque, massa enim condimentum nulla, eu aliquam nulla nulla vel ligula. Nulla a varius nulla. Sed quis ipsum euismod, vulputate erat quis, tincidunt purus. Ut magna leo, tristique ac erat sed, consequat fermentum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ante lectus, consectetur at ullamcorper vitae, pharetra eleifend elit. Nam eget facilisis purus. Proin sed ornare ipsum, id finibus ipsum. Nam non commodo eros, vel vehicula nulla. Cras ante nisl, fringilla quis hendrerit et, aliquam eget eros. Pellentesque gravida vulputate lectus, non pellentesque magna egestas non. Aenean egestas felis non leo euismod semper. Donec ac erat mollis enim vulputate accumsan."
            },
            {
                title: "Título de prueba 5",
                date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a porta neque. Curabitur eget finibus felis, id imperdiet diam. Maecenas rutrum, sem quis vulputate pellentesque, massa enim condimentum nulla, eu aliquam nulla nulla vel ligula. Nulla a varius nulla. Sed quis ipsum euismod, vulputate erat quis, tincidunt purus. Ut magna leo, tristique ac erat sed, consequat fermentum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam ante lectus, consectetur at ullamcorper vitae, pharetra eleifend elit. Nam eget facilisis purus. Proin sed ornare ipsum, id finibus ipsum. Nam non commodo eros, vel vehicula nulla. Cras ante nisl, fringilla quis hendrerit et, aliquam eget eros. Pellentesque gravida vulputate lectus, non pellentesque magna egestas non. Aenean egestas felis non leo euismod semper. Donec ac erat mollis enim vulputate accumsan."
            }
        ];

        posts.forEach((item, index) => {
            let post = `
                        <article class="post">
                            <h2>${item.title}</h2>
                            <span class="date">${item.date}</span>
                            <p>
                                ${item.content}
                            </p>
                            <a href="#" class="more_btn">Leer más</a>
                        </article>
                    `;

            $("#posts").append(post);
        });
    };


    //SELECTOR DE TEMA

    let themeSheet = $("#theme");

    $("#to_green").click(function(){
        themeSheet.attr("href", "css/green.css");
    });

    $("#to_red").click(function(){
        themeSheet.attr("href", "css/red.css");
    });

    $("#to_blue").click(function(){
        themeSheet.attr("href", "css/blue.css");
    });
    
    // SCROLL ARRIBA

    $(".up").click(function(e){

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // LOGIN FALSO CON EL LOCALSTORAGE

    $("#login form").submit(function(){


        let user_name = $("#name").val();

        localStorage.setItem("user_name", user_name);

        location.reload();

        
    });

    let user_name = localStorage.getItem("user_name");

    if(user_name != null && user_name != "undefined"){
        let login_span = $("#login span");
        login_span.html("<strong>Bienvenido, " + user_name + "</strong> ");
        login_span.append("<a href='#' id='logOut'>- Logout -</a>");
        let logOut =  $("#logOut");
        logOut.css({
            "text-decoration": "none",
            "margin-left" : "20px"
        });

        $("form").hide();

        logOut.click(function(){
            localStorage.clear();
            location.reload();
        });
    };

    // CALCULADORA

    if(window.location.href.indexOf("calculadora") > -1){

        let pantallaValorAnterior = document.querySelector("#valor_anterior");
        let pantallaValorActual = document.querySelector("#valor_actual");
        let botonesNumeros = document.querySelectorAll(".numero");
        let botonesOperadores = document.querySelectorAll(".operador");


        class Calculadora{
            sumar(num1, num2) {
                return num1 + num2;
            }

            restar(num1, num2) {
                return num1 - num2;
            }

            dividir(num1, num2) {
                return num1 / num2;
            }

            multiplicar(num1, num2) {
                return num1 * num2;
            }
        };

        class Display {
            constructor(pantallaValorAnterior, pantallaValorActual) {
                this.pantallaValorActual = pantallaValorActual;
                this. pantallaValorAnterior = pantallaValorAnterior;
                this.calculadora = new Calculadora();
                this.tipoOperacion = undefined;
                this.valorActual = "";
                this.valorAnterior = "";
                this.signos = {
                    sumar: "+",
                    restar: "-",
                    dividir: "/",
                    multiplicar: "X"
                }
            }

            borrar() {
                this.valorActual = this.valorActual.toString().slice(0,-1);
                this.imprimirValores();
            }

            borrarTodo(){
                this.valorActual = "";
                this.valorAnterior = "";
                this.tipoOperacion = undefined;
                this.imprimirValores();
            }

            computar(tipo){
                this.tipoOperacion !== "igual" && this.calcular();
                this.tipoOperacion = tipo;
                this.valorAnterior = this.valorActual || this.valorAnterior;
                this.valorActual = "";
                this.imprimirValores();
            }

            agregarNumero(numero){
                if(numero === "." && this.valorActual.includes(".")) return
                this.valorActual = this.valorActual.toString() + numero;
                this.imprimirValores();
            }

            imprimirValores(){
                this.pantallaValorActual.textContent = this.valorActual;
                this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}`;
            }

            calcular(){
                let valorAnterior = parseFloat(this.valorAnterior);
                let valorActual = parseFloat(this.valorActual);

                if(isNaN(valorActual) || isNaN(valorAnterior) ) return
                this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual);
            }
        }

        let display = new Display(pantallaValorAnterior, pantallaValorActual);

        botonesNumeros.forEach(function(boton){
            boton.addEventListener("click", function(){
                display.agregarNumero(boton.innerHTML);
            });
        });

        botonesOperadores.forEach(function(boton){
            boton.addEventListener("click", function(){
                display.computar(boton.value)
            });
        });

        $("#borrarTodo").click(function(){
            display.borrarTodo();
        });

        $("#borrar").click(function(){
            display.borrar();
        });

    };


    //ACORDEON

    if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion();
    };

    // RELOJ

    if(window.location.href.indexOf("reloj") > -1){

        setInterval(function(){
            let reloj = moment().format("hh:mm:ss a");

            $("#reloj").html(reloj);
        }, 1000);

        
    };

    // VALIDACIÓN DE FORMULARIO DE CONTACTO

    if(window.location.href.indexOf("contact") > -1){

        $("form input[id='date']").datepicker({
            dateFormat: "dd-mm-yy"
        });

        $.validate({
            lang: "es"
        });
    };


});