<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Album\Controller\Album' => 'Album\Controller\AlbumController',
        ),
    ),

    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
           'albumadd' => array(
        				'type' => 'Zend\Mvc\Router\Http\Regex',
        				'options' => array(
        						'regex'    => '/album/(?<param>[a-zA-Z0-9_-]+)(\.(?<format>(json|html|xml|rss)))?',
        						'defaults' => array(
        								'controller' => 'Album\Controller\Album',
        								'action'     => 'add',
        								'format'     => 'html',
        						),
        						'spec' => '/album/%param%.%format%',
        				),
        		),
            'album' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/album[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Album\Controller\Album',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),

    'view_manager' => array(
        'template_path_stack' => array(
            'album' => __DIR__ . '/../view',
        ),
    ),
);
