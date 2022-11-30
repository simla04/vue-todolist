var app = new Vue ( {
    el:  '#app' ,
    data: {
        todoList: [
            {
                testo: 'comprare il pane',
                done: false
            },
            {
                testo: 'comprare il latte',
                done: false
            }
        ],
        todoDone: []
    }, 
   // mounted() {
    // entra quando l'applicativo vue ha caricato el: #app
    // },
    beforeUpdate() {
        // entra quando l'applicativo vue controlla il dom e i dati e i componenti si modificano
        this.todoList.forEach( ( elem, index) =>{
            if( elem.done == true ){
                this.todoDone.push( elem );
                this.todoList.splice( index,1 );
            }
        });
    },
    methods: {
        rimuovoElemento(index, elem){
            // rimuovi oggetto
            // splice: rimuove un elemento di un array grazie alla posizione e ne eliminta tanti quanti gli dico dall'elemento  trovato
            console.log( index )
            // this.todoList.splice( index, 1 );
            if( elem.done == true ) {
                this.todoDone.splice( index, 1);
            } else {
                this.todoList.splice( index, 1);
            }
        },
        todoCompleted( index, elem) {
            // modifico lo stato della proprietà 
            /* this.todoList.splice( index, 1 ); */ // elem.done = true;

            if( elem.done == false){
                elem.done = true;
            } else {
                elem.done = false;
            }
        }
    }
})