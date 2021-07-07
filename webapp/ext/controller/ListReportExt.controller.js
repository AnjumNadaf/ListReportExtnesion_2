sap.ui.controller("listreportextension.ext.controller.ListReportExt", {
    CustomAction : function(oEvent) { 
        alert('CustomAction');
    },
    // onBeforeRebindTableExtension:function(oEvent){
    //     debugger;
    //     var tableData = oEvent.getParameters().bindingParams;
    //     var oSeletControl = this.byId("FilterId").getSelectedItem();
        
    //     if(oSeletControl){
    //     let sVal = oSeletControl.getText();
    //     var newFilter = new sap.ui.model.Filter( "Empid",
    //     sap.ui.model.FilterOperator.EQ,
    //     sVal );
    //     tableData.filters.push( newFilter );
    //     }
    //     }
});
