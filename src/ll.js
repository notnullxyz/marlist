'use strict';

let Node = require('./node');

/**
 * Singly Linked List
 */
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
            throw new Error('Invalid Node Position to search', pos);
        }

        while (count < pos) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }

    delete(pos) {
        let currentNode = this.head;
        let length = this.length;
        let count = 0;
        let beforeNodeToDelete = null;
        let nodeToDelete = null;
        let deletedNode = null;

        // non-existent position.
        if (pos < 0 || pos > length) {
            throw new Error('Bad position to delete.');
        }

        // head node deletion. Simple
        if (pos === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode;
            currentNode = null;
            this.length--;

            return deletedNode;
        }

        // non-head node deleted. Complex
        while (count < pos) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this.length--;

        return deletedNode;
    }


}

module.exports = Marlist;
