var nomes = ['Rafael', 'Davi', 'Bernardo', 'Anderson'];
    function filterItems(query) {
        return  nomes.filter(function(el){
            return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
    }

    console.log(filterItems('Ra'));
    console.log(filterItems('An'));