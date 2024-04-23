/*global QUnit*/

sap.ui.define([
	"comdemo/register_app/controller/Register.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Register Controller");

	QUnit.test("I should test the Register controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
