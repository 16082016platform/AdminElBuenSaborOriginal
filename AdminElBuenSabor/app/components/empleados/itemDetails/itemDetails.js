var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/elBuenSabor');

function navigatedTo(args) {
    var page = args.object;

    page.navigationContext.pageTitle =
        page.navigationContext.activo;

    // context changes

    page.bindingContext = page.navigationContext;
}

exports.navigatedTo = navigatedTo;

function onEditItemTap(args) {
    var source = args.view || args.object;

    helpers.navigate({
        moduleName: 'components/empleados/editItemForm/editItemForm',
        context: source.bindingContext
    });
}
exports.onEditItemTap = onEditItemTap;