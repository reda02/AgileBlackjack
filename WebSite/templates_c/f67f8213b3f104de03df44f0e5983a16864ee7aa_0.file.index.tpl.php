<?php /* Smarty version 3.1.27, created on 2016-03-03 02:55:05
         compiled from "/var/www/blackjack/WebSite/view/index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:79842822356d7997916ab40_27959321%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f67f8213b3f104de03df44f0e5983a16864ee7aa' => 
    array (
      0 => '/var/www/blackjack/WebSite/view/index.tpl',
      1 => 1456970102,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '79842822356d7997916ab40_27959321',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56d799791dfdf5_74589403',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56d799791dfdf5_74589403')) {
function content_56d799791dfdf5_74589403 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '79842822356d7997916ab40_27959321';
echo $_smarty_tpl->getSubTemplate ("rel/header.php", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
;
    <div class="row">
        <div class="mainContent col-md-10">
            <div class="bankContent row">
                <div class="col-md-12">
                    <div id="bankCards">
                        <h2><i class="fa fa-university fa-3x"></i><br />Banque</h2>
                        <div class="card"></div>
                        <div class="card"></div>
                    </div>
                    <hr class="border-dotted"/>
                    <div id="playerCards">
                        <h2><i class="fa fa-user fa-3x"></i><br /><?php echo '<?=';?> $curr_player <?php echo '?>';?></h2>
                        <div class="card"></div>
                        <div class="card"></div>
                    </div>
                    <div class="row boardControls">
                        <div class="col-md-3">
                            <button class="btn btn-warning disabled">ABANDON</button>
                            <button class="btn btn-primary disabled">CARTE SUPPLEMENTAIRE</button>
                        </div>
                        <div class="col-md-6">
                            <input id="inputBeginMise" data-slider-ticks="[0,100,200, 300]" data-slider-id='inputBeginMiseSlider' type="text" data-slider-min="0" data-slider-max="300" data-slider-step="10" data-slider-ticks-labels='["$0",  "$100","$200","$300"]' data-slider-value="0"/>
                            <button class="btn btn-info">MISER</button>
                        </div>
                        <div class="col-md-3"><button class="btn btn-danger disabled">QUITTER LA TABLE</button></div>
                    </div>
                    <div class="row gameState">
                       <div class="col-md-6">
                           <h2> Mon jeu </h2>
                           <h3><i class="fa fa-money fa-2x"></i> $2000</h3>
                            <h3>Etat de la main <i class="fa fa-thumbs-up fa-2x"></i> - Valeur : 18</h3>
                            <h3>Etat de la main <i class="fa fa-hand-paper-o fa-2x"></i> - Valeur : 10</h3>
                            <h3>Etat de la main <i class="fa fa-thumbs-down fa-2x"></i> - Valeur : 22</h3>
                       </div>
                       <div class="col-md-6">
                           <h2> La Banque </h2>
                           <h3><i class="fa fa-2x"></i> ∞ </h3>
                            <h3>Etat de sa main <i class="fa fa-thumbs-up fa-2x"></i> - Valeur : 18</h3>
                            <h3>Etat de sa main <i class="fa fa-hand-paper-o fa-2x"></i> - Valeur : 10</h3>
                            <h3>Etat de sa main <i class="fa fa-thumbs-down fa-2x"></i> - Valeur : 22</h3>
                       </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="helpContent col-md-2">
            <div class="centered">
                <i class="fa fa-question-circle fa-3x orange"></i>
                <hr class="border-dotted"/>
                <h4> Règles du jeu </h4>
                <p class="help-descriptor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo at lorem sed pharetra. Curabitur nec odio facilisis, scelerisque velit eu, pharetra lectus. Aenean a venenatis felis, eu elementum nisl. Sed efficitur blandit ultrices. Etiam semper efficitur faucibus. Vestibulum fermentum ex purus, non efficitur metus cursus nec. Sed rutrum elit nisi, in aliquam tellus dictum non. Phasellus vel velit fermentum, mattis diam congue, posuere mi.

Nam ac dapibus ex, a pretium sem. Cras lacinia, arcu laoreet vehicula laoreet, elit ex maximus magna, sit amet dapibus mi urna ac nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer auctor, lorem eget tempor faucibus, nulla ipsum lobortis erat, eu aliquet ante augue quis ipsum. Suspendisse id finibus dui. Donec consequat quis lectus vel tempor. Quisque dignissim justo mi, ac rhoncus nisl interdum a. Proin nec facilisis odio. Proin scelerisque pharetra erat, eleifend cursus metus rhoncus non. Sed fringilla lacinia purus eu volutpat. Maecenas non lacus tristique, sodales ipsum eu, tempus tellus. Maecenas pellentesque interdum augue, eu porta turpis blandit vel.

Duis dignissim et erat ac rutrum. Sed id mollis nibh, convallis consequat leo. Maecenas dui felis, dictum faucibus erat ac, porta convallis libero. Donec tortor nisl, porta in ultricies eu, consequat non mauris. Donec aliquam erat eget leo vulputate scelerisque. Suspendisse tempor, erat vitae consectetur sodales, nunc tellus sollicitudin sapien, sit amet maximus ante lorem ut lacus. Proin aliquam, dolor in fringilla malesuada, mi erat congue massa, ut ornare ipsum ante ac ipsum. In vitae nibh vehicula, finibus urna vitae, gravida turpis. Phasellus vitae eleifend augue. Phasellus faucibus laoreet est id scelerisque. Praesent euismod eros enim, feugiat porttitor eros mollis at. In non justo et dolor varius pharetra eget id nulla. Nam convallis in ante a mattis. Integer interdum vulputate sem, a tempor augue vulputate ut. Duis eleifend, tortor at luctus posuere, tortor nisl finibus lectus, in ornare felis elit in justo. Donec hendrerit finibus felis, eget fringilla felis maximus vel.
                </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-10">
            
        </div>
    </div>
      
<?php echo $_smarty_tpl->getSubTemplate ("rel/footer.php", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0);
?>
;
<?php }
}
?>