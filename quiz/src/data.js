const data = [
  {
    id: 1,
    question: "Which one of the following is the process of inserting an element in the stack?",
    answers: [
      {
        text: "Insert",
        correct: false,
      },
      {
        text: "Add",
        correct: false,
      },
      {
        text: "Push",
        correct: true,
      },
      {
        text: "None of the above",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which data structure is required to convert the infix to prefix notation?",
    answers: [
      {
        text: "Stack",
        correct: true,
      },
      {
        text: "Linked List",
        correct: false,
      },
      {
        text: "Binary Tree",
        correct: false,
      },
      {
        text: "Queue",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Which of the following is the prefix form of A+B*C?",
    answers: [
      {
        text: "A+(BC*)",
        correct: false,
      },
      {
        text: "+AB*C",
        correct: false,
      },
      {
        text: "ABC+*",
        correct: false,
      },
      {
        text: "+A*BC",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Which of the following principle does Queue use?",
    answers: [
      {
        text: "LIFO",
        correct: false,
      },
      {
        text: "FIFO",
        correct: true,
      },
      {
        text: "Linear Tree",
        correct: false,
      },
      {
        text: "Ordered array",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "The time complexity of enqueue operation in Queue is __",
    answers: [
      {
        text: "O(1)",
        correct: true,
      },
      {
        text: "O(n)",
        correct: false,
      },
      {
        text: "O(logn)",
        correct: false,
      },
      {
        text: "O(nlogn)",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "How many Queues are required to implement a Stack?",
    answers: [
      {
        text: "3",
        correct: false,
      },
      {
        text: "2",
        correct: true,
      },
      {
        text: "1",
        correct: false,
      },
      {
        text: "4",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Which of the following is the time complexity to search an element in the linked list?",
    answers: [
      {
        text: "O(1)",
        correct: false,
      },
      {
        text: "O(n)",
        correct: true,
      },
      {
        text: "O(logn)",
        correct: false,
      },
      {
        text: "O(nlogn)",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Which of the following correctly declares an array?",
    answers: [
      {
        text: "int arr[20];",
        correct: true,
      },
      {
        text: "int arr;",
        correct: false,
      },
      {
        text: "arr{20};",
        correct: false,
      },
      {
        text: "array arr[20];",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "The best technique for handling collision is___",
    answers: [
      {
        text: "Separate chaining",
        correct: false,
      },
      {
        text: "Double hashing",
        correct: false,
      },
      {
        text: "Linear probing",
        correct: false,
      },
      {
        text: "Quadratic probing",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "Which of the following is not an OOPS concept?",
    answers: [
      {
        text: "Encapsulation",
        correct: false,
      },
      {
        text: "Polymorphism",
        correct: false,
      },
      {
        text: "Exception",
        correct: true,
      },
      {
        text: "Abstraction",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Which feature of OOPS derives the class from another class?",
    answers: [
      {
        text: "Inheritance",
        correct: true,
      },
      {
        text: "Data hiding",
        correct: false,
      },
      {
        text: "Encapsulation",
        correct: false,
      },
      {
        text: "Polymorphism",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Which among the following is not a member of the class?",
    answers: [
      {
        text: "Virtual function",
        correct: false,
      },
      {
        text: "const function",
        correct: false,
      },
      {
        text: "Static function",
        correct: false,
      },
      {
        text: "Friend function",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question: "Which operator overloads using the friend function?",
    answers: [
      {
        text: "*",
        correct: true,
      },
      {
        text: "( )",
        correct: false,
      },
      {
        text: "->",
        correct: false,
      },
      {
        text: "=",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Which of the following variable violates the definition of encapsulation?",
    answers: [
      {
        text: "Array variables",
        correct: false,
      },
      {
        text: "Local variables",
        correct: false,
      },
      {
        text: "Global variables",
        correct: true,
      },
      {
        text: "Public variables",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "_________ command makes the updates performed by the transaction permanent in the database?",
    answers: [
      {
        text: "ROLLBACK",
        correct: false,
      },
      {
        text: "COMMIT",
        correct: true,
      },
      {
        text: "TRUNCATE",
        correct: false,
      },
      {
        text: "DELETE",
        correct: false,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "₹ 5000" },
  { id: 2, amount: "₹ 15000" },
  { id: 3, amount: "₹ 30000" },
  { id: 4, amount: "₹ 60000" },
  { id: 5, amount: "₹ 100000" },
  { id: 6, amount: "₹ 150000" },
  { id: 7, amount: "₹ 250000" },
  { id: 8, amount: "₹ 400000" },
  { id: 9, amount: "₹ 600000" },
  { id: 10, amount: "₹ 1000000" },
  { id: 11, amount: "₹ 5000000" },
  { id: 12, amount: "₹ 100000000" },
  { id: 13, amount: "₹ 300000000" },
  { id: 14, amount: "₹ 500000000" },
  { id: 15, amount: "₹ 1000000000" },
].reverse();

export { prizeMoney, data };