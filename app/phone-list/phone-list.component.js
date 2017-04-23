/**
 * Created by vprasad02 on 7/1/2016.
 */
'use strict';

angular.module('phoneList',['core.phone']).
    component('phoneList',{
    templateUrl:'phone-list/phone-list.template.html',
    controller: ['Phone',
        function PhoneListController(Phone) {
            this.phones1 = Phone.query();
            this.orderProp = 'age';
        }
    ]
});