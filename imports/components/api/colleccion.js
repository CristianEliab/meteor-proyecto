import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Colleccion = new Mongo.Collection('Coleccion');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
        return Tasks.find();
    });
}

Meteor.methods({
    'tarea.insert'(task) {

        Colleccion.insert(task);
        //   owner: this.userId,
        //   username: Meteor.users.findOne(this.userId).username,
    },
    'proyecto.insert'(proyecto) {

        Colleccion.insert(proyecto);
        //   owner: this.userId,
        //   username: Meteor.users.findOne(this.userId).username,
    },
    'tasks.remove'(taskId) {
        Colleccion.remove(taskId);
    },
});