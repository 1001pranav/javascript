# LeetCode Interview Preparation Guide

> **📊 Progress:** Track your journey through 200+ essential coding interview problems
>
> **🎯 Goal:** Master patterns and techniques to ace technical interviews at top companies

## 📋 Table of Contents
- [Core Patterns (150 Problems)](#core-patterns)
  - [Array & Hashing](#array--hashing) - 9 problems
  - [Two Pointers](#two-pointers) - 5 problems
  - [Sliding Window](#sliding-window) - 6 problems
  - [Stack](#stack) - 7 problems
  - [Binary Search](#binary-search) - 7 problems
  - [Linked List](#linked-list) - 11 problems
  - [Trees](#trees) - 15 problems
  - [Trie](#trie) - 3 problems
  - [Heap & Priority Queue](#heap--priority-queue) - 7 problems
  - [Backtracking](#backtracking) - 9 problems
  - [Graphs](#graphs) - 19 problems
  - [Dynamic Programming](#dynamic-programming) - 26 problems
  - [Greedy](#greedy) - 4 problems
  - [Intervals](#intervals) - 7 problems
  - [Matrix](#matrix) - 3 problems
  - [Bit Manipulation](#bit-manipulation) - 12 problems
- [Additional Hard Problems](#additional-hard-problems) - 20 problems
- [Must-Know Interview Questions](#must-know-interview-questions) - 30 problems
- [Company-Specific Favorites](#company-specific-favorites)

## 🎓 Study Strategy
1. **Start with Easy problems** in each category to build foundations
2. **Master one pattern at a time** before moving to the next
3. **Focus on understanding, not memorization** - understand the "why"
4. **Practice time management** - aim for 20-30 min for Medium, 40-50 min for Hard
5. **Review and repeat** - revisit problems after 1 week, then 1 month

## 📈 Difficulty Distribution
- **Easy:** 28 problems (19%)
- **Medium:** 99 problems (66%)
- **Hard:** 43 problems (15%)

---

# Core Patterns

## Array & Hashing

### 1. [Contains Duplicate](./1.checkDuplicateValues.js) ✅
**Difficulty:** Easy
**Tags:** Array, Hash Table
**Problem:** Given an integer array `nums`, return `true` if any value appears at least twice, and `false` if every element is distinct.
```
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
```
**Time:** O(n) | **Space:** O(n)

### 2. [Valid Anagram](./2.anagram.js) ✅
**Difficulty:** Easy
**Tags:** Array, Hash Table
**Problem:** Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.
```
Input: s = "anagram", t = "nagaram"
Output: true

Input: s = "rat", t = "car"
Output: false
```
**Time:** O(n) | **Space:** O(1) - fixed 26 letters

### 3. [Two Sum](./3.twoSum.js) ✅
**Difficulty:** Easy
**Tags:** Array, Hash Table
**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`.
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 9

Input: nums = [3,2,4], target = 6
Output: [1,2]
```
**Time:** O(n) | **Space:** O(n)

### 4. [Group Anagrams](./4.anagramArray.js) ✅
**Difficulty:** Medium
**Tags:** Array, String, Hash Table
**Problem:** Given an array of strings `strs`, group the anagrams together.
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: strs = [""]
Output: [[""]]
```
**Time:** O(n * k) where k is max string length | **Space:** O(n * k)

### 5. [Top K Frequent Elements](./5.topKElement.js) ✅
**Difficulty:** Medium
**Tags:** String, Hash Table, Sorting
**Problem:** Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]
```
**Time:** O(n) using bucket sort | **Space:** O(n)

### 6. [Product of Array Except Self](./6.productArrayExceptSelf.js) ✅
**Difficulty:** Medium
**Tags:** Array, String, Encoding/Decoding
**Problem:** Given an integer array `nums`, return an array where `answer[i]` is the product of all elements except `nums[i]`. Must run in O(n) without division.
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```
**Time:** O(n) | **Space:** O(1) - output array doesn't count

### 7. [Valid Sudoku](./7.validSudoku.js)
**Difficulty:** Medium
**Tags:** Array, Prefix Sum
**Problem:** Determine if a 9x9 Sudoku board is valid. Only filled cells need to be validated according to Sudoku rules.
```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```
**Time:** O(1) - board is fixed 9x9 | **Space:** O(1)

### 8. [Encode and Decode Strings](./8.encodeDecode.js) ✅
**Difficulty:** Medium
**Tags:** Array, Hash Table, Sorting
**Problem:** Design an algorithm to encode a list of strings to a single string and decode it back.
```
Input: ["hello","world"]
Encoded: "5#hello5#world"
Decoded: ["hello","world"]

Input: [""]
Encoded: "0#"
Decoded: [""]
```
**Time:** O(n) for both encode and decode | **Space:** O(1)

### 9. [Longest Consecutive Sequence](./9.longestConsicutiveSequence.js) ✅
**Difficulty:** Medium
**Tags:** Array, Hash Table
**Problem:** Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. Must run in O(n).
```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: [1,2,3,4]

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```
**Time:** O(n) | **Space:** O(n)

---

## Two Pointers

### 10. [Valid Palindrome](./10.palindrome.js) ✅
**Difficulty:** Easy
**Tags:** String, Two Pointers
**Problem:** Given a string `s`, return `true` if it is a palindrome (alphanumeric characters only, ignoring case).
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome

Input: s = "race a car"
Output: false
```
**Time:** O(n) | **Space:** O(1)

### 11. [Two Sum II - Input Array Is Sorted](./11.twoSumSorted.js) ✅
**Difficulty:** Medium
**Tags:** Array, Two Pointers, Greedy
**Problem:** Given a sorted array `numbers`, return indices of two numbers that add up to `target`. Use 1-indexed positions.
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]

Input: numbers = [2,3,4], target = 6
Output: [1,3]
```
**Time:** O(n) | **Space:** O(1)

### 12. [3Sum](./12.3sum.js)
**Difficulty:** Medium
**Tags:** Array, Two Pointers
**Problem:** Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` where `i != j != k` and they sum to zero.
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = [0,1,1]
Output: []
```
**Time:** O(n²) | **Space:** O(1) - excluding output

### 13. Container With Most Water
**Difficulty:** Medium
**Tags:** Array, Two Pointers, Sorting
**Problem:** Given array `height` where `height[i]` is height of line `i`, find two lines that form a container holding the most water.
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: Lines at index 1 and 8 with heights 8 and 7

Input: height = [1,1]
Output: 1
```
**Time:** O(n) | **Space:** O(1)

### 14. Trapping Rain Water
**Difficulty:** Hard
**Tags:** Array, Two Pointers, Sorting
**Problem:** Given `height` array representing elevation map where width of each bar is 1, compute how much water can be trapped after raining.
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: 6 units of rain water trapped

Input: height = [4,2,0,3,2,5]
Output: 9
```
**Time:** O(n) | **Space:** O(1) with two pointers

---

## Sliding Window

### 15. Best Time to Buy And Sell Stock
**Difficulty:** Easy
**Tags:** String, Sliding Window, Hash Table
**Problem:** Given array `prices` where `prices[i]` is price on day `i`, maximize profit by buying on one day and selling on a future day.
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price=1), sell on day 5 (price=6)

Input: prices = [7,6,4,3,1]
Output: 0
```
**Time:** O(n) | **Space:** O(1)

### 16. Longest Substring Without Repeating Characters
**Difficulty:** Medium
**Tags:** String, Sliding Window, Hash Table
**Problem:** Given string `s`, find length of longest substring without repeating characters.
```
Input: s = "abcabcbb"
Output: 3
Explanation: "abc"

Input: s = "bbbbb"
Output: 1
```
**Time:** O(n) | **Space:** O(min(n,m)) where m is charset size

### 17. Longest Repeating Character Replacement
**Difficulty:** Medium
**Tags:** Array, Sliding Window
**Problem:** Given string `s` and integer `k`, you can replace any character at most `k` times. Return length of longest substring containing same letter.
```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace 2 'A's with 'B's or vice versa

Input: s = "AABABBA", k = 1
Output: 4
```
**Time:** O(n) | **Space:** O(1) - fixed 26 letters

### 18. Permutation In String
**Difficulty:** Medium
**Tags:** String, Sliding Window
**Problem:** Given strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`.
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains "ba"

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```
**Time:** O(n) | **Space:** O(1)

### 19. Minimum Window Substring
**Difficulty:** Hard
**Tags:** String, Sliding Window, Hash Table
**Problem:** Given strings `s` and `t`, return minimum window substring of `s` containing all characters of `t` (including duplicates).
```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Input: s = "a", t = "a"
Output: "a"
```
**Time:** O(n + m) | **Space:** O(n + m)

### 20. Sliding Window Maximum
**Difficulty:** Hard
**Tags:** String, Sliding Window, Two Pointers
**Problem:** Given array `nums` and integer `k`, return max value in each sliding window of size `k`.
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window [1,3,-1] -> 3
Window [3,-1,-3] -> 3, etc.

Input: nums = [1], k = 1
Output: [1]
```
**Time:** O(n) using deque | **Space:** O(k)

---

## Stack

### 21. Valid Parentheses
**Difficulty:** Easy
**Tags:** String, Stack
**Problem:** Given string `s` containing `()[]{}`, determine if the input string is valid (brackets must close in correct order).
```
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
```
**Time:** O(n) | **Space:** O(n)

### 22. Min Stack
**Difficulty:** Medium
**Tags:** String, Stack
**Problem:** Design a stack that supports push, pop, top, and retrieving minimum element in O(1).
```
Input:
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output:
[null,null,null,null,-3,null,0,-2]
```
**Time:** O(1) for all operations | **Space:** O(n)

### 23. Evaluate Reverse Polish Notation
**Difficulty:** Medium
**Tags:** Stack, Monotonic Stack
**Problem:** Evaluate the value of an arithmetic expression in Reverse Polish Notation.
```
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Input: tokens = ["4","13","5","/","+"]
Output: 6
```
**Time:** O(n) | **Space:** O(n)

### 24. Generate Parentheses
**Difficulty:** Medium
**Tags:** String, Stack
**Problem:** Given `n` pairs of parentheses, generate all combinations of well-formed parentheses.
```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Input: n = 1
Output: ["()"]
```
**Time:** O(4^n / √n) Catalan number | **Space:** O(n) recursion depth

### 25. Daily Temperatures
**Difficulty:** Medium
**Tags:** Stack
**Problem:** Given array `temperatures`, return array where `answer[i]` is number of days until a warmer temperature. If no warmer day, use 0.
```
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
```
**Time:** O(n) | **Space:** O(n)

### 26. Car Fleet
**Difficulty:** Medium
**Tags:** Stack, Design
**Problem:** `n` cars going to same destination. Given `position` and `speed` arrays, return number of car fleets that arrive at destination.
```
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation: Cars form 3 fleets

Input: target = 10, position = [3], speed = [3]
Output: 1
```
**Time:** O(n log n) | **Space:** O(n)

### 27. Largest Rectangle In Histogram
**Difficulty:** Hard
**Tags:** Stack, Monotonic Stack
**Problem:** Given array `heights` representing histogram's bar height where width is 1, find area of largest rectangle in histogram.
```
Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: Rectangle of width 2, height 5

Input: heights = [2,4]
Output: 4
```
**Time:** O(n) using stack | **Space:** O(n)

---

## Binary Search

### 28. Binary Search
**Difficulty:** Easy
**Tags:** Array, Binary Search
**Problem:** Given sorted array `nums` and target, return index of target or -1 if not found.
```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
```
**Time:** O(log n) | **Space:** O(1)

### 29. Search a 2D Matrix
**Difficulty:** Medium
**Tags:** Array, Binary Search
**Problem:** Given `m x n` matrix where each row is sorted and first integer of each row > last integer of previous row, search for target.
```
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
```
**Time:** O(log(m*n)) | **Space:** O(1)

### 30. Koko Eating Bananas
**Difficulty:** Medium
**Tags:** Array, Binary Search
**Problem:** Given `piles` of bananas and `h` hours, find minimum eating speed `k` (bananas/hour) to eat all bananas within `h` hours.
```
Input: piles = [3,6,7,11], h = 8
Output: 4

Input: piles = [30,11,23,4,20], h = 5
Output: 30
```
**Time:** O(n log m) where m is max pile | **Space:** O(1)

### 31. Find Minimum In Rotated Sorted Array
**Difficulty:** Medium
**Tags:** Array, Binary Search
**Problem:** Given sorted rotated array `nums` of unique elements, return minimum element.
```
Input: nums = [3,4,5,1,2]
Output: 1

Input: nums = [4,5,6,7,0,1,2]
Output: 0
```
**Time:** O(log n) | **Space:** O(1)

### 32. Search In Rotated Sorted Array
**Difficulty:** Medium
**Tags:** Array, Binary Search
**Problem:** Given sorted rotated array `nums` of unique elements and target, return index or -1.
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```
**Time:** O(log n) | **Space:** O(1)

### 33. Time Based Key-Value Store
**Difficulty:** Medium
**Tags:** Array, Binary Search, Matrix
**Problem:** Design a time-based key-value data structure that can store multiple values for same key at different timestamps and retrieve value at certain timestamp.
```
Input:
["TimeMap","set","get","get","set","get","get"]
[[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
Output:
[null,null,"bar","bar",null,"bar2","bar2"]
```
**Time:** O(log n) for get | **Space:** O(n)

### 34. Median of Two Sorted Arrays
**Difficulty:** Hard
**Tags:** Array, Binary Search
**Problem:** Given two sorted arrays `nums1` and `nums2`, return median of the two sorted arrays. Overall runtime must be O(log(m+n)).
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.5
```
**Time:** O(log(min(m,n))) | **Space:** O(1)

---

## Linked List

### 35. Reverse Linked List
**Difficulty:** Easy
**Tags:** Linked List
**Problem:** Given head of singly linked list, reverse the list.
```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = []
Output: []
```
**Time:** O(n) | **Space:** O(1) iterative

### 36. Merge Two Sorted Lists
**Difficulty:** Easy
**Tags:** Linked List, Two Pointers
**Problem:** Merge two sorted linked lists into one sorted list.
```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []
```
**Time:** O(n + m) | **Space:** O(1)

### 37. Reorder List
**Difficulty:** Medium
**Tags:** Linked List, Two Pointers
**Problem:** Given linked list, reorder it to: L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → ...
```
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```
**Time:** O(n) | **Space:** O(1)

### 38. Remove Nth Node From End of List
**Difficulty:** Medium
**Tags:** Linked List, Recursion
**Problem:** Given head of linked list, remove nth node from end and return head.
```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []
```
**Time:** O(n) | **Space:** O(1)

### 39. Copy List With Random Pointer
**Difficulty:** Medium
**Tags:** Linked List, Two Pointers
**Problem:** Deep copy linked list where each node has `next` and `random` pointer.
```
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```
**Time:** O(n) | **Space:** O(n) or O(1) with clever pointer manipulation

### 40. Add Two Numbers
**Difficulty:** Medium
**Tags:** Linked List, Recursion
**Problem:** Given two non-empty linked lists representing non-negative integers (reversed order), add them and return sum as linked list.
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807

Input: l1 = [9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,1]
```
**Time:** O(max(m,n)) | **Space:** O(max(m,n))

### 41. Linked List Cycle
**Difficulty:** Easy
**Tags:** Linked List, Recursion
**Problem:** Given head of linked list, determine if it has a cycle.
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: Cycle at node index 1

Input: head = [1], pos = -1
Output: false
```
**Time:** O(n) Floyd's algorithm | **Space:** O(1)

### 42. Find The Duplicate Number
**Difficulty:** Medium
**Tags:** Linked List, Two Pointers
**Problem:** Given array `nums` containing `n + 1` integers where each is in range `[1, n]`, find the duplicate. Only one duplicate but may repeat multiple times.
```
Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3
```
**Time:** O(n) Floyd's cycle detection | **Space:** O(1)

### 43. LRU Cache
**Difficulty:** Medium
**Tags:** Linked List, Hash Table
**Problem:** Design Least Recently Used (LRU) cache with `get` and `put` operations in O(1).
```
Input:
["LRUCache","put","put","get","put","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
Output:
[null,null,null,1,null,-1,null,-1,3,4]
```
**Time:** O(1) for both operations | **Space:** O(capacity)

### 44. Merge K Sorted Lists
**Difficulty:** Hard
**Tags:** Linked List, Merge Sort
**Problem:** Merge k sorted linked lists into one sorted list.
```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Input: lists = []
Output: []
```
**Time:** O(n log k) using heap | **Space:** O(k)

### 45. Reverse Nodes In K-Group
**Difficulty:** Hard
**Tags:** Linked List, Two Pointers, Divide and Conquer
**Problem:** Given linked list, reverse nodes in groups of `k` and return modified list.
```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```
**Time:** O(n) | **Space:** O(1)

---

## Trees

### 46. Invert Binary Tree
**Difficulty:** Easy
**Tags:** Tree, DFS
**Problem:** Invert a binary tree (mirror image).
```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Input: root = []
Output: []
```
**Time:** O(n) | **Space:** O(h) where h is height

### 47. Maximum Depth of Binary Tree
**Difficulty:** Easy
**Tags:** Tree, DFS
**Problem:** Find maximum depth (number of nodes along longest path from root to leaf).
```
Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2
```
**Time:** O(n) | **Space:** O(h)

### 48. Diameter of Binary Tree
**Difficulty:** Easy
**Tags:** Tree, DFS
**Problem:** Find diameter (length of longest path between any two nodes, may not pass through root).
```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: Path [4,2,1,3] or [5,2,1,3]

Input: root = [1,2]
Output: 1
```
**Time:** O(n) | **Space:** O(h)

### 49. Balanced Binary Tree
**Difficulty:** Easy
**Tags:** Tree, DFS
**Problem:** Determine if binary tree is height-balanced (left and right subtrees differ by at most 1 in height).
```
Input: root = [3,9,20,null,null,15,7]
Output: true

Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
```
**Time:** O(n) | **Space:** O(h)

### 50. Same Tree
**Difficulty:** Easy
**Tags:** Tree, DFS
**Problem:** Check if two binary trees are structurally identical with same node values.
```
Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false
```
**Time:** O(n) | **Space:** O(h)

### 51. Subtree of Another Tree
**Difficulty:** Easy
**Tags:** Tree, DFS
**Problem:** Check if tree `subRoot` is a subtree of tree `root`.
```
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
```
**Time:** O(m * n) | **Space:** O(h)

### 52. Lowest Common Ancestor of a Binary Search Tree
**Difficulty:** Medium
**Tags:** Tree, BFS
**Problem:** Find lowest common ancestor of two nodes in BST.
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
```
**Time:** O(h) | **Space:** O(1)

### 53. Binary Tree Level Order Traversal
**Difficulty:** Medium
**Tags:** Tree, BFS
**Problem:** Return level order traversal (values level by level, left to right).
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]
```
**Time:** O(n) | **Space:** O(n)

### 54. Binary Tree Right Side View
**Difficulty:** Medium
**Tags:** Tree, DFS
**Problem:** Return values of nodes you can see from right side, top to bottom.
```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Input: root = [1,null,3]
Output: [1,3]
```
**Time:** O(n) | **Space:** O(n)

### 55. Count Good Nodes In Binary Tree
**Difficulty:** Medium
**Tags:** Tree, DFS, BST
**Problem:** Count nodes where path from root to node has no nodes with value greater than it.
```
Input: root = [3,1,4,3,null,1,5]
Output: 4
Explanation: Nodes 3,3,4,5

Input: root = [3,3,null,4,2]
Output: 3
```
**Time:** O(n) | **Space:** O(h)

### 56. Validate Binary Search Tree
**Difficulty:** Medium
**Tags:** Tree, DFS, BST
**Problem:** Determine if binary tree is valid BST.
```
Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
```
**Time:** O(n) | **Space:** O(h)

### 57. Kth Smallest Element In a BST
**Difficulty:** Medium
**Tags:** Tree, DFS
**Problem:** Find kth smallest element in BST (1-indexed).
```
Input: root = [3,1,4,null,2], k = 1
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```
**Time:** O(h + k) | **Space:** O(h)

### 58. Construct Binary Tree from Preorder and Inorder Traversal
**Difficulty:** Medium
**Tags:** Tree, DFS
**Problem:** Construct binary tree from preorder and inorder traversal arrays.
```
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Input: preorder = [-1], inorder = [-1]
Output: [-1]
```
**Time:** O(n) | **Space:** O(n)

### 59. Binary Tree Maximum Path Sum
**Difficulty:** Hard
**Tags:** Tree, DFS
**Problem:** Find maximum path sum where path is sequence of nodes with parent-child connections.
```
Input: root = [1,2,3]
Output: 6
Explanation: 2 -> 1 -> 3

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: 15 -> 20 -> 7
```
**Time:** O(n) | **Space:** O(h)

### 60. Serialize And Deserialize Binary Tree
**Difficulty:** Hard
**Tags:** Tree, BFS
**Problem:** Design algorithm to serialize/deserialize binary tree to/from string.
```
Input: root = [1,2,3,null,null,4,5]
Serialized: "1,2,null,null,3,4,null,null,5,null,null"
Deserialized: [1,2,3,null,null,4,5]

Input: root = []
Output: ""
```
**Time:** O(n) for both | **Space:** O(n)

---

## Trie

### 61. Implement Trie (Prefix Tree)
**Difficulty:** Medium
**Tags:** Trie, Design
**Problem:** Implement trie with insert, search, and startsWith methods.
```
Input:
["Trie","insert","search","search","startsWith","insert","search"]
[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
Output:
[null,null,true,false,true,null,true]
```
**Time:** O(m) for all operations where m is word length | **Space:** O(n*m)

### 62. Design Add And Search Words Data Structure
**Difficulty:** Medium
**Tags:** Trie, String, DFS
**Problem:** Design data structure supporting adding words and searching with '.' wildcard.
```
Input:
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output:
[null,null,null,null,false,true,true,true]
```
**Time:** O(m) add, O(n*26^m) worst case search | **Space:** O(n*m)

### 63. Word Search II
**Difficulty:** Hard
**Tags:** Trie, String, DFS, Backtracking
**Problem:** Given `m x n` board and list of words, find all words in the board. Words can be constructed from sequentially adjacent cells.
```
Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
       words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
```
**Time:** O(m*n*4^L) where L is max word length | **Space:** O(n*m)

---

## Heap & Priority Queue

### 64. Kth Largest Element In a Stream
**Difficulty:** Easy
**Tags:** Array, Heap, Sorting
**Problem:** Design class to find kth largest element in stream. Implement `KthLargest(k, nums)` and `add(val)`.
```
Input:
["KthLargest","add","add","add","add","add"]
[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]
Output:
[null,4,5,5,8,8]
```
**Time:** O(log k) for add | **Space:** O(k)

### 65. Last Stone Weight
**Difficulty:** Easy
**Tags:** Array, Heap, Quickselect
**Problem:** Smash two heaviest stones together. If different weights, difference is added back. Return weight of last remaining stone.
```
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: Smash 8,7->1, 4,2->2, 2,1->1, 1,1->0

Input: stones = [1]
Output: 1
```
**Time:** O(n log n) | **Space:** O(n)

### 66. K Closest Points to Origin
**Difficulty:** Medium
**Tags:** Heap, Design
**Problem:** Return k closest points to origin (0,0) on 2D plane.
```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
```
**Time:** O(n log k) using heap | **Space:** O(k)

### 67. Kth Largest Element In An Array
**Difficulty:** Medium
**Tags:** Array, Heap
**Problem:** Find kth largest element in unsorted array (not kth distinct).
```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```
**Time:** O(n) average using quickselect | **Space:** O(1)

### 68. Task Scheduler
**Difficulty:** Medium
**Tags:** Array, Heap, Sorting
**Problem:** Given array `tasks` and cooldown `n`, return minimum intervals needed to execute all tasks.
```
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
```
**Time:** O(n) | **Space:** O(1) - fixed 26 tasks

### 69. Design Twitter
**Difficulty:** Medium
**Tags:** Heap, Two Pointers, Greedy
**Problem:** Design simplified Twitter with postTweet, getNewsFeed, follow, unfollow.
```
Input:
["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
[[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
Output:
[null,null,[5],null,null,[6,5],null,[5]]
```
**Time:** O(k log n) for news feed | **Space:** O(n)

### 70. Find Median From Data Stream
**Difficulty:** Hard
**Tags:** Heap, Sliding Window
**Problem:** Design data structure supporting addNum and findMedian operations.
```
Input:
["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
[[],[1],[2],[],[3],[]]
Output:
[null,null,null,1.5,null,2.0]
```
**Time:** O(log n) add, O(1) find median | **Space:** O(n)

---

## Backtracking

### 71. Subsets
**Difficulty:** Medium
**Tags:** Array, Backtracking
**Problem:** Return all possible subsets (power set) of unique integers array.
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Input: nums = [0]
Output: [[],[0]]
```
**Time:** O(2^n) | **Space:** O(n) recursion depth

### 72. Combination Sum
**Difficulty:** Medium
**Tags:** Array, Backtracking
**Problem:** Find all unique combinations in array where candidates sum to target. Same number may be used unlimited times.
```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```
**Time:** O(n^(t/m)) where t is target, m is min candidate | **Space:** O(t/m)

### 73. Permutations
**Difficulty:** Medium
**Tags:** String, Backtracking
**Problem:** Return all possible permutations of distinct integers array.
```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: nums = [0,1]
Output: [[0,1],[1,0]]
```
**Time:** O(n!) | **Space:** O(n)

### 74. Subsets II
**Difficulty:** Medium
**Tags:** Array, Backtracking
**Problem:** Return all possible subsets of array that may contain duplicates.
```
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Input: nums = [0]
Output: [[],[0]]
```
**Time:** O(2^n) | **Space:** O(n)

### 75. Combination Sum II
**Difficulty:** Medium
**Tags:** Array, Backtracking
**Problem:** Find all unique combinations where candidates sum to target. Each number used once only.
```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

Input: candidates = [2,5,2,1,2], target = 5
Output: [[1,2,2],[5]]
```
**Time:** O(2^n) | **Space:** O(n)

### 76. Word Search
**Difficulty:** Medium
**Tags:** Array, Backtracking
**Problem:** Given `m x n` board and word, check if word exists in grid (sequentially adjacent cells).
```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```
**Time:** O(m*n*4^L) where L is word length | **Space:** O(L)

### 77. Palindrome Partitioning
**Difficulty:** Medium
**Tags:** String, Backtracking
**Problem:** Partition string such that every substring is a palindrome. Return all possible partitions.
```
Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]

Input: s = "a"
Output: [["a"]]
```
**Time:** O(n*2^n) | **Space:** O(n)

### 78. Letter Combinations of a Phone Number
**Difficulty:** Medium
**Tags:** Backtracking
**Problem:** Given string of digits 2-9, return all possible letter combinations based on phone keypad.
```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: digits = ""
Output: []
```
**Time:** O(4^n) where n is digits length | **Space:** O(n)

### 79. N-Queens
**Difficulty:** Hard
**Tags:** Backtracking, String
**Problem:** Place n queens on n×n chessboard so no two queens attack each other.
```
Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

Input: n = 1
Output: [["Q"]]
```
**Time:** O(n!) | **Space:** O(n^2)

---

## Graphs

### 80. Number of Islands
**Difficulty:** Medium
**Tags:** Graph, BFS, Matrix
**Problem:** Count number of islands in `m x n` grid ('1' = land, '0' = water).
```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```
**Time:** O(m*n) | **Space:** O(m*n)

### 81. Clone Graph
**Difficulty:** Medium
**Tags:** Graph, BFS, Matrix
**Problem:** Deep copy of undirected graph with value and neighbors list.
```
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]

Input: adjList = [[]]
Output: [[]]
```
**Time:** O(V + E) | **Space:** O(V)

### 82. Max Area of Island
**Difficulty:** Medium
**Tags:** Graph, DFS
**Problem:** Find maximum area of island in grid (connected 1's).
```
Input: grid = [[0,0,1,0,0],[0,1,1,0,0],[0,1,0,0,1],[1,0,0,0,1]]
Output: 4

Input: grid = [[0,0,0,0,0]]
Output: 0
```
**Time:** O(m*n) | **Space:** O(m*n)

### 83. Pacific Atlantic Water Flow
**Difficulty:** Medium
**Tags:** Graph, DFS, Union Find
**Problem:** Find cells where water can flow to both Pacific (top/left) and Atlantic (bottom/right) oceans.
```
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
```
**Time:** O(m*n) | **Space:** O(m*n)

### 84. Surrounded Regions
**Difficulty:** Medium
**Tags:** Graph, BFS, Matrix
**Problem:** Capture all 'O' regions surrounded by 'X' (not on border).
```
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
```
**Time:** O(m*n) | **Space:** O(m*n)

### 85. Rotting Oranges
**Difficulty:** Medium
**Tags:** Graph, Union Find
**Problem:** Every minute, fresh orange adjacent to rotten orange becomes rotten. Return minutes until no fresh oranges or -1 if impossible.
```
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
```
**Time:** O(m*n) | **Space:** O(m*n)

### 86. Walls And Gates
**Difficulty:** Medium
**Tags:** Graph, Topological Sort
**Problem:** Fill each empty room with distance to nearest gate. -1 = wall, 0 = gate, INF = empty room.
```
Input: rooms = [[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]
Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
```
**Time:** O(m*n) | **Space:** O(m*n)

### 87. Course Schedule
**Difficulty:** Medium
**Tags:** Graph, Topological Sort
**Problem:** Given numCourses and prerequisites pairs, determine if you can finish all courses (detect cycle).
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
```
**Time:** O(V + E) | **Space:** O(V + E)

### 88. Course Schedule II
**Difficulty:** Medium
**Tags:** Graph, BFS
**Problem:** Return ordering of courses to finish all courses, or empty if impossible.
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3] or [0,1,2,3]
```
**Time:** O(V + E) | **Space:** O(V + E)

### 89. Redundant Connection
**Difficulty:** Medium
**Tags:** Graph, Topological Sort, BFS
**Problem:** In graph that started as tree plus one edge, find edge that can be removed to make it tree again.
```
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]
```
**Time:** O(n) with union-find | **Space:** O(n)

### 90. Number of Connected Components In Undirected Graph
**Difficulty:** Medium
**Tags:** Graph, DFS, Matrix
**Problem:** Count number of connected components in undirected graph.
```
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
```
**Time:** O(V + E) | **Space:** O(V + E)

### 91. Graph Valid Tree
**Difficulty:** Medium
**Tags:** Graph, BFS, Matrix
**Problem:** Check if undirected graph is a valid tree (connected and no cycles).
```
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
```
**Time:** O(V + E) | **Space:** O(V + E)

### 92. Word Ladder
**Difficulty:** Hard
**Tags:** Graph, Dijkstra
**Problem:** Find length of shortest transformation sequence from beginWord to endWord, changing one letter at a time using wordList.
```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: "hit" -> "hot" -> "dot" -> "dog" -> "cog"

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
```
**Time:** O(M^2 * N) where M is word length, N is wordList size | **Space:** O(M^2 * N)

### 93. Reconstruct Itinerary
**Difficulty:** Hard
**Tags:** Graph, Dijkstra, Heap
**Problem:** Given list of airline tickets, reconstruct itinerary in order starting from "JFK".
```
Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
Output: ["JFK","MUC","LHR","SFO","SJC"]

Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
```
**Time:** O(E log E) | **Space:** O(E)

### 94. Min Cost to Connect All Points
**Difficulty:** Hard
**Tags:** Graph, Union Find
**Problem:** Connect all points with minimum total cost (Manhattan distance between points).
```
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation: Minimum spanning tree

Input: points = [[3,12],[-2,5],[-4,1]]
Output: 18
```
**Time:** O(n^2 log n) Prim's | **Space:** O(n^2)

### 95. Network Delay Time
**Difficulty:** Medium
**Tags:** Graph, DFS
**Problem:** Given times (travel times) and starting node k, find time for all nodes to receive signal. Return -1 if impossible.
```
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
```
**Time:** O(E log V) Dijkstra's | **Space:** O(V + E)

### 96. Swim In Rising Water
**Difficulty:** Hard
**Tags:** Graph, Dijkstra
**Problem:** Find minimum time to reach bottom-right from top-left where you can only swim when water level >= cell elevation.
```
Input: grid = [[0,2],[1,3]]
Output: 3
Explanation: At time 3, you can reach end

Input: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
Output: 16
```
**Time:** O(n^2 log n) | **Space:** O(n^2)

### 97. Alien Dictionary
**Difficulty:** Hard
**Tags:** Graph, BFS
**Problem:** Derive order of characters in alien language from sorted dictionary of words.
```
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Input: words = ["z","x"]
Output: "zx"
```
**Time:** O(C) where C is total chars in all words | **Space:** O(1) - fixed 26 letters

### 98. Cheapest Flights Within K Stops
**Difficulty:** Medium
**Tags:** Graph, BFS
**Problem:** Find cheapest price from src to dst with at most k stops. Return -1 if no route.
```
Input: n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1
Output: 700

Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
Output: 200
```
**Time:** O(E * K) | **Space:** O(V)

---

## Dynamic Programming

### 99. Climbing Stairs
**Difficulty:** Easy
**Tags:** Dynamic Programming
**Problem:** Climb n steps, taking 1 or 2 steps at a time. How many distinct ways?
```
Input: n = 2
Output: 2
Explanation: 1+1, 2

Input: n = 3
Output: 3
Explanation: 1+1+1, 1+2, 2+1
```
**Time:** O(n) | **Space:** O(1)

### 100. Min Cost Climbing Stairs
**Difficulty:** Easy
**Tags:** Dynamic Programming
**Problem:** Given cost array, find minimum cost to reach top (start from index 0 or 1).
```
Input: cost = [10,15,20]
Output: 15
Explanation: Start at index 1

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
```
**Time:** O(n) | **Space:** O(1)

### 101. House Robber
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Rob houses along street (can't rob adjacent houses). Maximize money.
```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 and 3

Input: nums = [2,7,9,3,1]
Output: 12
```
**Time:** O(n) | **Space:** O(1)

### 102. House Robber II
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Houses arranged in circle (first and last are adjacent). Maximize money.
```
Input: nums = [2,3,2]
Output: 3

Input: nums = [1,2,3,1]
Output: 4
```
**Time:** O(n) | **Space:** O(1)

### 103. Longest Palindromic Substring
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Find longest palindromic substring in s.
```
Input: s = "babad"
Output: "bab" or "aba"

Input: s = "cbbd"
Output: "bb"
```
**Time:** O(n^2) expand around center | **Space:** O(1)

### 104. Palindromic Substrings
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Count how many palindromic substrings in s.
```
Input: s = "abc"
Output: 3
Explanation: "a", "b", "c"

Input: s = "aaa"
Output: 6
Explanation: "a", "a", "a", "aa", "aa", "aaa"
```
**Time:** O(n^2) | **Space:** O(1)

### 105. Decode Ways
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** 'A'=1, 'B'=2, ..., 'Z'=26. Count ways to decode digit string.
```
Input: s = "12"
Output: 2
Explanation: "AB" (1 2) or "L" (12)

Input: s = "226"
Output: 3
Explanation: "BZ", "VF", "BBF"
```
**Time:** O(n) | **Space:** O(1)

### 106. Coin Change
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Find minimum coins needed to make amount. Return -1 if impossible.
```
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [2], amount = 3
Output: -1
```
**Time:** O(n * amount) | **Space:** O(amount)

### 107. Maximum Product Subarray
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Find contiguous subarray with largest product.
```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3]

Input: nums = [-2,0,-1]
Output: 0
```
**Time:** O(n) | **Space:** O(1)

### 108. Word Break
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Check if string can be segmented into words from wordDict.
```
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
```
**Time:** O(n^2) | **Space:** O(n)

### 109. Longest Increasing Subsequence
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Find length of longest strictly increasing subsequence.
```
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: [2,3,7,101]

Input: nums = [0,1,0,3,2,3]
Output: 4
```
**Time:** O(n log n) with binary search | **Space:** O(n)

### 110. Partition Equal Subset Sum
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Check if array can be partitioned into two subsets with equal sum.
```
Input: nums = [1,5,11,5]
Output: true
Explanation: [1,5,5] and [11]

Input: nums = [1,2,3,5]
Output: false
```
**Time:** O(n * sum) | **Space:** O(sum)

### 111. Unique Paths
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Robot in m x n grid moves right or down. Count paths from top-left to bottom-right.
```
Input: m = 3, n = 7
Output: 28

Input: m = 3, n = 2
Output: 3
```
**Time:** O(m*n) | **Space:** O(n)

### 112. Longest Common Subsequence
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Find length of longest common subsequence of two strings.
```
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: "ace"

Input: text1 = "abc", text2 = "abc"
Output: 3
```
**Time:** O(m*n) | **Space:** O(m*n)

### 113. Best Time to Buy And Sell Stock With Cooldown
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Buy/sell stock with cooldown of 1 day after selling.
```
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: Buy day 1, sell day 2, cooldown, buy day 4, sell day 5

Input: prices = [1]
Output: 0
```
**Time:** O(n) | **Space:** O(1)

### 114. Coin Change II
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Count number of combinations to make amount using coins.
```
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: 5, 2+2+1, 2+1+1+1, 1+1+1+1+1

Input: amount = 3, coins = [2]
Output: 0
```
**Time:** O(n * amount) | **Space:** O(amount)

### 115. Target Sum
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Build expression by adding +/- before each num to equal target. Count ways.
```
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: -1+1+1+1+1, +1-1+1+1+1, etc.

Input: nums = [1], target = 1
Output: 1
```
**Time:** O(n * sum) | **Space:** O(sum)

### 116. Interleaving String
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Check if s3 is formed by interleaving s1 and s2.
```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true

Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
```
**Time:** O(m*n) | **Space:** O(m*n)

### 117. Longest Increasing Path In a Matrix
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Find length of longest increasing path in matrix (move in 4 directions).
```
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: 1 -> 2 -> 6 -> 9

Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
```
**Time:** O(m*n) with memoization | **Space:** O(m*n)

### 118. Distinct Subsequences
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Count distinct subsequences of s that equal t.
```
Input: s = "rabbbit", t = "rabbit"
Output: 3

Input: s = "babgbag", t = "bag"
Output: 5
```
**Time:** O(m*n) | **Space:** O(m*n)

### 119. Edit Distance
**Difficulty:** Medium
**Tags:** Dynamic Programming, String
**Problem:** Find minimum operations (insert, delete, replace) to convert word1 to word2.
```
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: horse -> rorse -> rose -> ros

Input: word1 = "intention", word2 = "execution"
Output: 5
```
**Time:** O(m*n) | **Space:** O(m*n)

### 120. Burst Balloons
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Burst balloons to maximize coins (coins = nums[i-1] * nums[i] * nums[i+1]).
```
Input: nums = [3,1,5,8]
Output: 167

Input: nums = [1,5]
Output: 10
```
**Time:** O(n^3) | **Space:** O(n^2)

### 121. Regular Expression Matching
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Implement regex matching with '.' and '*'.
```
Input: s = "aa", p = "a"
Output: false

Input: s = "aa", p = "a*"
Output: true
```
**Time:** O(m*n) | **Space:** O(m*n)

### 122. Maximum Subarray (Kadane's)
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Find contiguous subarray with largest sum.
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1]

Input: nums = [1]
Output: 1
```
**Time:** O(n) | **Space:** O(1)

### 123. Jump Game
**Difficulty:** Medium
**Tags:** Dynamic Programming, Tree
**Problem:** Check if you can reach last index (nums[i] = max jump length).
```
Input: nums = [2,3,1,1,4]
Output: true

Input: nums = [3,2,1,0,4]
Output: false
```
**Time:** O(n) | **Space:** O(1)

### 124. Jump Game II
**Difficulty:** Medium
**Tags:** Dynamic Programming, Tree
**Problem:** Find minimum jumps to reach last index.
```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: Jump 1 step to index 1, then 3 steps to last

Input: nums = [2,3,0,1,4]
Output: 2
```
**Time:** O(n) | **Space:** O(1)

---

## Greedy

### 125. Gas Station
**Difficulty:** Medium
**Tags:** Array, Greedy
**Problem:** Find starting gas station index to complete circuit. Return -1 if impossible.
```
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3

Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
```
**Time:** O(n) | **Space:** O(1)

### 126. Hand of Straights
**Difficulty:** Medium
**Tags:** Array, Greedy
**Problem:** Rearrange cards into groups of groupSize consecutive cards.
```
Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: [1,2,3], [2,3,4], [6,7,8]

Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
```
**Time:** O(n log n) | **Space:** O(n)

### 127. Merge Triplets to Form Target Triplet
**Difficulty:** Medium
**Tags:** Array, Greedy
**Problem:** Merge triplets (take max of each position) to form target. Check if possible.
```
Input: triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]
Output: true

Input: triplets = [[3,4,5],[4,5,6]], target = [3,2,5]
Output: false
```
**Time:** O(n) | **Space:** O(1)

### 128. Partition Labels
**Difficulty:** Medium
**Tags:** String, Greedy
**Problem:** Partition string into as many parts as possible where each letter appears in at most one part.
```
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation: "ababcbaca", "defegde", "hijhklij"

Input: s = "eccbbbbdec"
Output: [10]
```
**Time:** O(n) | **Space:** O(1)

---

## Intervals

### 129. Valid Parenthesis String
**Difficulty:** Medium
**Tags:** Array, Intervals, Sorting
**Problem:** Check if string with '(', ')', and '*' (can be '(', ')', or empty) is valid.
```
Input: s = "()"
Output: true

Input: s = "(*)"
Output: true

Input: s = "(*))"
Output: true
```
**Time:** O(n) | **Space:** O(1)

### 130. Insert Interval
**Difficulty:** Medium
**Tags:** Array, Intervals, Sorting
**Problem:** Insert newInterval into non-overlapping intervals, merge if necessary.
```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
```
**Time:** O(n) | **Space:** O(n)

### 131. Merge Intervals
**Difficulty:** Medium
**Tags:** Array, Intervals, Sorting
**Problem:** Merge all overlapping intervals.
```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
```
**Time:** O(n log n) | **Space:** O(n)

### 132. Non-Overlapping Intervals
**Difficulty:** Medium
**Tags:** Array, Intervals, Heap
**Problem:** Find minimum removals to make intervals non-overlapping.
```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: Remove [1,3]

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
```
**Time:** O(n log n) | **Space:** O(1)

### 133. Meeting Rooms
**Difficulty:** Easy
**Tags:** Array, Intervals, Sorting
**Problem:** Check if person can attend all meetings (no overlap).
```
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false

Input: intervals = [[7,10],[2,4]]
Output: true
```
**Time:** O(n log n) | **Space:** O(1)

### 134. Meeting Rooms II
**Difficulty:** Medium
**Tags:** Array, Intervals, Sorting
**Problem:** Find minimum number of conference rooms required.
```
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2

Input: intervals = [[7,10],[2,4]]
Output: 1
```
**Time:** O(n log n) | **Space:** O(n)

### 135. Minimum Interval to Include Each Query
**Difficulty:** Hard
**Tags:** Array, Intervals, Sorting
**Problem:** For each query, find smallest interval that contains it. Return -1 if none.
```
Input: intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
Output: [3,3,1,4]

Input: intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
Output: [2,-1,4,6]
```
**Time:** O(n log n + q log q) | **Space:** O(n + q)

---

## Matrix

### 136. Rotate Image
**Difficulty:** Medium
**Tags:** Matrix, DFS, BFS
**Problem:** Rotate n x n matrix 90 degrees clockwise in-place.
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```
**Time:** O(n^2) | **Space:** O(1)

### 137. Spiral Matrix
**Difficulty:** Medium
**Tags:** Matrix, Simulation
**Problem:** Return all elements in spiral order.
```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```
**Time:** O(m*n) | **Space:** O(1)

### 138. Set Matrix Zeroes
**Difficulty:** Medium
**Tags:** Matrix, Hash Table
**Problem:** If element is 0, set its entire row and column to 0. Do it in-place.
```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```
**Time:** O(m*n) | **Space:** O(1)

---

## Bit Manipulation

### 139. Happy Number
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** A number is happy if repeatedly replacing it by sum of squares of its digits leads to 1.
```
Input: n = 19
Output: true
Explanation: 1^2 + 9^2 = 82, 8^2 + 2^2 = 68, ... = 1

Input: n = 2
Output: false
```
**Time:** O(log n) | **Space:** O(log n) or O(1) with Floyd's

### 140. Plus One
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** Increment large integer represented as array of digits by one.
```
Input: digits = [1,2,3]
Output: [1,2,4]

Input: digits = [9,9,9]
Output: [1,0,0,0]
```
**Time:** O(n) | **Space:** O(1) or O(n) if new array

### 141. Pow(x, n)
**Difficulty:** Medium
**Tags:** Bit Manipulation
**Problem:** Implement pow(x, n) which calculates x raised to power n.
```
Input: x = 2.0, n = 10
Output: 1024.0

Input: x = 2.0, n = -2
Output: 0.25
```
**Time:** O(log n) | **Space:** O(1)

### 142. Multiply Strings
**Difficulty:** Medium
**Tags:** Bit Manipulation
**Problem:** Multiply two non-negative integers represented as strings.
```
Input: num1 = "2", num2 = "3"
Output: "6"

Input: num1 = "123", num2 = "456"
Output: "56088"
```
**Time:** O(m*n) | **Space:** O(m+n)

### 143. Detect Squares
**Difficulty:** Medium
**Tags:** Bit Manipulation
**Problem:** Design data structure to add points and count squares with sides parallel to axes.
```
Input:
["DetectSquares","add","add","add","count","count","add","count"]
[[],[[3,10]],[[11,2]],[[3,2]],[[11,10]],[[14,8]],[[11,2]],[[11,10]]]
Output:
[null,null,null,null,1,0,null,2]
```
**Time:** O(n) for count | **Space:** O(n)

### 144. Single Number
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** Find element that appears once when all others appear twice.
```
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4
```
**Time:** O(n) | **Space:** O(1) using XOR

### 145. Number of 1 Bits (Hamming Weight)
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** Return number of '1' bits in binary representation.
```
Input: n = 11
Output: 3
Explanation: Binary 1011 has three '1' bits

Input: n = 128
Output: 1
```
**Time:** O(1) | **Space:** O(1)

### 146. Counting Bits
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** For every i in [0, n], calculate number of 1's in binary representation.
```
Input: n = 2
Output: [0,1,1]

Input: n = 5
Output: [0,1,1,2,1,2]
```
**Time:** O(n) | **Space:** O(1)

### 147. Reverse Bits
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** Reverse bits of 32-bit unsigned integer.
```
Input: n = 00000010100101000001111010011100
Output: 964176192 (00111001011110000010100101000000)

Input: n = 11111111111111111111111111111101
Output: 3221225471 (10111111111111111111111111111111)
```
**Time:** O(1) | **Space:** O(1)

### 148. Missing Number
**Difficulty:** Easy
**Tags:** Bit Manipulation
**Problem:** Find missing number in array containing n distinct numbers in range [0, n].
```
Input: nums = [3,0,1]
Output: 2

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
```
**Time:** O(n) | **Space:** O(1)

### 149. Sum of Two Integers
**Difficulty:** Medium
**Tags:** Bit Manipulation, Array
**Problem:** Calculate sum of two integers without using + or - operators.
```
Input: a = 1, b = 2
Output: 3

Input: a = 2, b = 3
Output: 5
```
**Time:** O(1) | **Space:** O(1)

### 150. Reverse Integer
**Difficulty:** Medium
**Tags:** Bit Manipulation, Dynamic Programming
**Problem:** Reverse digits of signed 32-bit integer. Return 0 if overflow.
```
Input: x = 123
Output: 321

Input: x = -123
Output: -321

Input: x = 120
Output: 21
```
**Time:** O(log x) | **Space:** O(1)

---

## Additional Hard Problems

### 151. Merge K Sorted Arrays
**Difficulty:** Hard
**Tags:** Array, Heap, Merge Sort
**Problem:** Given k sorted arrays, merge them into one sorted array.
```
Input: arrays = [[1,4,7],[2,5,8],[3,6,9]]
Output: [1,2,3,4,5,6,7,8,9]

Input: arrays = [[1,3,5,7],[2,4,6,8]]
Output: [1,2,3,4,5,6,7,8]
```
**Time:** O(n log k) where n is total elements, k is number of arrays | **Space:** O(k)

### 152. Longest Valid Parentheses
**Difficulty:** Hard
**Tags:** String, Dynamic Programming, Stack
**Problem:** Given string containing '(' and ')', find length of longest valid parentheses substring.
```
Input: s = "(()"
Output: 2
Explanation: "()"

Input: s = ")()())"
Output: 4
Explanation: "()()"

Input: s = ""
Output: 0
```
**Time:** O(n) | **Space:** O(n) with stack or O(1) with two passes

### 153. Wildcard Matching
**Difficulty:** Hard
**Tags:** String, Dynamic Programming, Greedy
**Problem:** Implement wildcard pattern matching with '?' and '*'.
```
Input: s = "aa", p = "a"
Output: false

Input: s = "aa", p = "*"
Output: true

Input: s = "cb", p = "?a"
Output: false

Input: s = "adceb", p = "*a*b"
Output: true
```
**Time:** O(m*n) | **Space:** O(m*n)

### 154. First Missing Positive
**Difficulty:** Hard
**Tags:** Array, Hash Table
**Problem:** Find smallest missing positive integer in unsorted array. Must run in O(n) time and O(1) space.
```
Input: nums = [1,2,0]
Output: 3

Input: nums = [3,4,-1,1]
Output: 2

Input: nums = [7,8,9,11,12]
Output: 1
```
**Time:** O(n) | **Space:** O(1)

### 155. Sliding Window Median
**Difficulty:** Hard
**Tags:** Graph, DFS, Backtracking
**Problem:** Find median of each window of size k in array.
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1,-1,-1,3,5,6]

Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2,3,3,3,2,3,2]
```
**Time:** O(n log k) | **Space:** O(k)

### 156. Maximal Rectangle
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Given binary matrix filled with 0's and 1's, find largest rectangle containing only 1's.
```
Input: matrix = [
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
Output: 6
Explanation: Rectangle with width 3 and height 2

Input: matrix = [["0"]]
Output: 0
```
**Time:** O(m*n) | **Space:** O(n)

### 157. Palindrome Pairs
**Difficulty:** Hard
**Tags:** String, KMP
**Problem:** Given list of unique words, find all pairs of distinct indices where concatenation forms palindrome.
```
Input: words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: ["abcddcba","dcbaabcd","slls","llssssll"]

Input: words = ["bat","tab","cat"]
Output: [[0,1],[1,0]]
```
**Time:** O(n*k^2) where k is max word length | **Space:** O(n*k)

### 158. Count of Smaller Numbers After Self
**Difficulty:** Hard
**Tags:** Array, Sliding Window, Hash Table
**Problem:** Return array where counts[i] is number of smaller elements to the right of nums[i].
```
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To right of 5: [2,1] (2 smaller)
To right of 2: [1] (1 smaller)
To right of 6: [1] (1 smaller)
To right of 1: [] (0 smaller)

Input: nums = [-1]
Output: [0]
```
**Time:** O(n log n) using merge sort | **Space:** O(n)

### 159. Minimum Window Subsequence
**Difficulty:** Hard
**Tags:** Array, Hash Table
**Problem:** Find minimum window in S which contains all characters from T in order (subsequence).
```
Input: S = "abcdebdde", T = "bde"
Output: "bcde"
Explanation: "bcde" is shortest substring containing "bde" as subsequence

Input: S = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", T = "u"
Output: ""
```
**Time:** O(m*n) | **Space:** O(m*n)

### 160. Dungeon Game
**Difficulty:** Hard
**Tags:** Tree, Segment Tree
**Problem:** Find minimum initial health needed for knight to reach princess in bottom-right corner.
```
Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output: 7
Explanation: Start with 7 HP, optimal path: right->right->down->down

Input: dungeon = [[0]]
Output: 1
```
**Time:** O(m*n) | **Space:** O(n)

### 161. Best Time to Buy and Sell Stock IV
**Difficulty:** Hard
**Tags:** Array, Stack
**Problem:** Find maximum profit with at most k transactions.
```
Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy day 1, sell day 2 (profit = 2)

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy day 2, sell day 3, buy day 5, sell day 6
```
**Time:** O(n*k) | **Space:** O(k)

### 162. Candy
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Children stand in line with ratings. Each gets at least 1 candy. Higher rated child gets more than neighbors.
```
Input: ratings = [1,0,2]
Output: 5
Explanation: Give candies [2,1,2]

Input: ratings = [1,2,2]
Output: 4
Explanation: Give candies [1,2,1]
```
**Time:** O(n) | **Space:** O(n)

### 163. Substring with Concatenation of All Words
**Difficulty:** Hard
**Tags:** Tree, Recursion
**Problem:** Find all starting indices of substring(s) that is concatenation of each word in words exactly once.
```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: "barfoo" starts at 0, "foobar" starts at 9

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
```
**Time:** O(n*m*k) where m is word length, k is words count | **Space:** O(m*k)

### 164. Text Justification
**Difficulty:** Hard
**Tags:** Graph, BFS
**Problem:** Given array of words and width, format text so each line has exactly width characters, fully justified.
```
Input: words = ["This","is","an","example","of","text","justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
```
**Time:** O(n) | **Space:** O(1)

### 165. Shortest Palindrome
**Difficulty:** Hard
**Tags:** Array, Math
**Problem:** Add characters in front of string to make it palindrome. Find shortest palindrome.
```
Input: s = "aacecaaa"
Output: "aaacecaaa"

Input: s = "abcd"
Output: "dcbabcd"
```
**Time:** O(n) using KMP | **Space:** O(n)

### 166. Minimum Number of K Consecutive Bit Flips
**Difficulty:** Hard
**Tags:** Graph, Union Find
**Problem:** Flip exactly k consecutive bits to make all 1's. Return minimum flips or -1 if impossible.
```
Input: nums = [0,1,0], k = 1
Output: 2
Explanation: Flip nums[0], then flip nums[2]

Input: nums = [1,1,0], k = 2
Output: -1
```
**Time:** O(n) | **Space:** O(1)

### 167. Minimum Cost to Hire K Workers
**Difficulty:** Hard
**Tags:** Dynamic Programming, Memoization
**Problem:** Hire k workers with minimum wage while maintaining quality/wage ratio.
```
Input: quality = [10,20,5], wage = [70,50,30], k = 2
Output: 105.0
Explanation: Hire worker 0 and worker 2

Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
Output: 30.66667
```
**Time:** O(n log n) | **Space:** O(n)

### 168. Largest Rectangle in Histogram (Alternative Methods)
**Difficulty:** Hard
**Tags:** Array, Greedy
**Problem:** Find area of largest rectangle that can be formed using consecutive bars in histogram.
```
Input: heights = [2,1,5,6,2,3]
Output: 10

Input: heights = [2,4]
Output: 4
```
**Time:** O(n) using monotonic stack | **Space:** O(n)

### 169. Maximum Gap
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Find maximum difference between successive elements in sorted form. Must run in O(n) time.
```
Input: nums = [3,6,9,1]
Output: 3
Explanation: Sorted form [1,3,6,9], max gap = 3

Input: nums = [10]
Output: 0
```
**Time:** O(n) using bucket sort | **Space:** O(n)

### 170. IPO
**Difficulty:** Hard
**Tags:** Array, Binary Search, Greedy
**Problem:** Select at most k projects to maximize capital. Can only do one project at a time.
```
Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Start project 0, then project 2 or 1

Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6
```
**Time:** O(n log n) | **Space:** O(n)

---

# Must-Know Interview Questions

> **⭐ These 30 problems appear frequently in FAANG interviews and cover essential patterns**

## Arrays & Strings (High-Frequency)

### 171. Rotate Array
**Difficulty:** Medium
**Tags:** Array, Math, Two Pointers
**Problem:** Rotate array to right by k steps.
```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Reverse algorithm (reverse all, reverse first k, reverse rest)

### 172. Move Zeroes
**Difficulty:** Easy
**Tags:** Array, Two Pointers
**Problem:** Move all zeros to end while maintaining relative order of non-zero elements.
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Two pointers - one for reading, one for writing

### 173. Longest Substring with At Most K Distinct Characters
**Difficulty:** Medium
**Tags:** Array, Prefix Sum
**Problem:** Find length of longest substring with at most k distinct characters.
```
Input: s = "eceba", k = 2
Output: 3
Explanation: "ece"

Input: s = "aa", k = 1
Output: 2
```
**Time:** O(n) | **Space:** O(k)
**Key Pattern:** Sliding window with hashmap

### 174. Find All Anagrams in a String
**Difficulty:** Medium
**Tags:** String, Two Pointers
**Problem:** Find all start indices of p's anagrams in s.
```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation: "cba" at 0, "bac" at 6

Input: s = "abab", p = "ab"
Output: [0,1,2]
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Sliding window with character frequency

### 175. Implement strStr() / Find Needle in Haystack
**Difficulty:** Easy
**Tags:** Array, Hash Table
**Problem:** Return index of first occurrence of needle in haystack, or -1.
```
Input: haystack = "sadbutsad", needle = "sad"
Output: 0

Input: haystack = "leetcode", needle = "leeto"
Output: -1
```
**Time:** O(n*m) brute force, O(n+m) KMP | **Space:** O(m)
**Key Pattern:** KMP algorithm for optimal solution

## Linked Lists (Must Practice)

### 176. Remove Duplicates from Sorted List
**Difficulty:** Easy
**Tags:** Array, Backtracking
**Problem:** Remove all duplicates from sorted linked list, leaving only distinct numbers.
```
Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Single pass with pointer manipulation

### 177. Intersection of Two Linked Lists
**Difficulty:** Easy
**Tags:** String, Backtracking
**Problem:** Find node where two singly linked lists intersect.
```
Input: listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]
Output: Node with value 8

Input: listA = [2,6,4], listB = [1,5]
Output: null
```
**Time:** O(m+n) | **Space:** O(1)
**Key Pattern:** Two pointers with length difference handling

### 178. Palindrome Linked List
**Difficulty:** Easy
**Tags:** String, Sliding Window
**Problem:** Check if linked list is a palindrome.
```
Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Fast/slow pointers + reverse second half

## Trees & Graphs (Critical)

### 179. Lowest Common Ancestor of a Binary Tree
**Difficulty:** Medium
**Tags:** Linked List, Two Pointers
**Problem:** Find lowest common ancestor of two nodes in binary tree.
```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
```
**Time:** O(n) | **Space:** O(h)
**Key Pattern:** Post-order traversal

### 180. Path Sum II
**Difficulty:** Medium
**Tags:** Linked List, Two Pointers
**Problem:** Find all root-to-leaf paths where sum equals targetSum.
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]

Input: root = [1,2,3], targetSum = 5
Output: []
```
**Time:** O(n) | **Space:** O(h)
**Key Pattern:** DFS with backtracking

### 181. Number of Connected Components (Union Find)
**Difficulty:** Medium
**Tags:** Linked List, Recursion
**Problem:** Find number of connected components using Union-Find.
```
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
```
**Time:** O(n + m*α(n)) where α is inverse Ackermann | **Space:** O(n)
**Key Pattern:** Union-Find data structure

### 182. Clone Graph (Deep Copy)
**Difficulty:** Medium
**Tags:** Linked List, Stack
**Problem:** Deep clone an undirected graph.
```
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
```
**Time:** O(V + E) | **Space:** O(V)
**Key Pattern:** BFS/DFS with hashmap for visited nodes

## Dynamic Programming (High Value)

### 183. Unique Paths II (With Obstacles)
**Difficulty:** Medium
**Tags:** Tree, DFS, Recursion
**Problem:** Find unique paths in grid with obstacles (1 = obstacle, 0 = empty).
```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2

Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```
**Time:** O(m*n) | **Space:** O(n)
**Key Pattern:** 2D DP with space optimization

### 184. Minimum Path Sum
**Difficulty:** Medium
**Tags:** Tree, DFS
**Problem:** Find path from top-left to bottom-right with minimum sum.
```
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: 1→3→1→1→1

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```
**Time:** O(m*n) | **Space:** O(n)
**Key Pattern:** 2D DP bottom-up

### 185. Triangle (Minimum Path Sum)
**Difficulty:** Medium
**Tags:** Tree, BFS
**Problem:** Find minimum path sum from top to bottom of triangle.
```
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: 2→3→5→1

Input: triangle = [[-10]]
Output: -10
```
**Time:** O(n^2) | **Space:** O(n)
**Key Pattern:** Bottom-up DP with space optimization

### 186. Perfect Squares
**Difficulty:** Medium
**Tags:** Tree, DFS
**Problem:** Find least number of perfect square numbers that sum to n.
```
Input: n = 12
Output: 3
Explanation: 12 = 4 + 4 + 4

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9
```
**Time:** O(n * √n) | **Space:** O(n)
**Key Pattern:** DP or BFS

### 187. Longest Palindromic Subsequence
**Difficulty:** Medium
**Tags:** Graph, DFS, Backtracking
**Problem:** Find length of longest palindromic subsequence.
```
Input: s = "bbbab"
Output: 4
Explanation: "bbbb"

Input: s = "cbbd"
Output: 2
Explanation: "bb"
```
**Time:** O(n^2) | **Space:** O(n^2)
**Key Pattern:** 2D DP (similar to LCS)

## Backtracking (Common in Interviews)

### 188. Combination Sum III
**Difficulty:** Medium
**Tags:** Graph, Topological Sort
**Problem:** Find all combinations of k numbers that sum to n (use 1-9 once each).
```
Input: k = 3, n = 7
Output: [[1,2,4]]

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
```
**Time:** O(9! / (k! * (9-k)!)) | **Space:** O(k)
**Key Pattern:** Backtracking with pruning

### 189. Generate Parentheses (Alternative Approach)
**Difficulty:** Medium
**Tags:** Graph, BFS
**Problem:** Generate all valid combinations of n pairs of parentheses.
```
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
```
**Time:** O(4^n / √n) | **Space:** O(n)
**Key Pattern:** Backtracking with validation

### 190. Letter Combinations (Phone Number)
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Return all letter combinations from phone number digits.
```
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```
**Time:** O(4^n) | **Space:** O(n)
**Key Pattern:** Backtracking with mapping

## System Design Related (Coding Portion)

### 191. LRU Cache (Detailed Implementation)
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Implement Least Recently Used cache with O(1) operations.
```
Input:
["LRUCache","put","put","get","put","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
Output:
[null,null,null,1,null,-1,null,-1,3,4]
```
**Time:** O(1) for get and put | **Space:** O(capacity)
**Key Pattern:** HashMap + Doubly Linked List

### 192. LFU Cache
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Implement Least Frequently Used cache with O(1) operations.
```
Input:
["LFUCache","put","put","get","put","get","get","put","get","get","get"]
[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]
Output:
[null,null,null,1,null,-1,3,null,-1,3,4]
```
**Time:** O(1) for all operations | **Space:** O(capacity)
**Key Pattern:** Multiple HashMaps + Doubly Linked Lists

### 193. Insert Delete GetRandom O(1)
**Difficulty:** Medium
**Tags:** Dynamic Programming, Array
**Problem:** Design data structure supporting insert, delete, and getRandom in O(1).
```
Input:
["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
[[],[1],[2],[2],[],[1],[2],[]]
Output:
[null,true,false,true,2,true,false,2]
```
**Time:** O(1) for all operations | **Space:** O(n)
**Key Pattern:** HashMap + Dynamic Array

## Popular Optimization Problems

### 194. Buy and Sell Stock III (At Most 2 Transactions)
**Difficulty:** Hard
**Tags:** Dynamic Programming, String
**Problem:** Find maximum profit with at most two transactions.
```
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy day 4, sell day 6, buy day 7, sell day 8

Input: prices = [1,2,3,4,5]
Output: 4
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** State machine DP

### 195. Max Product of Three Numbers
**Difficulty:** Easy
**Tags:** Backtracking, String
**Problem:** Find maximum product of three numbers in array.
```
Input: nums = [1,2,3]
Output: 6

Input: nums = [1,2,3,4]
Output: 24

Input: nums = [-1,-2,-3]
Output: -6
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Track max and min values

### 196. Next Permutation
**Difficulty:** Medium
**Tags:** Backtracking, Matrix
**Problem:** Find next lexicographically greater permutation of numbers.
```
Input: nums = [1,2,3]
Output: [1,3,2]

Input: nums = [3,2,1]
Output: [1,2,3]

Input: nums = [1,1,5]
Output: [1,5,1]
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Two pointers with swap and reverse

### 197. Longest Consecutive Sequence (Alternative)
**Difficulty:** Medium
**Tags:** Design, Hash Table, Doubly Linked List
**Problem:** Find length of longest consecutive sequence in O(n) time.
```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: [1,2,3,4]
```
**Time:** O(n) | **Space:** O(n)
**Key Pattern:** HashSet with intelligent iteration

## String Manipulation (Very Common)

### 198. Group Shifted Strings
**Difficulty:** Medium
**Tags:** Design, Trie
**Problem:** Group strings that are shifts of each other.
```
Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

Input: strings = ["a"]
Output: [["a"]]
```
**Time:** O(n*k) where k is max string length | **Space:** O(n*k)
**Key Pattern:** Hash by shift pattern

### 199. Longest Common Prefix
**Difficulty:** Easy
**Tags:** Math, Two Pointers
**Problem:** Find longest common prefix among array of strings.
```
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
```
**Time:** O(S) where S is sum of all characters | **Space:** O(1)
**Key Pattern:** Vertical scanning or divide & conquer

### 200. Valid Palindrome II
**Difficulty:** Easy
**Tags:** Array, Math
**Problem:** Check if string can become palindrome by deleting at most one character.
```
Input: s = "aba"
Output: true

Input: s = "abca"
Output: true
Explanation: Delete 'c' or 'b'

Input: s = "abc"
Output: false
```
**Time:** O(n) | **Space:** O(1)
**Key Pattern:** Two pointers with one skip allowed

---

# Company-Specific Favorites

## 🔵 Google Favorites
- **Arrays:** Trapping Rain Water, Container With Most Water, Next Permutation
- **Strings:** Longest Substring Without Repeating Characters, Minimum Window Substring
- **Trees:** Serialize/Deserialize Binary Tree, Binary Tree Maximum Path Sum
- **Graphs:** Word Ladder, Number of Islands
- **DP:** Regular Expression Matching, Edit Distance

## 🟢 Amazon Favorites
- **Arrays:** Two Sum, 3Sum, Product of Array Except Self
- **Strings:** Valid Palindrome, Group Anagrams
- **Trees:** Lowest Common Ancestor, Binary Tree Level Order Traversal
- **Linked Lists:** Merge K Sorted Lists, Copy List with Random Pointer
- **DP:** Coin Change, Longest Increasing Subsequence

## 🔴 Meta (Facebook) Favorites
- **Arrays:** Move Zeroes, Rotate Array, Subarray Sum Equals K
- **Strings:** Valid Palindrome II, Longest Substring with At Most K Distinct
- **Trees:** Binary Tree Right Side View, Validate BST
- **Graphs:** Clone Graph, Number of Connected Components
- **DP:** Minimum Path Sum, Unique Paths II

## 🟣 Microsoft Favorites
- **Arrays:** Best Time to Buy/Sell Stock (all variants)
- **Strings:** Longest Palindromic Substring, Implement strStr
- **Trees:** Lowest Common Ancestor (both BST and BT versions)
- **Linked Lists:** Reverse Linked List, LRU Cache
- **DP:** Climbing Stairs, House Robber, Word Break

## 🔵 Apple Favorites
- **Arrays:** Merge Intervals, Insert Interval
- **Strings:** Valid Anagram, Palindrome Pairs
- **Trees:** Invert Binary Tree, Diameter of Binary Tree
- **Design:** LRU Cache, Design Twitter
- **DP:** Perfect Squares, Triangle

---

## 💡 Interview Tips

### Time Management
- **Easy:** 15-20 minutes
- **Medium:** 25-35 minutes
- **Hard:** 40-50 minutes

### Problem-Solving Framework (UMPIRE)
1. **U**nderstand - Clarify requirements and constraints
2. **M**atch - Identify pattern (two pointers, DP, etc.)
3. **P**lan - Outline approach before coding
4. **I**mplement - Write clean, readable code
5. **R**eview - Check edge cases and optimize
6. **E**valuate - Analyze time/space complexity

### Common Pitfalls to Avoid
- ❌ Not asking clarifying questions
- ❌ Jumping to code without a plan
- ❌ Not considering edge cases
- ❌ Poor variable naming
- ❌ Not testing your solution
- ❌ Giving up too quickly on hard problems

### What Interviewers Look For
- ✅ Clear communication
- ✅ Structured thinking
- ✅ Clean, readable code
- ✅ Edge case handling
- ✅ Complexity analysis
- ✅ Ability to optimize

---

**Good luck with your interviews! 🚀**

*Remember: Consistency beats intensity. Practice regularly, and you'll see improvement!*
