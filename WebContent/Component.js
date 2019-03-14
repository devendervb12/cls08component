

// define com.emax.product
sap.ui.core.UIComponent.extend("com.emax.product.Component", {
	metadata : {
		rootView : "com.emax.product.view.RootView",
		routing : {
			config : {
				 viewType : "XML",
				 controlId : "idApp",
				 controlAggregation : "pages",
				 routerClass : "sap.m.routing.Router"
			},
			routes : [
				{
					
				pattern : "",
				 name : "homePage",
				 viewName : "com.emax.product.view.Page1"
				}, 
				{
				 pattern : "topage2", 
				 name : "secondPage",
				 viewName : "com.emax.product.view.Page2"				 
				}
			]
		}
		
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
		//page2 = http://localhost:52067/ZCOMPONENT/index.html#/topage2
		
	}
});