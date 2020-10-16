class linked_list {
    constructor(value) {
        this.head = { value, next: null };
        this.tail = this.head;
    }

    add(value) {
        const node = { value, next: null };
        this.tail.next = node;
        this.tail = node;
    }

    remove() {
        let current_node = this.head;
        while (current_node.next != this.tail) {
            current_node = current_node.next;
        }
        current_node.next = null;
        this.tail = current_node;
    }
}

const list = new linked_list(10);
