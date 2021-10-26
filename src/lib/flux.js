class Flux {
    constructor(storeManager) {
        this.observers = [];

        this.storeManager = storeManager;
        this.state = storeManager({});
    }

    getState() {
        return this.state;
    }

    dispatch(action) {
        this.state = this.storeManager(action, this.state);
        this.notify();
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((obsvr) => obsvr !== func);
    }

    notify() {
        this.observers.forEach((obsvr) => obsvr());
    }
}

export { Flux };
