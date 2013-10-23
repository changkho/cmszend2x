<?php
namespace Admin\Form\Article;

use Zend\Form\Form,
	Zend\Form\Element,
	Zend\Validator\Validator;

class Insert extends Form
{
	public function __construct($name = null)
	{
		// we want to ignore the name passed
		parent::__construct('adminForm');

		$this->setAttribute('method', 'post');
		$this->add(array(
				'name' => 'name',
				'type'  => 'text',
				'attributes' => array(
						'required'=>true,
				),
				'options'=>array(
						'label' =>'Tiêu đề'
						)
		));
		$this->add(array(
				'name' => 'alias',
				'type'  => 'text',
				'attributes' => array(
						'class'=>'input-alias',
				),
				'options'=>array(
						'label' =>'Alias'
				)
		));
		$this->add(array(
				'name' => 'cat_id',
				'type'  => 'select',
				'attributes' => array(
						'required'=>true,
				),
				'options'=>array(
						'label' =>'Category'
				)
		));
		$this->add(array(
				'name' => 'is_home_page',
				'type'  => 'checkbox',
				'options'=>array(
						'label' =>'Homepage',
						'checked_value' =>1,
						'description'=>'Chỉ dùng cho bài viết thuộc ngành học'
				)
		));
		$this->add(array(
				'name' => 'islink',
				'type'  => 'checkbox',
				'options'=>array(
						'label' =>'Is link',
						'checked_value' =>1,
						'description'=>'Chỉ dùng cho bài viết thuộc ngành học'
				)
		));
		$this->add(array(
				'name' => 'link',
				'type'  => 'text',
				'attributes' => array(
						'required'=>true,
				),
				'options'=>array(
						'label' =>'Link',
				)
		));
		$this->add(array(
				'name' => 'active',
				'type'  => 'checkbox',
				'options'=>array(
						'label' =>'Active',
						'checked_value' =>1,
				)
		));
		
		$this->add(array(
				'name'=>'intro_text',
				'type'=>'textarea',
				'options'=>array(
						'label'=>'Intro text'
						),
				'attributes'=>array(
						'required'=>true
						)
				));
		
		$this->add(array(
				'name'=>'image',
				'type'=>'text',
				'options'=>array(
						'label'=>'Hình đại diện',
				),
				'attributes'=>array(
						'required'=>true,
						'class'=>'finder|images:/articles/',
						//'id'    => 'image',
						
				)
		));
		$this->add(array(
				'name'=>'content',
				'type'=>'textarea',
				'options'=>array(
						'label'=>'Chi tiết'
				),
				'attributes'=>array(
						'class'=>'editor Full',
				)
		));
		$this->add(array(
				'name'=>'submit',
				'type'=>'submit',
				'options'=>array(
						'label'=>'  '
				),
				'attributes'=>array(
						'value'=>'Submit',
				)
		));
		

	}
}
