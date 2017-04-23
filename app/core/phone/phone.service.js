angular.
module('core.phone',['ngResource']).
factory('Phone', ['$resource',
    function($resource) {
        return $resource('phones/:phoneId1.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId1: 'phones'},
                isArray: true
            }
        });
    }
]); 