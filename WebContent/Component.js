

// define com.emax.product
sap.ui.core.UIComponent.extend("com.emax.product.Component", {
	metadata : {
			manifest : "json"
		
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		var oRouter = this.getRouter();
		oRouter.initialize();
		//page2 = http://localhost:52067/ZCOMPONENT/index.html#/topage2
		
	}
});