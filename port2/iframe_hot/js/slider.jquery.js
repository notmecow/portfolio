;(function($, window, undefined) {

    $.fn.slider = function(prev, sig) {
        return this.each(function(){
            $container = $(this).children().eq(0);

            if($container) {
                var $fotos = $container.children();
                var cantidad = $fotos.length;
                var incremento = $fotos.outerWidth(true);
                var enSlider = Math.floor($(this).width() / incremento);
                var primerElemento = 1;
                var estaMoviendo = false;
            }

            $container.css('width', (cantidad + enSlider) * incremento);
            for(var i = 0; i < enSlider; i++) {
                $container.append($fotos.eq(i).clone());
            }

            $(sig).click(function(e) {
                e.preventDefault();

                if(!estaMoviendo) {
                   if(primerElemento > cantidad) {
                        primerElemento = 2;
                        $container.css('left', '0px');
                    } else {
                        primerElemento++;
                    }
                    
                    estaMoviendo = true;
                    $container.animate({
                        left: '-=' + incremento,
                    }, 'swing', function(){
                        estaMoviendo = false;
                    });
                }
            });

            $(prev).click(function(e) {
                e.preventDefault();

                if(!estaMoviendo) {
                    if(primerElemento == 1) {
                        $container.css('left', cantidad * incremento * -1);
                        primerElemento = cantidad;
                    } else {
                        primerElemento--;
                    }
                    estaMoviendo = true;
                    $container.animate({
                        left: '+=' + incremento,
                    }, 'swing', function(){
                        estaMoviendo = false;
                    });
                }
            });

        });
    }

})(jQuery, window)

// <!-- [윤샘컴교실] http://edyoon.tistory.com -->