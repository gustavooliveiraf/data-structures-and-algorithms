// https://leetcode.com/problems/palindrome-linked-list
function isPalindromeRecursion(head, object) {
  if (head === null) {
    return true;
  }
  const isPalindromeGlobal = isPalindromeRecursion(head.next, object);
  const isPalindromeLocal = head.val === object.pointer.val;
  object.pointer = object.pointer.next;

  return isPalindromeLocal && isPalindromeGlobal;
}

var isPalindrome = function(head) {
  return isPalindromeRecursion(head, { pointer: head });
};
