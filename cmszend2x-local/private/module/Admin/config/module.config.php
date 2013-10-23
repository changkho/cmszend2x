<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2013 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

return array(
		'controllers' => array(
				'invokables' => array(
						'Admin\Controller\Index' => 'Admin\Controller\IndexController',
				),
		),

		// The following section is new and should be added to your file
		'router' => array(
				'routes' => array(
						'admin' => array(
								'type'    => 'segment',
								'options' => array(
				                    'route' => '/admin[/:controllers][/:action][/:param]',
				                    'constraints' => array(
				                    'controllers' => '[a-zA-Z][a-zA-Z0-9_-]*',
				                     'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
				                     'param'=> '(.*)*'
				                    // 'id' => '[0-9]+',
				                    // 'page' => '[0-9]+',
				                    ),
				                    'defaults' => array(
				                        'controller' => 'Admin\Controller\Index',
				                        'action' => 'index',
				                    ),
				                ),
						),
					
				),
		),

		 'view_manager' => array(
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => array(
            'admin/layout'           => __DIR__ . '/../view/layout/adminlayout.phtml',
            'error/404'               => __DIR__ . '/../view/error/404.phtml',
            'error/index'             => __DIR__ . '/../view/error/index.phtml',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
    ),
);