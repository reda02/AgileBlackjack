<?php /* Smarty version 3.1.27, created on 2016-03-03 03:02:05
         compiled from "/var/www/blackjack/WebSite/rel/footer.php" */ ?>
<?php
/*%%SmartyHeaderCode:143855779656d79b1d9b0f87_57331091%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e02a856e7b60563b0663836b44332443c59bf388' => 
    array (
      0 => '/var/www/blackjack/WebSite/rel/footer.php',
      1 => 1456970509,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '143855779656d79b1d9b0f87_57331091',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d79b1d9b5a16_54353096',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d79b1d9b5a16_54353096')) {
function content_56d79b1d9b5a16_54353096 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '143855779656d79b1d9b0f87_57331091';
?>
  <?php echo '<script'; ?>
>
      // With JQuery
    $('#inputBeginMise').slider({
        formatter: function(value) {
            return value + "$";
        }
    });
      
  <?php echo '</script'; ?>
>
  </body>
</html><?php }
}
?>