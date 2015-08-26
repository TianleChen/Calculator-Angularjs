angular.module('cal', []).controller('calCtrl', function($scope) {
$scope.dis = "";
$scope.signholder = 0;
$scope.pointholder = 0;
$scope.count = 0;

$scope.clear = function () {
	$scope.dis = "";
	$scope.signholder = 0;
	$scope.pointholder = 0;
}

$scope.pressNum = function (num) {
	if ($scope.signholder == 1 && $scope.count == 0) {$scope.pointholder = 0; $scope.count++;};
	if ($scope.dis.length < 18) {
		if ($scope.dis.length == 0) {
			if (num !== "0") {
				$scope.dis = num;
			};
		} else if ((num != '.') || ($scope.pointholder == 0)) {
			$scope.dis += num;
			if (num == '.') {$scope.pointholder = 1;};
		};
	};
}

$scope.pressSign = function (sig) {
	var sign = ['+', '-', '*', '/'];
	var str = $scope.dis;
	if (str.length > 0) {
		if ($scope.signholder == 0) {
			$scope.signpos = $scope.dis.length;
			$scope.dis += sig;
			$scope.signholder = 1;
		};
	} else if (sign == '-'){
		$scope.dis += sign;
	}
}

$scope.specSign = function () {
	if ($scope.signholder == 0) {
		$scope.dis = eval(0 - $scope.dis).toString();
	};
}

$scope.result = function () {
	var num = eval($scope.dis);
	$scope.dis = num.toString();
	$scope.signholder = 0;
	$scope.count = 0;
	if ($scope.dis.indexOf('.') == -1) {
		$scope.pointholder = 0;
	};
}

})