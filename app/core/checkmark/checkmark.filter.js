/**
 * Created by vprasad02 on 7/4/2016.
 */
angular.module('core.checkmark',['core.phone']).
    filter('checkmark',function(){
        return function(input){
            return input ? '\u2713' :'\u2718';
        }  ;
});