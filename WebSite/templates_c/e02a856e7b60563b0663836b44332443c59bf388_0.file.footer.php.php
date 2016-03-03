<?php /* Smarty version 3.1.27, created on 2016-03-03 02:55:05
         compiled from "/var/www/blackjack/WebSite/rel/footer.php" */ ?>
<?php
/*%%SmartyHeaderCode:42239991056d7997920b466_13905294%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e02a856e7b60563b0663836b44332443c59bf388' => 
    array (
      0 => '/var/www/blackjack/WebSite/rel/footer.php',
      1 => 1456968577,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '42239991056d7997920b466_13905294',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d7997921c522_77759049',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d7997921c522_77759049')) {
function content_56d7997921c522_77759049 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '42239991056d7997920b466_13905294';
?>
  <?php echo '<script'; ?>
>
      // With JQuery
    $('#inputBeginMise').slider({
        formatter: function(value) {
            return 'Mise engagée : ' + value + "$";
        }
    });
      
  <?php echo '</script'; ?>
>
  </body>
</html><?php }
}
?>