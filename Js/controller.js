app.controller("ctrl",($scope,ajaxfactory)=>{
    var promise=ajaxfactory.doAjax();
    promise.then((data)=>{
        $scope.result=data;
    },(err)=>{
        $scope.error=err;
    });
});