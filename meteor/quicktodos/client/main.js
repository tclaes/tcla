import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import {Todos} from '../api/todos.js';

import './main.html';


Template.todoList.helpers({
	title: function(){
		return '.tcla todo list';
		},
	todos: function(){
		return Todos.find({});
	}	
});

Template.todoList.events({
	'submit .todoform'(event){
		event.preventDefault();
		const name = event.target.name.value;
		const time = event.target.time.value;

		console.log(name + ' ' + time);

		Todos.insert({
			name: name,
			time: time
		});

		event.target.name.value = ' ';
		event.target.time.value = ' ';

	}
});
