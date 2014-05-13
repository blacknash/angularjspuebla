'use strict';

var crudService = angular.module('crudService',['ngResource']);


crudService.factory('Crud', function crudFactory($resource){
	
	var crudService = $resource('/server/index.php/contact/:id', { }, {
		read 	: { method : 'get' , isArray:true },
	});

	return crudService;
});