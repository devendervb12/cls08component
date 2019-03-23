sap.ui.controller("com.emax.product.controller.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Page1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Page1
*/
//	onExit: function() {
//
//	}
	onPress : function(){
		//go to page2
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("secondPage");
	},
	onItemSelection : function(oEvent){
		// oEvent - press
		//oEvent.getSource() - selected standardListItem
		
		var cId = oEvent.getSource().getInfo();
		
		this.getOwnerComponent().getRouter().navTo("secondPage", {cid : cId });
	},

	onSearch : function (oEvt) {

		// add filter for search
		var aFilters = [];
		var sQuery = oEvt.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("CompanyName", sap.ui.model.FilterOperator.StartsWith, sQuery);
			aFilters.push(filter);
		}

		// update list binding
		var list = this.byId("idList");
		var binding = list.getBinding("items");
		binding.filter(aFilters, "Application");
	},

});