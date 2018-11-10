import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Colleccion = new Mongo.Collection('Coleccion');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('tasks', function tasksPublication() {
        return Colleccion.find();
    });
    Meteor.publish('proyectos', function tasksPublication() {
        return Colleccion.find();
    });
}

Meteor.methods({
    'proyecto.insert'(proyecto) {
        Colleccion.insert(proyecto);
        //   owner: this.userId,
        //   username: Meteor.users.findOne(this.userId).username,
    },
    'proyectos.update'(tarea) {
        Colleccion.update(tarea.idProyecto, {$push:tarea});
    },
});