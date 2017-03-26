<?php
$access_token = 'JHTf7+Et/XfdyY5GHnGjVqM+MKUWatYti6oeCXsrNE+7AYvbki9rsXIK18vSYg2SZCqX31np+cALqLHk0Dw8hCZPwXf6VE2wYI3rOlInDRVa0W5Jbt5u0zuA0U33vhYYRpv/Qo9icVjf1bc1ct9eUwdB04t89/1O/w1cDnyilFU=';

$url = 'https://api.line.me/v1/oauth/verify';

$headers = array('Authorization: Bearer ' . $access_token);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$result = curl_exec($ch);
curl_close($ch);

echo $result;