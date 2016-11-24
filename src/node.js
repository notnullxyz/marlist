'use strict';

class Node {

    /**
     * Constructor for a new node.
     * @param data The stored data for the currently instantiated node.
     * @param next The address of the next node.
     */
    constructor(data) {
        this.time = new Date().getTime();
        this.data = data;
    }
}

module.exports = Node;
