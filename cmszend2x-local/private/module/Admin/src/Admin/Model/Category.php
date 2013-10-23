<?php
namespace Admin\Model;
use Zend\Crypt\Password\Apache;

use Zend\Db\TableGateway\AbstractTableGateway,
Zend\Db\Adapter\Adapter,
Zend\Db\ResultSet\ResultSet,
Zend\Db\Sql\Sql,
Zend\Db\Sql\Select;

class Category extends AbstractTableGateway {
	protected $table = 'categories';
    protected $_primary="id";
    protected $db;
    public function __construct(Adapter $adapter) {
    	$this->adapter = $adapter;
    	//$this->resultSetPrototype = new ResultSet();
    	// $this->resultSetPrototype->setArrayObjectPrototype(new Album());
    	$this->initialize ();
    }
	public function getAllCategory($tbl='categories'){
		 $resultSet = $this->select(function (Select $select) {
			//$select->from();
			$select->order('name ASC');
		});
		 return $resultSet;
		 	
	}
	
	public function recursive($menu,$parents = 0,$level = 1,&$newMenu){
		foreach ($menu as $key => $val){
			if($val['parent_id'] == $parents){
				$val['level'] = $level;
				$newMenu[] = $val;
				unset($menu[$key]);
				$this->recursive($menu,$val['id'],$val['level'] + 1,$newMenu);
			}
		}
	}
   public function recursiveSelect($data){
   		$html = '';
   		$result = array();
	   	foreach ($data as $key => $val){
	   		if($val['level'] == 1){
	   			$result[$val['id']]='+ ' . $val['name']; 
	   		}else{
	   			$str ='---';
	   			$html = str_repeat($str, $val['level']).$val['name'];
	   			$result[$val['id']]=str_repeat($str, $val['level']).$val['name'];
	   		}
	   	}
	   	return $result;
   } 
	
}