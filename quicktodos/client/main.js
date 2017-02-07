import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import {Todos} from '../api/todos.js';

import './main.html';


Template.main.helpers({
	title(){
		return '.tcla todo list';
		},
	tasks(){
		return Todos.find({});
	}	
});
