<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/Zendcart for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */
namespace ZendCart;

use Zend\ModuleManager\Feature\AutoloaderProviderInterface;
use Zendcart\Controller\Plugin\ZendCart;
use Zend\ModuleManager\ModuleManager;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
class Module implements AutoloaderProviderInterface
{

	/* public function init(ModuleManager $mm)
	{
		$mm->getEventManager()->getSharedManager()->attach(__NAMESPACE__, 'dispatch', function($e) {
			$e->getTarget()->layout('admin/layout');
		});
	} */
    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/autoload_classmap.php'
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/Zendcart'
                )
            )
        );
    }

    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }
}


