$(document).ready(function(){

    // SLIDER

    $(function(){
        $('#slider').bxSlider({
          mode: 'fade',
          captions: true,
         
        });
    });

    // POSTS 

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

    

});