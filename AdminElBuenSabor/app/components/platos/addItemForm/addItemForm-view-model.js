'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    nombrePlatoAdd: '',

    ingredientesAdd: '',

    precioAdd: '',

    etiquetaAdd: '',

    categoriaAdd: '',

    tipo: '',

    diasAdd: '',

    personalizacionAdd: '',

    // additional properties

});

// START_CUSTOM_CODE_platosModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_platosModel
module.exports = ViewModel;