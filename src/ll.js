'use strict';

let Node = require('./node');

class Marlist {

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    add(data) {
        let newNode = new Node(data);

        let currentNode = this.head;

        // First node, empty list...
        if (!this.head) {
            this.head = newNode;
            this.length++;
            return newNode;
        }

        // List has a value in it. Get the last node with no next stored, and continue.
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        this.length++;

        return newNode;
    }



}

module.exports = Marlist;
