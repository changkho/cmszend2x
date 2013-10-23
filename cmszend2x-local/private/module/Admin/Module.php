<?php 
// comment
namespace Admin;

use Admin\Model\Category;
use Admin\Model\Article;
use Zend\ModuleManager\ModuleManager;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;

class Module 
{ 
	public function init(ModuleManager $mm)
	{
		$mm->getEventManager()->getSharedManager()->attach(__NAMESPACE__, 'dispatch', function($e) {
			$e->getTarget()->layout('admin/layout');
		});
	}
    public function getAutoloaderConfig() 
    { 
        return array( 
            'Zend\Loader\ClassMapAutoloader' => array( 
                __DIR__ . '/autoload_classmap.php', 
            ), 
            'Zend\Loader\StandardAutoloader' => array( 
                'namespaces' => array( 
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__, 
                ), 
            ), 
        ); 
    } 

    public function getConfig() 
    { 
        return include __DIR__ . '/config/module.config.php'; 
    } 
   /*   public function onBootstrap(MvcEvent $e)
    {
    	$eventManager        = $e->getApplication()->getEventManager();
    	$moduleRouteListener = new ModuleRouteListener();
    	$moduleRouteListener->attach($eventManager);
    	$viewModel = $e->getViewModel();
    	$viewModel->setTemplate('layout/adminlayout');
    }  */
    public function getServiceConfig()
    {
    	return array(
    			'factories' => array(
    					'Admin\Model\Article' => function($sm) {
    						$dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
    						$article = new Article($dbAdapter);
    						return $article;
    					},
    					'Admin\Model\Category' => function($sm) {
    						$dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
    						$category = new Category($dbAdapter);
    						return $category;
    					},
    			),
    			//Khai báo các model ở đây.
    	);
    } 
    
    
}


