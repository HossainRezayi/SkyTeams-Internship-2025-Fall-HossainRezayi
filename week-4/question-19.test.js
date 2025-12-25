const Queue = require("./question-19"); // Adjust path as necessary

describe("Queue Class", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should initialize with empty stacks", () => {
    expect(queue.stack1).toEqual([]);
    expect(queue.stack2).toEqual([]);
  });

  describe("enqueue", () => {
    test("should add elements to stack1", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.stack1).toEqual([1, 2]);
    });
  });

  test("should transfer elements from stack1 to stack2 if stack2 is empty", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const result = queue.dequeue();
    expect(result).toBe(1);
    expect(queue.stack2).toEqual([2]);
    expect(queue.stack1).toEqual([]);
  });
});
