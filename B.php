<?php
$inputNumber = isset($_POST['inputNumber']) ? $_POST['inputNumber'] : 0;
$inputText = isset($_POST['inputText']) ? $_POST['inputText'] : '';

$outputArray = [];

for ($i = 0; $i < $inputNumber; $i++) {
  $outputArray[$i] = $inputText . $i;
}

header('Content-Type: application/json');
echo json_encode($outputArray);
?>