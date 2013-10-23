<?php
namespace Admin\Controller;

use Zend\Mvc\Controller\AbstractActionController,
	Zend\View\Model\ViewModel,
	Admin\Model\Article,
	Admin\Model\Category,
	Admin\Form\Article\Insert;
class IndexController extends AbstractActionController
{
	protected $mArticle;
	protected $mCategory;
	public function __construct(){
	}	
	public function getModelArticle()
	{
		if (!$this->mArticle) {
			$sm = $this->getServiceLocator();
			$this->mArticle = $sm->get('Admin\Model\Article');
		}
		return $this->mArticle;
	}
	public function getModelCategory()
	{
		if (!$this->mCategory) {
			$sm = $this->getServiceLocator();
			$this->mCategory = $sm->get('Admin\Model\Category');
		}
		return $this->mCategory;
	}
    public function indexAction()
    {
    	//$this->layout("layout/adminlayout");
    	
    	$page =  $this->params()->fromRoute('param', 1);
    	$dataItems = $this->getModelArticle()->listItem();
    	
    	//$iteratorAdapter = new \Zend\Paginator\Adapter\Iterator($dataItems);
    	$iteratorAdapter = new \Zend\Paginator\Adapter\DbSelect(
    			$dataItems,
    			$this->getModelArticle()->getAdapter()
    	);
    	$paginator = new \Zend\Paginator\Paginator($iteratorAdapter);
    	$paginator->setCurrentPageNumber($page);
    	$paginator->setItemCountPerPage(5);
    	//$paginator->setDefaultItemCountPerPage(5);
    	return new ViewModel(array(
    			'articles' => $paginator,
    	));
    	
    	//$message = $this->getEvent()->getRouteMatch()->getParams();
    }
    public function insertAction(){
    	//$this->layout("layout/adminlayout");
    	
    	$form = new Insert();//die();
    	$dataCategory =$this->getModelCategory()->getAllCategory()->toArray();
    	$newMenu =array();
    	$this->getModelCategory()->recursive($dataCategory,0,1,$newMenu);
    	$select = $this->getModelCategory()->recursiveSelect($newMenu);
    	
    	$form->get('cat_id')->setValueOptions(array(""=>"------------- Chọn -------------")+$select);
    	$request = $this->getRequest();
    	$postVal = $request->getPost();
    	if ($request->isPost()) {
    		//$validateNews = new News();
    		$form->setData($request->getPost());
    		if ($form->isValid()) {
    			$data = $form->getData();
    			unset($data['submit']);
    			echo "<pre>";
    			print_r($data);
    			echo "</pre>";
    			$this->getModelArticle()->insertItem($data);
    			return $this->redirect()->toRoute('admin');
    		}
    	}
    	return new ViewModel(array(
    			'form'=>$form
    	));
    }
   public function updateAction(){
    	//$this->layout("layout/adminlayout");
    	//$message = $this->getEvent()->getRouteMatch()->getParams();
    	$id = (int) $this->params()->fromRoute('param', 1);
    	$dataItem =$this->getModelArticle()->getItem($id);
    	if($dataItem===false){
    		return $this->redirect()->toRoute('admin');
    	}
    	$form = new Insert();
    	$dataCategory =$this->getModelCategory()->getAllCategory()->toArray();;
    	$newMenu =array();
    	$this->getModelCategory()->recursive($dataCategory,0,1,$newMenu);
    	$select = $this->getModelCategory()->recursiveSelect($newMenu);
    	
    	$form->get('cat_id')->setValueOptions(array(""=>"------------- Chọn -------------")+$select);
    	$request = $this->getRequest();
    	$postVal = $request->getPost();
    	if ($request->isPost()) {
    		//$validateNews = new News();
    		$form->setData($request->getPost());
    		if ($form->isValid()) {
    			$data = $form->getData();
    			unset($data['submit']);
    			$this->getModelArticle()->updateItem($id,$data);
    			return $this->redirect()->toRoute('admin');
    		}
    	}else{
    		$form->populateValues($dataItem);
    	}
    	return new ViewModel(array(
    			'form'=>$form
    	));
    }
    public function deleteAction(){
    	$viewModel = new ViewModel();
		$viewModel->setTerminal(true);
		
		return $viewModel;
    }
    
}
