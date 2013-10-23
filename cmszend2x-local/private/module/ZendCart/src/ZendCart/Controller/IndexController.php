<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace ZendCart\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{

    public function indexAction()
    {
    	/* $product = array(
    			'id'      => 'cod_123abc',
    			'qty'     => 1,
    			'price'   => 39.95,
    			'name'    => 'T-Shirt',
    			'options' => array('Size' => 'M', 'Color' => 'Black')
    	);
    	$this->ZendCart()->insert($product);
    	$product2 = array(
    			'id'      => 'id_009',
    			'qty'     => 1,
    			'price'   => 4000,
    			'name'    => 'Close',
    			'options' => array('Size' => 'L', 'Color' => 'Blue')
    	);
    	$this->ZendCart()->insert($product2); */
    	/* 
    	$product = array(
    			'token' => '01563242f5b7137dc380e1653408242805987016',
    			'qty'   => 2
    	);
    	$this->ZendCart()->update($product); */
    	
    	/* $product = array(
    			'token' => 'ed660aeada588daf47fe8c46932a2f672da0a3a4',
    	);
    	$this->ZendCart()->remove($product); */
    	/* $this->ZendCart()->cart();
    	$this->ZendCart()->total();
    	$this->ZendCart()->total_items();
    	$this->ZendCart()->item_options('01563242f5b7137dc380e1653408242805987016');
    	$this->ZendCart()->destroy(); */
    	/* echo "<pre>";
    	print_r($this->ZendCart()->cart());
    	echo "</pre>"; */
    	
    	return new ViewModel(array(
		    'items' => $this->ZendCart()->cart(),
		    'total_items' => $this->ZendCart()->total_items(),
		    'total' => $this->ZendCart()->total(),
		));
    }
   
}
