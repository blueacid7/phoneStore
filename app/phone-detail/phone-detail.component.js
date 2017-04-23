'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
module('phoneDetail',[
    'core.phone','core.checkmark'
]).
component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone',
        function PhoneDetailController($routeParams, Phone) {
            var self = this;
            self.phone = Phone.get({phoneId1: $routeParams.phoneID}, function(phone) {
                self.setImage(phone.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
