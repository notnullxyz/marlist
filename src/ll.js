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

    search(pos) {
        let currentNode = this.head;
        let count = 1;

        // non-existent position
        if (this.length === 0 || pos < 1 || pos > this.length) {
            throw new Error('Invalid Node Position', position);
        }

        while (count < pos) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }



}

module.exports = Marlist;
