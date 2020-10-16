class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }
    
    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }

    
    pop() {
        if (this._length) {
            const last_val = this._storage[this._length - 1];
            delete this._storage[this._length - 1];
            this._length--;
            return last_val;
        }
    }
    
    peek() {
        if (this._length) {
            return this._storage[this._length - 1];
        }
    }
}
const my_stack = new Stack();

my_stack.push('zero')
my_stack.push(1)
my_stack.push(my_stack)