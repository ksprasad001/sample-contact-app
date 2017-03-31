'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('MainCtrl',['Contacts','$scope', function (Contacts,$scope) {
    var controller = $scope;
    var contactData=Contacts.find();
      $scope.allContacts = contactData;
      console.log($scope.allContacts);

      $scope.setAllFlagstoFalse =function()
      {
      $scope.contactList=false;
      $scope.showEdit = false;
      $scope.addContact=false;
      };

    $scope.getContacts= function(){
      $scope.setAllFlagstoFalse();
      $scope.contactList=true;
      var contactData= Contacts.find();
      controller.allContacts = contactData;
      };

    $scope.editContact = function(allContacts){
      console.log("Inside Edit"+allContacts);
      $scope.setAllFlagstoFalse();
      $scope.showEdit = true;
      $scope.currentRow = allContacts;
      controller.allContacts=allContacts;
      console.log(this.allContacts);
    };

    $scope.deleteContact= function(id){
      console.log("Inside Before Delete Query");
      Contacts.deleteById({id: id}, function (value, response) {
        console.log("Inside after Delete query");
        $scope.getContacts();
      }, function (error) {
        console.log("Inside Error Delete");
      });

      return;
    };

    $scope.cancel=function(){
      return $scope.getContacts();
    };

    $scope.addNewContact = function(){
      $scope.contactList=false;
      $scope.showEdit=false;
      $scope.addContact=true;

      $scope.allContacts = {};
    };

    $scope.saveContact = function( allContacts ){
      console.log("Inside Save");
      if(allContacts.id=='undefined'||allContacts.id==null) {
        Contacts.id = "";
        console.log("Inside if "+allContacts.id);
        Contacts.upsert(allContacts, function (value, response) {
          $scope.getContacts();
        }, function (error) {
        });
      }
      else{
        console.log("Inside else");
        Contacts.update({where:{id:allContacts.id}},allContacts, function (value, response) {
          $scope.getContacts();
        }, function (error) {
        });
      }
    };


  }]);


