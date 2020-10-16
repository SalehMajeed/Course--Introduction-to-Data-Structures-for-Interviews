class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._head_index = 0;
    }

    enqueue(value) {
        const last_index = this._length + this._head_index
        this._storage[last_index] = value;
        this._length++;
    }

    dequeue() {
        if (this._length) {
            const first_val = this._storage[this._head_index];
            delete this._storage[this._head_index];
            this._length--;
            this._head_index++;
            return first_val;
        }
    }

    peek() {
        if (this._length){
            const last_val = this._storage[this._length - 1]
            return last_val // return the last value inserted

            // the below method return first value in the queue
            // const first = this._storage[this._head_index];
            // return first 
        }
    }
}

const queue = new Queue();
queue.enqueue('zero');
queue.enqueue(1);
queue.enqueue(queue);
queue.enqueue(343);