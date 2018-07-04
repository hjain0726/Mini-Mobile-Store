app.factory("ajaxfactory",($http,$q)=>{
    const object={
        doAjax(){
            var defer=$q.defer();
            const url="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json";
            $http.get(url).then((data)=>{
                defer.resolve(data);
            },(err)=>{
                defer.reject(err);
            });
            return defer.promise;
        }
    }
    return object;
});