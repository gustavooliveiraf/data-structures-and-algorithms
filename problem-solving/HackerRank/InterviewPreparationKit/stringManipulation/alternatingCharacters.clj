; https://www.hackerrank.com/challenges/alternating-characters
(defn alternatingCharacters [str]
  (loop [index 1
         deletions 0]
    (if (= index (count str))
      deletions
      (recur (inc index)
             (if (= (get str (dec index)) (get str index)) (inc deletions) deletions)))))

(alternatingCharacters "AAABBB")
