<?php
namespace Album\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class AlbumController extends AbstractActionController
{
	public function indexAction()
	{
		$message = $this->getEvent()->getRouteMatch()->getParams();
		echo "<pre>";
		print_r($message);
		echo "</pre>";
		return new ViewModel();
	}

	public function addAction()
	{
		$message = $this->getEvent()->getRouteMatch()->getParams();
		//$this->view->content= $message;
		return new ViewModel(array('content'=>$message));
	}

}