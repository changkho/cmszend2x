<?php

namespace Admin\Model;

use Zend\Db\TableGateway\AbstractTableGateway,
	Zend\Db\Adapter\Adapter, 
	Zend\Db\ResultSet\ResultSet, 
	Zend\Db\Sql\Select;

class Article extends AbstractTableGateway {
	protected $table = 'articles';
	public function __construct(Adapter $adapter) {
		$this->adapter = $adapter;
		// $this->resultSetPrototype = new ResultSet();
		// $this->resultSetPrototype->setArrayObjectPrototype(new Album());
		$this->initialize ();
	}
	public function listItem() {
		/* $resultSet = $this->select ();
		$resultSet->buffer();
		$resultSet->next();
		return $resultSet; */
		/* $resultSet = $this->getSql()
							->select()
							->from('category')
							->order(array('id desc'));
		return $resultSet;  */
		
		$select = new \Zend\Db\Sql\Select ;
		$select->from('articles');
		//$select->join('others_category', 'articles.cat_id = others_category.cat_id',array('name_category'=>'name'));
		$select->order('id DESC');
		return $select;
		//echo $select->getSqlString();die();
		
	}
	public function getItem($id) {
		$resultSet = $this->select("id='$id'")->toArray();
		return current($resultSet);
	}
	public function insertItem($data) {
		return $this->insert($data);
	}
	public function updateItem($id,$data) {
		return $this->update($data,"id = '$id'");
	}
}

