var app = new Vue({
    el: "#app",
    data: {
        tiempo: 5,
        listado:[{
            indice: 1,
            digitacionDO: 'DO 0',
            digitacionSIb: '?',
            tipo: 'C1',
            frecuencia: 32.70
        }, {
            indice: 2,
            digitacionDO: 'C#1',
            digitacionSIb: '?',
            tipo: 'Cs1',
            frecuencia: 34.65
        }],
        verOpciones: false,
     
    },
    mounted: function() {
    },
    computed: {

    },
    methods: {
        accion: function() {

        },
       
        aleatorio: function() {

        },
    }
})

