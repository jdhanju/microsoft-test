import parseArrayToBinaryTree from '../microsoft-p1';

describe('parseArrayToBinaryTree', () => {
  it('should convert an array representation to a binary tree', () => {
    const input = ["a", ["b", ["b1"], ["b2", ["b21"], ["b22"]]], ["c", ["c1", ["c11", ["c111"]], ["c12", null, ["c121"]]], ["c2", null, ["c21"]]]];
    const expectedOutput = {
      id: "a",
      left: {
        id: "b",
        left: {
          id: "b1"
        },
        right: {
          id: "b2",
          left: {
            id: "b21"
          },
          right: {
            id: "b22"
          }
        }
      },
      right: {
        id: "c",
        left: {
          id: "c1",
          left: {
            id: "c11",
            left: {
              id: "c111"
            },
            right: null
          },
          right: {
            id: "c12",
            left: null,
            right: {
              id: "c121"
            }
          }
        },
        right: {
          id: "c2",
          left: null,
          right: {
            id: "c21"
          }
        }
      }
    };

    const output = parseArrayToBinaryTree(input);

    expect(output).toEqual(expectedOutput);
  });

  it('should handle null values in the array', () => {
    const input = [1, [2], [3, null, [5]]];
    const expectedOutput = {
      id: 1,
      left: {
        id: 2
      },
      right: {
        id: 3,
        left: null,
        right: {
          id: 5
        }
      }
    };

    const output = parseArrayToBinaryTree(input);

    expect(output).toEqual(expectedOutput);
  });

  it('handle an empty array', ()=> {
    const input = [];
    const expectedOutput = {};

    const output = parseArrayToBinaryTree(input);

    expect(output).toEqual(expectedOutput);
  })

  it('handle array with null', ()=> {
    const input = [null];
    const expectedOutput = {id: null};

    const output = parseArrayToBinaryTree(input);

    expect(output).toEqual(expectedOutput);
  })
});
