
require('../lib/debug.js');

if (module.hot) {
    module.hot.accept('../lib/debug.js', function () {
        require('../lib/debug.js')
    })
}