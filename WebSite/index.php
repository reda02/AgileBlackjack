<?php
header("Content-Type: text/html");
include dirname(__FILE__) . '/lib/AltoRouter.php';
$router = new AltoRouter();
$router->setBasePath('');
/* Setup the URL routing. This is production ready. */

$router->map('GET','/', 'controllers/home.php', 'home');

/* Match the current request */
$match = $router->match();
if($match) {
  require $match['target'];
}
else {
  header("HTTP/1.0 404 Not Found");
  require '/rel/404.html';
}
?>
