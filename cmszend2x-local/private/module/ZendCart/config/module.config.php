<?php
return array (
		'controller_plugins' => array (
				'factories' => array (
						'ZendCart' => 'ZendCart\Factory\ZendCartFactory' 
				) 
		),
		'controllers' => array (
				'invokables' => array (
						'ZendCart\Controller\Index' => 'ZendCart\Controller\IndexController' 
				) 
		),
		
		
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'shopping' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/shopping[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'ZendCart\Controller\Index',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
    		/* 'template_map' => array(
    				'admin/layout'           => __DIR__ . '/../../Admin/view/layout/adminlayout.phtml',
    				'error/404'               => __DIR__ . '/../view/error/404.phtml',
    				'error/index'             => __DIR__ . '/../view/error/index.phtml',
    		), */
        'template_path_stack' => array(
            'ZendCart' => __DIR__ . '/../view',
        ),
    ),
);
