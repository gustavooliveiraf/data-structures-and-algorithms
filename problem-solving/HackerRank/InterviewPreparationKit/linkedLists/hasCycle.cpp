// https://www.hackerrank.com/challenges/ctci-linked-list-cycle/problem
#include <bits/stdc++.h>
bool has_cycle(Node* head) {
    unordered_set<Node*> set;
    while (head != NULL) {
        if (set.find(head) != set.end()) return true;
        set.insert(head); 
        head = head->next;
    }
 
    return false;
}
